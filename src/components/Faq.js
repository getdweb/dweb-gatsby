import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export default function Faq() {
  const data = useStaticQuery(
    graphql`
      query {
        allFaqYaml(sort: { order: ASC, fields: title }) {
          nodes {
            id
            title
            questions {
              answer
              question
            }
          }
        }
      }
    `
  )

  const sections = data.allFaqYaml.nodes
  let i = 0

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <div className="faq">
            <div className="header">FAQ</div>
            <div className="faq-sections">
              {sections.map((section) => {
                i++
                return (
                  <div className="faq-section" key={section.id}>
                    <div className="faq-section__header">
                      <span className="faq-section__number">
                        {i < 10 ? `0${  i}` : i}.{' '}
                      </span>
                      {section.title}
                    </div>
                    {section.questions.map((pair) => (
                        <FaqQuestion pair={pair} key={md5(pair.question)} />
                      ))}
                  </div>
                )
              })}
            </div>
            <div className="faq-notice">
              Have a question of your own?
              <br />
              Let us know via{' '}
              <a href="https://matrix.to/#/!WBhcGXTDMlzyTPWoJv:matrix.org?via=matrix.org&via=tomesh.net&via=privacytools.io">
                community chat
              </a>{' '}
              or by emailing us at dweb [at] archive.org.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
