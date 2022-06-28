import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function Network() {

  const data = JSON.parse(`{
  "data": {
    "allWordpressWpCity": {
      "nodes": [
        {
          "title": "Arizona",
          "acf": {
            "color": "#EA9F67",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/05/AZ-c3-800.png"
              }
            },
            "link": "https://www.meetup.com/Desert-Blockchain"
          },
          "wordpress_id": 63
        },
        {
          "title": "Austin",
          "acf": {
            "color": "#4fccf6",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/05/Aus-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/DWeb-Austin/"
          },
          "wordpress_id": 62
        },
        {
          "title": "Bangalore",
          "acf": {
            "color": "#d62300",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2022/03/DWebBLR-cover.jpg"
              }
            },
            "link": "https://linktr.ee/DWebBLR"
          },
          "wordpress_id": 1093
        },
        {
          "title": "Berlin",
          "acf": {
            "color": "#aae1d7",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/05/bl-c-800.png"
              }
            },
            "link": "https://www.meetup.com/dweb-berlin/"
          },
          "wordpress_id": 61
        },
        {
          "title": "Boston",
          "acf": {
            "color": "#F63139",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/06/Bos-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/DWeb-BOS/"
          },
          "wordpress_id": 246
        },
        {
          "title": "Perm",
          "acf": {
            "color": "#e9e0cb",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/06/perm-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/Permanently-decentralized/"
          },
          "wordpress_id": 252
        },
        {
          "title": "Prague",
          "acf": {
            "color": "#1e72ff",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/06/prague-c2-800.png"
              }
            },
            "link": "https://www.meetup.com/dweb-prague"
          },
          "wordpress_id": 247
        },
        {
          "title": "San Francisco",
          "acf": {
            "color": "#ffff00",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/06/sf-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/dwebsf"
          },
          "wordpress_id": 248
        },
        {
          "title": "Seattle",
          "acf": {
            "color": "#38edb4",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2021/02/seattle-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/ProtoSchool-Seattle-Learn-to-Make-the-Decentralized-Web/"
          },
          "wordpress_id": 657
        },
        {
          "title": "Shanghai",
          "acf": {
            "color": "#9DBCB6",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/06/shanghai-c1-800.png"
              }
            },
            "link": "https://www.meetup.com/dweb-shanghai/"
          },
          "wordpress_id": 249
        },
        {
          "title": "Singapore",
          "acf": {
            "color": "#f97f60",
            "city_image": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2021/10/DWebSingapore-Node-cover.png"
              }
            },
            "link": "https://linktr.ee/DWebSingapore"
          },
          "wordpress_id": 1004
        }
      ]
    },
    "wordpressAcfOptions": {
      "options": {
        "network_intro": "Our DWeb network has Nodes, or DWeb Meetup groups, based in cities around the world. These Nodes organize local events for people to meet others, exchange knowledge, and deepen connections across the Dweb community.",
        "start_a_node_link": "/start-a-dweb-node"
      }
    }
  }
}`)

  const cities = data.data.allWordpressWpCity.nodes;
  const options = data.data.wordpressAcfOptions.options;
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