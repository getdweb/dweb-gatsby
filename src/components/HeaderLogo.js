import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function HeaderLogo() {
  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "edges": [
        {
          "node": {
            "options": {
              "logo": {
                "filename": "DWeb-logo-original.svg",
                "url": {
                  "localFile": {
                    "url": "https://getdweb.net/wp-content/uploads/2020/11/DWeb-logo-original.svg"
                  },
                  "alt_text": ""
                }
              }
            }
          }
        }
      ]
    }
  }
}`)

  const logoObj = data.data.allWordpressAcfOptions.edges[0].node.options.logo;
  const bgUrl = logoObj !== null && logoObj.url.localFile !== null
    ? logoObj.url.localFile.url
    : logoObj.filename;

  return (
    <Link
      to="/"
      className="navbar__logo"
      style={{backgroundImage: `url(${bgUrl})`}}
      alt={data.data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text}
      title={data.data.allWordpressAcfOptions.edges[0].node.options.logo.url.alt_text}>
    </Link>
  )
}
