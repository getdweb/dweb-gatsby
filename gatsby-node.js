const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')


/*

we are trying to resolve a similar issue to:

/*
warn Multiple node fields resolve to the same GraphQL field `wordpress__POST.yoast_meta.content` - [`content`, `content___NODE`]. Gatsby will use `content___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__wp_media.yoast_meta.content` - [`content`, `content___NODE`]. Gatsby will use `content___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__wp_insights.yoast_meta.content` - [`content`, `content___NODE`]. Gatsby will use `content___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__wp_work.yoast_meta.content` - [`content`, `content___NODE`]. Gatsby will use `content___NODE`.

which had fix:

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WordpressYoastMeta @dontInfer {
      property: String
      content: String
    }

    type wordpress__POST implements Node @infer {
      yoast_meta: [WordpressYoastMeta]
    }
  `
  createTypes(typeDefs)
}

so we try to fix:


warn Multiple node fields resolve to the same GraphQL field `wordpress__PAGE.acf.page_blocks.cta_button.button_link_url` - [`button_link_url`, `button_link_url___NODE`]. Gatsby will use `button_link_url___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_voices.acf.image` - [`image`, `image___NODE`]. Gatsby will use `image___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_event.acf.event_image` - [`event_image`, `event_image___NODE`]. Gatsby will use `event_image___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_pages.acf.page_blocks.highlighted_statement_content.background_image` - [`background_image`, `background_image___NODE`]. Gatsby will use `background_image___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_pages.acf.page_blocks.feature_block.image` - [`image`, `image___NODE`]. Gatsby will use `image___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_pages.acf.page_blocks.feature_block.button_link_url` - [`button_link_url`, `button_link_url___NODE`]. Gatsby will use `button_link_url___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_pages.acf.page_blocks.body_wide_image.image` - [`image`, `image___NODE`]. Gatsby will use `image___NODE`.
warn Multiple node fields resolve to the same GraphQL field `wordpress__acf_pages.acf.page_blocks.cta_button.button_link_url` - [`button_link_url`, `button_link_url___NODE`]. Gatsby will use `button_link_url___NODE`.
*/


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type wordpress__acf_pagesAcfPage_blocksCta_button @dontInfer {
    title: String
    text: String
    button_caption: String
    button_link_direction: String
    button_link_url: String
  }

  type wordpress__acf_pagesAcfPage_blocksFeature_block @dontInfer {
    title: String
    text: String
    image: wordpress__wp_media
    button_caption: String
    button_link_direction: String
    button_link_url: String
  }

  type wordpress__PAGEAcfPage_blocksCta_button @dontInfer {
    title: String
    text: String
    button_caption: String
    button_link_direction: String
    button_link_url: String
  }

  type wordpress__PAGEAcfPage_blocksFeature_block @dontInfer {
    title: String
    text: String
    image: wordpress__wp_media
    button_caption: String
    button_link_direction: String
    button_link_url: String
  }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            wordpress_id
            id
            slug
            status
            title
          }
        }
      }
      allWordpressAcfPages {
        nodes {
          id
          wordpress_id
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

    // Write out allAcfPages output to a JSON file for inspection
    fs.writeFile('./allAcfPages.json', JSON.stringify(allAcfPages), err => {
      if (err) {
        console.error(err)
      }
    })

    const acfPages = [];
    _.each(allAcfPages, (acfPage) => {
      acfPages[acfPage.wordpress_id] = acfPage
    });

    const allPages = result.data.allWordpressPage.edges

    // Write out allPages output to a JSON file for inspection
    fs.writeFile('./allPages.json', JSON.stringify(allPages), err => {
      if (err) {
        console.error(err)
      }
    })

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
