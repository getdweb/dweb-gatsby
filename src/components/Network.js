import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function Network() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpCity(sort: {order: ASC, fields: title}) {
          nodes {
            title
            acf {
              color
              city_image {
                localFile {
                  url
                }
              }
              link
            }
            wordpress_id
          }
        }
        wordpressAcfOptions {
          options {
            network_intro
            start_a_node_link
          }
        }
      }
    `
  )

  const cities = data.allWordpressWpCity.nodes;
  const options = data.wordpressAcfOptions.options;
  let preloadArray = [];

  return (
    <div className="network" id="nodes">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="network__intro">{options.network_intro}</div>
            <div className="network__nodes">
              {cities.map((city) => {
                if (city.acf.city_image && city.acf.city_image !== null && city.acf.city_image.localFile !== null){
                  if (typeof window === `undefined`) return;
                  let preloadImage = new Image();
                  preloadImage.src = city.acf.city_image.localFile.url;
                  preloadArray.push(preloadImage);
                }
                return (
                  <div className="network__node" key={md5(city.title)}>
                    <a className="network__node-link" href={city.acf.link} style={{color: city.acf.color}}>
                      {city.title}
                      <svg className="network__node-link-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path fill={city.acf.color} fillRule="evenodd" d="M12 0v8.755h-1.75l-.001-5.767L1.239 12 0 10.762 9.011 1.75H3.245V0H12z"/>
                      </svg>
                    </a>
                    {city.acf.city_image && city.acf.city_image !== null && city.acf.city_image.localFile !== null
                      ? <div style={{backgroundImage: `url(${city.acf.city_image.localFile.url})`}} className="network__node-image"></div>
                      : ""}
                  </div>
                );
                })}
            </div>
            <div className="network__add-node-pre">Add your city to the network:</div>
            <a className="network__add-node-link d-xl-none" href={options.start_a_node_link}>Start a node</a>
            <a className="network__add-node-link d-none d-xl-inline-block" href={options.start_a_node_link}>add your city</a>
          </div>
        </div>
      </div>
    </div>
  )
}