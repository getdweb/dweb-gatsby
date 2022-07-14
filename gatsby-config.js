const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Get Dweb Dot Net',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       default: path.resolve('./src/components/Layout-MDX.js'),
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        printRejected: true,
        ignore: ['.cache/'],
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
