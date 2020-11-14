import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function HeaderButton() {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
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
    `
  )
  
  const header_button_state_1 = data.allWordpressAcfOptions.nodes[0].options.header_button_state_1
  const header_button_state_2 = data.allWordpressAcfOptions.nodes[0].options.header_button_state_2
  const header_button_url = data.allWordpressAcfOptions.nodes[0].options.header_button_url

  return (
    <Link 
      to={header_button_url} className="navbar__button"
      >
        <div 
          className="navbar__button__state1"
          style={{backgroundImage: 'url(' + header_button_state_1.localFile.url + ')'}}></div>
        <div
          className="navbar__button__state2"
          style={{backgroundImage: 'url(' + header_button_state_2.localFile.url + ')'}}></div>
    </Link>
  )
}
