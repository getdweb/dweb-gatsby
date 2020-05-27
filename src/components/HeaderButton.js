import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function HeaderButton() {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                header_button_state_1 {
                  localFile {
                    url
                  }
                }
                header_button_state_2 {
                  localFile {
                    url
                  }
                }
                header_button_url
              }
            }
          }
        }
      }
    `
  )

  const header_button_state_1 = data.allWordpressAcfOptions.edges[0].node.options.header_button_state_1
  const header_button_state_2 = data.allWordpressAcfOptions.edges[0].node.options.header_button_state_2
  const header_button_url = data.allWordpressAcfOptions.edges[0].node.options.header_button_url

  return (
    <a 
      href={header_button_url} className="navbar__button"
      >
        <div 
          className="navbar__button__state1"
          style={{backgroundImage: 'url(' + header_button_state_1.localFile.url + ')'}}></div>
        <div
          className="navbar__button__state2"
          style={{backgroundImage: 'url(' + header_button_state_2.localFile.url + ')'}}></div>
    </a>
  )
}
