import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function MenuSocial() {
  const data = useStaticQuery(
    graphql`
      query {
        allSocialMediaYaml {
          nodes {
            icon_code
            label
            link
          }
        }
      }
    `
  )

  const socials = data.allSocialMediaYaml.nodes

  return (
    <div className="navbar__menus__social menu-social">
      {socials.map((item) => (
        <a
          className="menu-social__item"
          href={item.link}
          target="_blank"
          key={`menu-social-${md5(item.label)}`}
          dangerouslySetInnerHTML={{ __html: item.icon_code }}
          rel="noreferrer"
        />
      ))}
    </div>
  )
}
