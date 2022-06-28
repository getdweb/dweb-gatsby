import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function HeaderButton() {
  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "nodes": [
        {
          "options": {
            "header_button_url": "/get-involved"
          }
        }
      ]
    }
  }
}`)

  const {header_button_url} = data.data.allWordpressAcfOptions.nodes[0].options;

  return (
    <Link to={header_button_url} className="navbar__button">Get involved</Link>
  )
}
