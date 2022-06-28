import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function GetInvolvedHero() {

  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "nodes": [
        {
          "options": {
            "get_involved_hero_header": "A web for all requires everyone to get involved",
            "get_involved_hero_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/11/Get-involved-hero.png"
              }
            },
            "get_involved_hero_image_mobile": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2021/01/Get-involved-hero-mobile.jpg"
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
    <div className="get-involved-hero">
      <div className="get-involved-hero__image d-none d-md-block" style={{backgroundImage: `url(${options.get_involved_hero_image.localFile.url})`}}></div>
      <div className="get-involved-hero__image d-md-none" style={{backgroundImage: `url(${options.get_involved_hero_image_mobile.localFile.url})`}}></div>
      <div className="get-involved-hero__header">
        {options.get_involved_hero_header}
      </div>
    </div>
  )
}