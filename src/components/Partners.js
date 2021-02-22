import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Partners() {

  const data = useStaticQuery(
    graphql`
      query {
        wordpressAcfOptions {
          options {
            partners_header
            partners_intro
            partners_left_button_caption
            partners_left_button_link
            partners_right_button_caption
            partners_right_button_link
            partners_sponsors {
              logo {
                localFile {
                  url
                }
                id
              }
            }
            partners_sponsors_text
          }
        }
      }
    `
  )

  const options = data.wordpressAcfOptions.options;
  let i = 0;

  const leftButton = <Link to={options.partners_left_button_link} className="btn">{options.partners_left_button_caption}</Link>;
  const rightButton = options.partners_right_button_caption != "" ? <Link to={options.partners_right_button_link} className="btn">{options.partners_right_button_caption}</Link> : "";

  return (
    <div className="partners" id="partners">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header">{options.partners_header}</div>
            <div className="partners__intro" dangerouslySetInnerHTML={{__html: options.partners_intro}}></div>
            <div className="partners__buttons">
              {leftButton}
              {rightButton}
            </div>
            <div className="partners__middletext">{options.partners_sponsors_text}</div>
          </div>
        </div>
      </div>
      <div className="logos">
        {options.partners_sponsors.map((sponsor) => {
          i++;
          const sponsorLogoUrl = sponsor.logo.localFile !== null ? sponsor.logo.localFile.url : "";
          return (
            <div 
              className="logos__item" 
              key={sponsor.logo.id + i}
              style={{backgroundImage: `url(${sponsorLogoUrl})`}}>
            </div>
          );
        })}
      </div>
    </div>
  )
}