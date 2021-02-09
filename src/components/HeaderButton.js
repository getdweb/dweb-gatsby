import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function HeaderButton() {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              header_button_url
            }
          }
        }
      }
    `
  )
  
  const {header_button_url} = data.allWordpressAcfOptions.nodes[0].options;

  return (
    <Link to={header_button_url} className="navbar__button">Get involved</Link>
  )
}
