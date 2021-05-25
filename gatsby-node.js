const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            slug
            status
            title
          }
        }
      }
      allWpAcfPages {
        nodes {
          id
          acf {
            page_blocks {
              block_type
              cta_button {
                button_caption
                button_link_direction
                button_link_url
                text
                title
              }
              feature_block {
                button_caption
                button_link_direction
                button_link_url
                text
                title
                image {
                  localFile {
                    url
                  }
                  id
                }
              }
              highlighted_statement_content {
                author
                background_color
                quote
                background_image{
                  localFile {
                    url
                  }
                }
              }
              opening_section_content {
                text
                title
                hero_image_desktop {
                  id
                  localFile {
                    url
                  }
                }
                hero_image_mobile {
                  id
                  localFile {
                    url
                  }
                }
              }
              body_content {
                text
              }
              body_wide_image {
                image {
                  id
                  localFile {
                    url
                  }
                }
              }
              body_button {
                button_caption
                button_link_direction
                button_link_url
              }
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pageTemplate = path.resolve(`./src/templates/page.js`)

    // Only publish pages with a `status === 'publish'` in production. This
    // excludes drafts, future posts, etc. They will appear in development,
    // but not in a production build.

    const allAcfPages = result.data.allWordpressAcfPages.nodes
    acfPages = [];
    _.each(allAcfPages, (acfPage) => {
      acfPages[acfPage.wordpress_id] = acfPage
    });

    const allPages = result.data.allWordpressPage.edges
    const pages =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPages)
        : allPages

    // Call `createPage()` once per WordPress page
    _.each(pages, ({ node: page }) => {
      createPage({
        path: `/${page.slug}/`,
        component: pageTemplate,
        context: {
          page: acfPages[page.wordpress_id],
        },
      })
    })
  })
  .then(() => {
    const indexTemplate = path.resolve(`./src/templates/index.js`)

    createPage({
      path: `/`,
      component: indexTemplate,
      context: {},
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
