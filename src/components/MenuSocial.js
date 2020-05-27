import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
              }
            }
          }
        }
      }
    `
  )
  
  const social_links = data.allWordpressAcfOptions.edges[0].node.options.social

  return (
    <div className="navbar__menus__social menu-social">
      {Object.entries(social_links).filter(function([key,value]) {
          return (value != ""); // Do not print a link if its URL==""
        }).map(([key,value]) => (
          <a
            className={"menu-social__item icon_" + key}
            href={value}
            target="_blank"
            key={key}
            >
          </a>
      ))}
    </div>
  )
}
