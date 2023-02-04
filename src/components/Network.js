import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function Network() {
  const data = useStaticQuery(
    graphql`
      query {
        allNetworkYaml(sort: {title: ASC}) {
          nodes {
            color
            city_image_url
            link
            title
          }
        }
      }
    `
  )

  const cities = data.allNetworkYaml.nodes

  return (
    <div className="network" id="nodes">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="network__intro">
              Our DWeb network has Nodes, or DWeb Meetup groups, based in cities
              around the world. These Nodes organize local events for people to
              meet others, exchange knowledge, and deepen connections across the
              Dweb community.
            </div>
            <div className="network__nodes">
              {cities.map((city) => {
                return (
                  <div className="network__node" key={md5(city.title)}>
                    <a
                      className="network__node-link"
                      href={city.link}
                      style={{ color: city.color }}
                    >
                      {city.title}
                      <svg
                        className="network__node-link-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill={city.color}
                          fillRule="evenodd"
                          d="M12 0v8.755h-1.75l-.001-5.767L1.239 12 0 10.762 9.011 1.75H3.245V0H12z"
                        />
                      </svg>
                    </a>
                    {city.city_image_url && city.city_image_url !== null ? (
                      <div
                        style={{
                          backgroundImage: `url(${city.city_image_url})`,
                        }}
                        className="network__node-image"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                )
              })}
            </div>
            <div className="network__add-node-pre">
              Add your city to the network:
            </div>
            <a
              className="network__add-node-link d-xl-none"
              href="../start-a-dweb-node"
            >
              Start a node
            </a>
            <a
              className="network__add-node-link d-none d-xl-inline-block"
              href="../start-a-dweb-node"
            >
              add your city
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
