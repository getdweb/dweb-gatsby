import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuSecondary() {

  const data = JSON.parse(`{
    "data": {
      "allWordpressMenusMenusItems": {
        "edges": [
          {
            "node": {
              "id": "6aa1c5a7-c7bb-51df-b6dd-23d84e9800a2",
              "slug": "secondary",
              "name": "secondary",
              "items": [
                {
                  "title": "DWeb principles",
                  "url": "/principles",
                  "object_id": "23"
                },
                {
                  "title": "DWeb Camp",
                  "url": "https://dwebcamp.org/",
                  "object_id": "1182"
                },
                {
                  "title": "Webinars",
                  "url": "/dweb-webinar-series/",
                  "object_id": "1181"
                },
                {
                  "title": "Resources",
                  "url": "/resources",
                  "object_id": "25"
                },
                {
                  "title": "FAQ",
                  "url": "/faq",
                  "object_id": "26"
                },
                {
                  "title": "Newsletter",
                  "url": "https://mailchi.mp/archive/dweb-updates",
                  "object_id": "27"
                },
                {
                  "title": "Get in touch",
                  "url": "/contact",
                  "object_id": "28"
                }
              ]
            }
          }
        ]
      }
    }
  }`)

  const menu_items = data.data.allWordpressMenusMenusItems.edges[0].node.items;

  return (
    <div className="navbar__menus__item menu-secondary" id="menu-secondary">
      {Object.entries(menu_items).map(([key,item]) => {
          if (typeof window === `undefined`) return;
          let activeClass = item.url == window.location.pathname ? " active " : "";
          let link;
          if (item.url.substr(0,1) == "/") {
            link = <Link
              className={" menu-secondary__item " + activeClass}
              to={item.url}
              key={item.object_id}
              >
              {item.title}
            </Link>;
          }else{
            link = <a
              className="menu-secondary__item"
              href={item.url}
              key={item.object_id}
              >
              {item.title}
            </a>;
          }
          return link;
        }
      )}
    </div>
  )
}
