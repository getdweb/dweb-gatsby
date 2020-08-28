import React, {useState} from 'react'
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
      }
    `
  )

  const sections = data.allWordpressWpFaqSection.nodes;
  let i = 0;

  return (
    <div className="faq">
      <div className="header">FAQ</div>
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
      <div className="faq-notice">Have a question of your own?<br />Let us know via community chat or using this form.</div>
    </div>
  )
}