const _ = require('lodash')
const fs = require('fs');
const path = require('path');
const util = require('util');
const pMap = require('p-map');
const globby = require('globby');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const indexTemplate = path.resolve(`./src/templates/index.js`)

  createPage({
    path: `/`,
    component: indexTemplate,
    context: {},
  })
}

TRANSFORM_CONCURRENCY = 10

exports.onPostBuild = async () => {
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
