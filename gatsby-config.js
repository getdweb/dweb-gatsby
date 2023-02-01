const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Get Dweb Dot Net',
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-ipfs',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        printRejected: true,
        ignore: ['.cache/'],
        // the following headers are used in markdown, but purge-css doesn't
        // know that because the markdown lives in YAML as ## and not <h2>
        whitelist: ['h1', 'h2', 'h3',],
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
          path.join(
            process.cwd(),
            'node_modules/swiper/react/!(*.d).{ts,js,jsx,tsx}'
          ),
        ],
      },
    }, // must be after other CSS plugins
  ],
}
