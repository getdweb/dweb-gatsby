import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function AboutUs() {

  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "edges": [
        {
          "node": {
            "options": {
              "about_us_button_caption": "Read DWeb Principles",
              "about_us_button_link": "/principles",
              "about_us_text": "<p>DWeb connects the people, projects and protocols essential to building a decentralized web. A web that is more private, reliable, secure and open. A web with many winners\\u2014returning to the original vision of the World Wide Web and internet.</p>\\n<p><a href=\\\"/origin-story\\\">Since 2016</a> we have been a bridge enabling diverse communities to freely exchange ideas about the technologies, values, markets and agreements we need to move forward.</p>\\n"
            }
          }
        }
      ]
    }
  }
}
`)

  var options = data.data.allWordpressAcfOptions.edges[0].node.options;

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