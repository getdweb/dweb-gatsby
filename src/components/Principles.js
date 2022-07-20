import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export default function Principles() {
  const data = useStaticQuery(
    graphql`
      query {
        allPrinciplesYaml {
          nodes {
            title
            description
          }
        }
        allPrinciplesPeopleYaml {
          nodes {
            people
            label
          }
        }
      }
    `
  )

  const principles = data.allPrinciplesYaml.nodes
  const peopleGroups = data.allPrinciplesPeopleYaml.nodes

  return (
    <div className="container faq">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <div className="header">DWeb Principles</div>
          <div className="header-notice">
            <p>PURPOSE AND ORIGIN</p>
            <p>
              These principles define the values of a decentralized web based on
              enabling agency of all peoples. It is the basis for behavioral
              norms and mutual accountability.
            </p>
            <p>
              These principles originate from members of the DWeb Community —
              those involved with and convened by the Internet Archive's work on
              the decentralized web. These stand alongside other sets of
              principles that share or expand upon these values, in recognition
              that our efforts to build a more just and equitable world are
              interdependent.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-xs-12">
          <div className="faq-sections">
            {principles.map((principle) => {
              const pair = {
                question: principle.title,
                answer: principle.description,
              }
              return <FaqQuestion pair={pair} key={md5(pair.question)} />
            })}
          </div>
          <div className="faq-notice">
            {peopleGroups.map((group) => {
              return (
                <p>
                  {group.label}:
                  {group.people.map((name) => {
                    return (
                      <span>
                        <br />
                        {name}
                      </span>
                    )
                  })}
                </p>
              )
            })}
            <p>
              If you would like to add your name as a supporter,{' '}
              <a href="https://form.jotform.com/210466965675165\">
                please fill out this form
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
