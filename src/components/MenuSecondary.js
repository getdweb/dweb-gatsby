import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

function MenuSecondary() {

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

  const menu_items = data.allWordpressMenusMenusItems.edges[0].node.items;
  
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

// export default withRouter(MenuSecondary)
export default MenuSecondary

