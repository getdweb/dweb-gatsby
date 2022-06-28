import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function GetInvolvedQuote() {

  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "nodes": [
        {
          "options": {
            "get_involved_main_quote": "Try some things out. Break some stuff. Invest some time and effort. Let\'s build a better, open world, one that serves more of us. That\'s the opportunity, and we need lots of participation. Let\'s do this as a global project together!",
            "get_involved_main_qoute_person": "Brewster Kale",
            "get_involved_main_qoute_photo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/11/brewster-kale.jpg"
              }
            }
          }
        }
      ]
    }
  }
}`)

  const options = data.data.allWordpressAcfOptions.nodes[0].options;

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