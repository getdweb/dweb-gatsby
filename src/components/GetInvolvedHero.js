import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function GetInvolvedHero() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              get_involved_hero_header
              get_involved_hero_image {
                localFile {
                  url
                }
              }
              get_involved_hero_image_mobile {
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
    <div className="get-involved-hero">
      <div className="get-involved-hero__image d-none d-md-block" style={{backgroundImage: `url(${options.get_involved_hero_image.localFile.url})`}}></div>
      <div className="get-involved-hero__image d-md-none" style={{backgroundImage: `url(${options.get_involved_hero_image_mobile.localFile.url})`}}></div>
      <div className="get-involved-hero__header">
        {options.get_involved_hero_header}
      </div>
    </div>
  )
}