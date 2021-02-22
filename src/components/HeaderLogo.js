import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function HeaderLogo() {
  const data = useStaticQuery(
    graphql`
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
    `
  )

  const logoObj = data.allWordpressAcfOptions.edges[0].node.options.logo;
  const bgUrl = logoObj !== null && logoObj.url.localFile !== null 
    ? logoObj.url.localFile.url 
    : logoObj.filename;
  
  return (
    <Link 
      to="/"
      className="navbar__logo"
      style={{backgroundImage: `url(${bgUrl})`}}
      alt={data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text} 
      title={data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text}>
    </Link>
  )
}

