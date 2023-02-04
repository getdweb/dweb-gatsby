import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import { globby } from 'globby'
import * as yaml from 'js-yaml';
import pMap from 'p-map'

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const COMPONENT_ARR = []
const DATA_ARR = []
let originalIndexContent;

let onPreBootstrap = async () => {
  // clone contents of data folder
  const data_list = fs.readdirSync('./src/data')
  data_list.forEach(data_file => {
    DATA_ARR.push([`./src/data/${data_file.slice(0, -5)}--index.yaml`, `${data_file.slice(0, -5)}--index.yaml`])
    fs.copyFileSync(`./src/data/${data_file}`, `./src/data/${data_file.slice(0, -5)}--index.yaml`)
    console.log(`./src/data/${data_file} COPIED TO ./src/data/${data_file.slice(0, -5)}--index.yaml`)
  })

  // collect components used by index page
  const indexTemplate = path.resolve(`./src/templates/index.js`)
  const buffer = await readFileAsync(indexTemplate)
  let contents = buffer.toString()
  originalIndexContent = contents

  const contentRegex = / *<div>([ \n<>\w\/]*?)*<\/div>/g
  const div = contentRegex.exec(contents)[0];
  const componentsRegex = /<([\w]*) \/>/g
  const components = div.matchAll(componentsRegex)

  // clone components used by index
  for (const matchItem of components) {
    const componentName = matchItem[1]
    COMPONENT_ARR.push([`./src/components/${componentName}--index.js`, componentName])
    fs.copyFileSync(`./src/components/${componentName}.js`, `./src/components/${componentName}--index.js`)
    console.log(`./src/components/${componentName}.js COPIED TO ./src/components/${componentName}--index.js`)
  }

  // modify index imports to be the clone components
  contents = contents
    .replace(/(import [\w]* from '\.\.\/components\/)([^Layout][\w]*)(')/g, "$1$2--index$3");
  await writeFileAsync(indexTemplate, contents);
  console.log(`Updated Imports of ${indexTemplate}`)

  // modify clone components to use clone data
  for (const component of COMPONENT_ARR) {
    let url = component[0]
    const buffer = await readFileAsync(url)
    let componentText = buffer.toString()

    // extract static query from component
    const queryRegex = /graphql`\s*(query[A-Za-z_}{\s\(\)":,]*})\s*`/g
    const queryRegexResult = queryRegex.exec(componentText);
    if (queryRegexResult != null) {
      // extract nodes being accessed on Gatsby data layer
      let queryText = queryRegexResult[0]
      const queryHeaderRegex = /([\w]*)(Yaml)/g
      const queryHeaderRegexResult = queryText.matchAll(queryHeaderRegex)
      // replace all instances of data with clone data
      for (const queryHeader of queryHeaderRegexResult) {
        const headerRegex = new RegExp(queryHeader[0], "g")
        componentText = componentText.replace(headerRegex, `${queryHeader[1]}IndexYaml`)
      }
      await writeFileAsync(url, componentText);
    }
  }

}

let createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const page_list = fs.readdirSync('./static/page-data/')
  // Call `createPage()` once per page
  page_list.forEach(page_name => {
    let page_data = yaml.load(fs.readFileSync(`./static/page-data/${page_name}`, 'utf8'))
    // remove ".yaml" from string
    const slug = page_name.substring(0, page_name.length - 5)

    createPage({
      path: `/${slug}/`,
      component: pageTemplate,
      context: {
        data_array: page_data,
      },
    })
  })

  const indexTemplate = path.resolve(`./src/templates/index.js`)

  createPage({
    path: `/`,
    component: indexTemplate,
    context: {},
  })
}

let TRANSFORM_CONCURRENCY = 10

let onPostBuild = async () => {

  // delete --index variant components
  for (const url of COMPONENT_ARR) {
    fs.unlinkSync(url[0])
    console.log(`REMOVED ${url[0]}`)
  }

  // delete --index variant data files
  for (const url of DATA_ARR) {
    fs.unlinkSync(url[0])
    console.log(`REMOVED ${url[0]}`)
  }

  // restore index
  const indexTemplate = path.resolve(`./src/templates/index.js`)
  await writeFileAsync(indexTemplate, originalIndexContent);
  console.log(`RESTORED ${indexTemplate}`)

  // Replaces all image urls with the correct relative paths
  // const pathsHtmlIndex = await globby(['public/**/*--index.html']);
  // const pathsJsIndex = await globby(['public/**/*.js']);
  // const pathsJsonIndex = await globby(['public/**/*.json']);
  // const pathsIndex = paths_html.concat(paths_js).concat(paths_json);
  // console.log(paths);


  // Replaces all image urls with the correct relative paths
  const paths_html = await globby(['public/**/*.html']);
  const paths_js = await globby(['public/**/*.js']);
  const paths_json = await globby(['public/**/*.json']);
  const paths = paths_html.concat(paths_js).concat(paths_json);
  // console.log(paths);

  await pMap(paths, async (path) => {
    if (path.includes('public/index.html') || path.includes('src-templates-index-js')) {
      console.log("INSIDE PUBLIC TINY WIN")
      const buffer = await readFileAsync(path);
      let contents = buffer.toString();

      // Skip if there's nothing to do
      if (!contents.includes('/images')) {
        return;
      }

      contents = contents
        .replace(/\/images\//g, () => './images/');

      await writeFileAsync(path, contents);
    } else if (path.includes('public/index.html')) {
      const buffer = await readFileAsync(path);
      let contents = buffer.toString();

      // Skip if there's nothing to do
      if (!contents.includes('/images')) {
        return;
      }

      contents = contents
        .replace(/\/images\//g, () => './images/');

      await writeFileAsync(path, contents);
    } else {
      const buffer = await readFileAsync(path);
      let contents = buffer.toString();

      // Skip if there's nothing to do
      if (!contents.includes('/images')) {
        return;
      }

      contents = contents
        .replace(/\/images\//g, () => '../images/');

      await writeFileAsync(path, contents);
    }

  }, { concurrency: TRANSFORM_CONCURRENCY });

  console.log("FINISHED WITH CONCURRENCY")

  // correct Index-specific paths
  const indexPageDataBuffer = await readFileAsync(`./public/page-data/index/page-data.json`)
  let indexPageData = indexPageDataBuffer.toString()
  let indexPageDataJSON = JSON.parse(indexPageData)
  let indexHashArray = indexPageDataJSON.staticQueryHashes
  for (const hash of indexHashArray) {
    const indexHashDataBuffer = await readFileAsync(`./public/page-data/sq/d/${hash}.json`)
    let indexHashData = indexHashDataBuffer.toString()

    // Skip if there's nothing to do
    // if (!indexHashData.includes('/images')) {
    //   return;
    // }

    indexHashData = indexHashData
      .replace(/\.\.\/images\//g, () => './images/');

    // console.log("HASH DATA ++\n" + indexHashData)

    await writeFileAsync(`./public/page-data/sq/d/${hash}.json`, indexHashData);
  }
};

export default { onPreBootstrap, createPages, onPostBuild }
