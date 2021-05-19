require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
console.log(`Using .env.${process.env.NODE_ENV}`);
module.exports = {
  siteMetadata: {
    title: 'GetDWeb',
  },
  // pathPrefix: `/aaa/bbb`,
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  // assetPrefix: `/ccc/ddd`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        url: process.env.BASE_URL || 'dweb',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: process.env.PROTOCOL || 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        excludedRoutes: [
          "**/wp-site-health/**",
          "**/yoast/**",
          "**/wp/v2/users/**",
          "**/batch/**",
          "**/wp-rest-yoast-meta/**",
          "**/wp/v2/block-types**",
          "**/wp/v2/settings**",
          "**/wp/v2/themes**",
          "**/wp/v2/plugins**",
          "**/wp/v2/block-directory/**",
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-ipfs'
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
