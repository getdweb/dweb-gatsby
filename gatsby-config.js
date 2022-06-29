const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
console.log(`Using .env.${process.env.NODE_ENV}`);
module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  // pathPrefix: `/aaa/bbb`,
  // assetPrefix: `/ccc/ddd`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: { default: path.resolve('./src/components/Layout-MDX.js') },
    //   },
    // },
    // {
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // `gatsby-transformer-yaml`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdownx`,
    //     path: `${__dirname}/src/components/`,
    //   },
    // },
    // {
    //   // Removes unused css rules
    //   resolve:'gatsby-plugin-purgecss',
    //   options: {
    //     // Activates purging in gatsby develop
    //     develop: true,
    //     // Purge only the main css file
    //     purgeOnly: ['/all.sass'],
    //   },
    // }, // must be after other CSS plugins
    // 'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
