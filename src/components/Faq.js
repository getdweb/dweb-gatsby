import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export default function Faq() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpFaqSection(sort: {order: ASC, fields: title}) {
          nodes {
            id
            title
            acf {
              questions {
                answer
                question
              }
            }
          }
        }
        wordpressAcfOptions {
          options{
            faq_header
            faq_bottom_text
          }
        }
      }
    `
  )

  const options = data.wordpressAcfOptions.options;

  const sections = data.allWordpressWpFaqSection.nodes;
  let i = 0;

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <div className="faq">
            <div className="header">{options.faq_header}</div>
            <div className="faq-sections">
              {sections.map((section) => {
                i++;
                return (
                  <div className="faq-section" key={section.id}>
                    <div className="faq-section__header"><span className="faq-section__number">{i<10 ? "0"+i : i}. </span>{section.title}</div>
                    {section.acf.questions.map((pair) => {
                      return (
                        <FaqQuestion pair={pair} key={md5(pair.question)} />
                      );
                    })}
                  </div>
                );
                })}
            </div>
            <div className="faq-notice" dangerouslySetInnerHTML={{__html: options.faq_bottom_text}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}