import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HeaderLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                logo {
                  filename
                  url {
                    localFile {
                      url
                    }
                    alt_text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <a 
        href="/" className="navbar__logo"
        style={{backgroundImage: 'url(' + data.allWordpressAcfOptions.edges[0].node.options.logo.url.localFile.url + ')'}}
        alt={data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text} 
        title={data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text}>
      </a>
    )}
  />
)

export default HeaderLogo
