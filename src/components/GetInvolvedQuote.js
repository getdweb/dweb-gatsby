import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function GetInvolvedQuote() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              get_involved_main_quote
              get_involved_main_qoute_person
              get_involved_main_qoute_photo {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  const options = data.allWordpressAcfOptions.nodes[0].options;

  return (
    <div className="get-involved-main-quote" style={{backgroundImage: `url(${options.get_involved_main_qoute_photo.localFile.url})`}}>
      <div className="get-involved-main-quote__words">
        {options.get_involved_main_quote}
      </div>
      <div className="get-involved-main-quote__person">
        - {options.get_involved_main_qoute_person}
      </div>
    </div>
  )
}