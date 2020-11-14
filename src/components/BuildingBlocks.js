import React, {useState} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import md5 from '../services/md5-service'

export default function BuildingBlocks() {


  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpBuildingBlock(sort: {order: ASC, fields: date}) {
          nodes {
            title
            acf {
              button_label
              button_link
              link_target
              image {
                localFile {
                  url
                }
              }
              text
            }
            date
            id
          }
        }
      }
    `
  )

  const blocks = data.allWordpressWpBuildingBlock.nodes;

  return (
    <div className="building-blocks">
      {blocks.map((block) => {
        let button;
        if (block.acf.link_target == "internal"){
          button = <Link to={block.acf.button_link} className="btn building-block__btn">{block.acf.button_label}</Link>
        } else {
          button = <a href={block.acf.button_link} className="btn building-block__btn" target="_blank">{block.acf.button_label}</a>
        }
        return (
          <div className="building-block" key={block.id}>
            <div className="building-block__right" style={{backgroundImage: 'url(' + block.acf.image.localFile.url + ')'}}>
            </div>
            <div className="building-block__left">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header building-block__header">{block.title}</div>
                    <div className="building-block__text" dangerouslySetInnerHTML={{__html: block.acf.text}}></div>
                    {button}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}