import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function AboutUs() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                about_us_button_caption
                about_us_button_link
                about_us_text
              }
            }
          }
        }
      }
    `
  )

  var options = data.allWordpressAcfOptions.edges[0].node.options;

  return (
    <div className="about-us" id="mission">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-10 col-lg-8">
            <div className="about-us__text" dangerouslySetInnerHTML={{__html: options.about_us_text}}></div>
            <Link to={options.about_us_button_link} className="btn about-us__btn">{options.about_us_button_caption}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}