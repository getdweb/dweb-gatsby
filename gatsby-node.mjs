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
  const indexTemplate = path.resolve(`./src/templates/index.js`)
  const buffer = await readFileAsync(indexTemplate)
  let contents = buffer.toString()
  originalIndexContent = contents

  // collect components used by index page
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

  // clone contents of data folder
  const data_list = fs.readdirSync('./src/data')
  data_list.forEach(data_file => {
    DATA_ARR.push([`./src/data/${data_file.slice(0, -5)}--index.yaml`, `${data_file.slice(0, -5)}--index.yaml`])
    fs.copyFileSync(`./src/data/${data_file}`, `./src/data/${data_file.slice(0, -5)}--index.yaml`)
    console.log(`./src/data/${data_file} COPIED TO ./src/data/${data_file.slice(0, -5)}--index.yaml`)
  })

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
  const paths_html = await globby(['public/**/*.html']);
  const paths_js = await globby(['public/**/*.js']);
  const paths_json = await globby(['public/**/*.json']);
  const paths = paths_html.concat(paths_js).concat(paths_json);
  console.log(paths);

  await pMap(paths, async (path) => {
    if (path.includes('public/index.html')) {
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
};

export default { onPreBootstrap, createPages, onPostBuild }
