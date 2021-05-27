const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {   
    pages {
      edges {     
        node {    
          id    
            slug  
            page_blocks {
              pageBlocks {  
                blockType   
                  ctaButton {
                    buttonCaption
                      buttonLinkDirection
                      buttonLinkUrl    
                      text    
                      title    
                  }
                featureBlock {  
                  buttonCaption
                    buttonLinkDirection
                    buttonLinkUrl
                    text      
                    title       
                    image {
                      mediaItemUrl
                      id
                      }  
                }  
                highlightedStatementContent { 
                  author
                    backgroundColor
                    quote
                    backgroundImage{
                      mediaItemUrl
                      id
                      } 
                }
                openingSectionContent { 
                  text
                    title
                    heroImageDesktop {
                      mediaItemUrl
                      id
                      } 
                  heroImageMobile {
                      mediaItemUrl
                      id
                      } 
                }
                bodyContent {
                  text
                }
                bodyWideImage { 
                  image {
                      mediaItemUrl
                      id
                      } 
                }
                bodyButton {
                  buttonCaption
                    buttonLinkDirection
                    buttonLinkUrl
                }
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

    const allAcfPages = result.data.allWpAcfPages.nodes
    acfPages = [];
    _.each(allAcfPages, (acfPage) => {
      acfPages[acfPage.id] = acfPage
    });

    const allPages = result.data.allWpPage.edges
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
          page: acfPages[page.id],
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
