import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
// const globby = require('globby')
// const pMap = require('p-map')
import { globby } from 'globby'
import pMap from 'p-map'

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
  const paths = await globby(['public/**/*.html']);

  await pMap(paths, async (path) => {
    const buffer = await readFileAsync(path);
    let contents = buffer.toString();

    // Skip if there's nothing to do
    if (!contents.includes('/images')) {
      return;
    }

    contents = contents
      .replace(/\/images\//g, () => '../images/');

    await writeFileAsync(path, contents);
  }, { concurrency: TRANSFORM_CONCURRENCY });
};

export default { createPages, onPostBuild }
