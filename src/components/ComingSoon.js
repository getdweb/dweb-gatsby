import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroAnimation from '../components/HeroAnimation';

export default function ComingSoon() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              coming_soon_text
            }
          }
        }
      }
    `
  )

  const options = data.allWordpressAcfOptions.nodes[0].options;

  return (
    <div className="coming-soon">
      <div className="coming-soon__animation">
        <HeroAnimation />
      </div>
      <div className="coming-soon__content">
        <div className="coming-soon__text" dangerouslySetInnerHTML={{__html: options.coming_soon_text}}></div>
      </div>
    </div>
  )
}