import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuPrimary(props) {
  const data = useStaticQuery(
    graphql`
      query {
        menuYaml(label: { eq: "primary" }) {
          items {
            object_id
            title
            url
          }
        }
      }
    `
  )

  const menu_items = data.menuYaml.items

  return (
    <div className="navbar__menus__item menu-primary" id="menu-primary">
      {Object.entries(menu_items).map(([key, item]) => (
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
