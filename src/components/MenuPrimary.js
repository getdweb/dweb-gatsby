import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuPrimary() {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressMenusMenusItems(filter: {slug: {eq: "primary"}}) {
          edges {
            node {
              id
              slug
              name
              items {
                title
                url
                object_id
              }
            }
          }
        }
      }
    `
  )

  const menu_items = data.allWordpressMenusMenusItems.edges[0].node.items

  return (
    <div className="navbar__menus__item menu-primary">
      {Object.entries(menu_items).map(([key,item]) => (
        <a
          className="menu-primary__item"
          href={item.url}
          key={item.object_id}
          >
          {item.title}
        </a>
      ))}
    </div>
  )
}
