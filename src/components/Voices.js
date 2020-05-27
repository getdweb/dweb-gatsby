import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Event from './Voice'

export default function Voices() {

  const [page, getVoices] = useState(1);

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpVoices(sort: {fields: acf___date, order: DESC}) {
          nodes {
            title
            acf {
              author
              date
              intro
              link
              image {
                localFile {
                  url
                }
              }
              voice_category {
                name
              }
            }
          }
        }
      }
    `
  )

  var voices = data.allWordpressWpVoices.nodes;
  
  return(
    <div className="voices">
      <div className="header">Voices and ideas of<br />the decentralised web</div>
      <div className="notice voices__notice">If there is an article or video you believe we should mention here,<br />don’t wait - <a href="#">submit a story</a>.</div>
      <div className="masonry">
        {voices.map(voice => (
          <Voice voice={voice} key={voice.id} />
        ))}
      </div>
    </div>
  )
}