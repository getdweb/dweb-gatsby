import React, {useState} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function BuildingBlocks() {


  const data = JSON.parse(`{
  "data": {
    "allWordpressWpBuildingBlock": {
      "nodes": [
        {
          "title": "Get community updates",
          "acf": {
            "button_label": "Subscribe",
            "button_link": "https://mailchi.mp/archive/dweb-updates",
            "link_target": "external",
            "image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2021/02/DWeb-contact-newsletter-color03.png"
              }
            },
            "text": "<p>We send out occasional emails with the latest events and developments in the DWeb community.</p>\\n<p>We only send you the important stuff.<br />\\nSubscribe and stay up to date!</p>\\n"
          },
          "date": "2020-10-03T12:07:31.000Z",
          "id": "e4425522-0442-5dab-a589-229a28da8003"
        },
        {
          "title": "Volunteer",
          "acf": {
            "button_label": "Join the team",
            "button_link": "/join-the-team",
            "link_target": "internal",
            "image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/10/join-the-team-cta-dweb.jpeg"
              }
            },
            "text": "<p><span style=\\\"font-weight: 400;\\\">It takes millions to build a movement and we aspire to harness that kind of energy and support around the world. We need talented organizers, writers, designers, and engineers to coordinate our collective efforts. Interested in being part of the team?\u00a0 We have a list of positions we\\u2019re hoping to fill.</span></p>\\n"
          },
          "date": "2020-10-03T12:08:47.000Z",
          "id": "f475319e-b85c-52f1-ab10-6fe367874d2e"
        },
        {
          "title": "Start a Node",
          "acf": {
            "button_label": "Start a Node",
            "button_link": "/start-a-dweb-node",
            "link_target": "internal",
            "image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/10/start-a-d-web-node.jpg"
              }
            },
            "text": "<p>DWeb Nodes gather like-minded people locally \\u2014 to explore, collaborate, create opportunities to participate and share knowledge about the DWeb movement and its principles.</p>\\n<p>If a DWeb Node does not exist in your area, consider starting one!</p>\\n"
          },
          "date": "2020-10-03T12:09:34.000Z",
          "id": "0e711a9c-12ad-5d9e-99a7-6a55ae0bf2e4"
        }
      ]
    }
  }
}`)

  const blocks = data.data.allWordpressWpBuildingBlock.nodes;

  return (
    <div className="building-blocks">
      {blocks.map((block) => {
        let button;
        if (block.acf.link_target == "internal"){
          button = <Link to={block.acf.button_link} className="btn building-block__btn">{block.acf.button_label}</Link>
        } else {
          button = <a href={block.acf.button_link} className="btn building-block__btn" target="_blank">{block.acf.button_label}</a>
        }
        return (
          <div className="building-block" key={block.id}>
            <div className="building-block__right" style={{backgroundImage: 'url(' + block.acf.image.localFile.url + ')'}}>
            </div>
            <div className="building-block__left">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header building-block__header">{block.title}</div>
                    <div className="building-block__text" dangerouslySetInnerHTML={{__html: block.acf.text}}></div>
                    {button}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}