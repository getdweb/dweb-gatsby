import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'

export default function BuildingBlocks() {
  const data = useStaticQuery(
    graphql`
      query {
        allBuildingBlocksYaml {
          nodes {
            button_link
            button_label
            link_target
            text
            title
            url
          }
        }
      }
    `
  )

  const blocks = data.allBuildingBlocksYaml.nodes

  return (
    <div className="building-blocks">
      {blocks.map((block) => {
        let button
        if (block.link_target == 'internal') {
          button = (
            <Link to={block.button_link} className="btn building-block__btn">
              {block.button_label}
            </Link>
          )
        } else {
          button = (
            <a
              href={block.button_link}
              className="btn building-block__btn"
              target="_blank"
              rel="noreferrer"
            >
              {block.button_label}
            </a>
          )
        }
        return (
          <div className="building-block" key={block.id}>
            <div
              className="building-block__right"
              style={{
                backgroundImage: `url(${block.url})`,
              }}
            />
            <div className="building-block__left">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header building-block__header">
                      {block.title}
                    </div>
                    <div className="building-block__text" >
                      <ReactMarkdown components={{
                        a: ({ node, ...props }) => <a target="_blank" {...props} />
                      }}>
                        {block.text}
                      </ReactMarkdown></div>
                    {button}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
