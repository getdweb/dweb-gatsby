import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuPrimary(props) {
  const data = JSON.parse(`{
    "data": {
      "allWordpressMenusMenusItems": {
        "edges": [
          {
            "node": {
              "id": "344797a4-3d87-5fbc-87d2-a32a5bb9765d",
              "slug": "primary",
              "name": "primary",
              "items": [
                {
                  "title": "Mission",
                  "url": "/#mission",
                  "object_id": "18"
                },
                {
                  "title": "Nodes",
                  "url": "/#nodes",
                  "object_id": "20"
                },
                {
                  "title": "Events",
                  "url": "/#events",
                  "object_id": "19"
                },
                {
                  "title": "Voices",
                  "url": "/#voices",
                  "object_id": "21"
                },
                {
                  "title": "Sponsors",
                  "url": "/#partners",
                  "object_id": "22"
                }
              ]
            }
          }
        ]
      }
    }
  }`)

  const menu_items = data.data.allWordpressMenusMenusItems.edges[0].node.items

  return (
    <div className="navbar__menus__item menu-primary" id="menu-primary">
      {Object.entries(menu_items).map(([key,item]) => (
        <Link
          className="menu-primary__item"
          to={item.url}
          key={item.object_id}
          onClick={props.closeMenu}
          >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
