import React, {useState} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export default function Principles() {

  const data = useStaticQuery(
    graphql`
      query {
        wordpressAcfOptions {
          options {
            principles_header
            principles_intro
            principles_bottom_text
            principles {
              description
              title
            }
          }
        }
      }
    `
  )

  const options = data.wordpressAcfOptions.options;

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <div className="faq">
            <div className="header">{options.principles_header}</div>
            <div className="header-notice" dangerouslySetInnerHTML={{__html: options.principles_intro}}></div>
            <div className="faq-sections">
              {options.principles.map((principle) => {
                const pair = {
                  question: principle.title, 
                  answer:   principle.description
                }
                return (
                  <FaqQuestion pair={pair} key={md5(pair.question)} />
                );
              })}
            </div>
            <div className="faq-notice" dangerouslySetInnerHTML={{__html: options.principles_bottom_text}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}