import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function MenuSocial() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                social {
                  twitter
                  github
                  meetup
                }
                footer_social_links {
                  icon_code
                  label
                  link
                }
              }
            }
          }
        }
      }
    `
  )
  
  const options = data.allWordpressAcfOptions.edges[0].node.options

  return (
    <div className="navbar__menus__social menu-social">
      {options.footer_social_links.map(item => 
        (
        <a 
          className="menu-social__item" 
          href={item.link} 
          target="_blank" 
          key={"menu-social-" + md5(item.label)} 
          dangerouslySetInnerHTML={{__html: item.icon_code}}></a>
        )
      )}
    </div>
  )
}
