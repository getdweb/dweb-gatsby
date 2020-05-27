import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuSecondary() {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressMenusMenusItems(filter: {slug: {eq: "secondary"}}) {
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
    <div className="navbar__menus__item menu-secondary">
      {Object.entries(menu_items).map(([key,item]) => (
        <a
          className="menu-secondary__item"
          href={item.url}
          key={item.object_id}
          >
          {item.title}
        </a>
      ))}
    </div>
  )
}
