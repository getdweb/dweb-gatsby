import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Partners() {
  const data = useStaticQuery(
    graphql`
      query {
        allPartnersYaml {
          nodes {
            id
            url
          }
        }
      }
    `
  )

  const sponsors = data.allPartnersYaml.nodes
  let i = 0

  const leftButton = (
    <Link
      to="/wp-content/uploads/2021/02/DWeb-Become-a-global-Sponsor.pdf"
      className="btn"
    >
      Become a global sponsor
    </Link>
  )

  return (
    <div className="partners" id="partners">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header">Sponsor the DWeb</div>
            <div className="partners__intro">
              <p>DWeb is a project of the nonprofit Gatherings for Good.</p>
              <p>
                All DWeb events are co-created and powered by a global community
                of volunteer designers, developers, organizers and thought
                leaders.
              </p>
            </div>
            <div className="partners__buttons">{leftButton}</div>
            <div className="partners__middletext">
              We are grateful for the generous support of sponsors:
            </div>
          </div>
        </div>
      </div>
      <div className="logos">
        {sponsors.map((sponsor) => {
          i++
          const sponsorLogoUrl = sponsor.url !== null ? sponsor.url : ''
          return (
            <div
              className="logos__item"
              key={sponsor.id + i}
              style={{ backgroundImage: `url(${sponsorLogoUrl})` }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
