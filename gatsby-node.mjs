import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import { globby } from 'globby'
import * as yaml from 'js-yaml';
import pMap from 'p-map'

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

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
  // Replaces all image urls with the correct relative paths
  const paths_html = await globby(['public/**/*.html']);
  const paths_js = await globby(['public/**/*.js']);
  const paths_json = await globby(['public/**/*.json']);
  const paths = paths_html.concat(paths_js).concat(paths_json);
  console.log(paths);

  await pMap(paths, async (path) => {
    if (path.includes('public/index.html')){
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

export default { createPages, onPostBuild }
