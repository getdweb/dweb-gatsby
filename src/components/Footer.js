import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import md5 from '../services/md5-service'

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allFooterYaml {
          nodes {
            links {
              direction
              label
              link_external
              link_file
              link_internal
            }
            header
          }
        }
        allNetworkYaml(sort: { fields: title, order: ASC }) {
          nodes {
            color
            title
            link
          }
        }
        allSocialYaml {
          nodes {
            icon_code
            label
            link
          }
        }
      }
    `
  )

  const social = data.allSocialYaml.nodes
  var options = data.allFooterYaml.nodes
  const cities = data.allNetworkYaml.nodes

  let social_links_last_3 = []
  if (social.length >= 7) {
    social_links_last_3 = social.slice(Math.max(social.length - 3, 0))
    social = social.slice(0, Math.max(social.length - 3, 0))
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="d-xl-inline-block footer__left">
              <div
                className="footer__text"
                dangerouslySetInnerHTML={{
                  __html:
                    'DWeb is a global network of builders and dreamers working to create a better, decentralized web.<br />\r\nThe web we want and deserve.',
                }}
              ></div>

              <div className="footer__social d-none d-md-inline-block">
                <div>
                  {social.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
                <div>
                  {social_links_last_3.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-xl-inline-block footer__right">
              <div className="footer__network-nodes-header">Network nodes:</div>
              <div className="footer__network-nodes">
                {cities.map((city) => (
                  <a
                    className="footer__network-nodes-item"
                    href={city.link}
                    target="_blank"
                    style={{ color: city.color }}
                    key={md5(city.title)}
                  >
                    {city.title}
                  </a>
                ))}
                <a
                  className="footer__network-nodes-bottom-link"
                  href="/start-a-dweb-node/"
                  target="_blank"
                >
                  Open chapter in your city
                </a>
              </div>

              <div className="footer__social d-md-none">
                <div>
                  {social.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
                <div>
                  {social_links_last_3.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                    ></a>
                  ))}
                </div>
              </div>
              <div className="footer__menus">
                {options.map((block) => (
                  <div className="footer__menu" key={md5(block.header)}>
                    <div className="footer__menu-header">{block.header}</div>
                    {block.links.map((item) => {
                      if (item.direction == 'internal')
                        return (
                          <Link
                            className="footer__menu-link"
                            to={item.link_internal}
                            key={md5(item.label)}
                          >
                            {item.label}
                          </Link>
                        )
                      if (item.direction == 'file' && item.link_file !== null)
                        return (
                          <a
                            className="footer__menu-link"
                            href={item.link_file}
                            target="_blank"
                            key={md5(item.label)}
                          >
                            {item.label}
                          </a>
                        )
                      if (item.direction == 'external')
                        return (
                          <a
                            className="footer__menu-link"
                            href={item.link_external}
                            target="_blank"
                            key={md5(item.label)}
                          >
                            {item.label}
                          </a>
                        )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__menuline">
                <a
                  className="footer__menuline-item"
                  href="/privacy-policy"
                  target="_blank"
                  key={md5('Privacy policy')}
                >
                  Privacy policy
                </a>
                <a
                  className="footer__menuline-item"
                  href="https://form.jotform.com/210875439674164"
                  target="_blank"
                  key={md5('Report a bug')}
                >
                  Report a bug
                </a>
              </div>
              <div
                className="footer__copyright"
                dangerouslySetInnerHTML={{
                  __html: `${new Date().getFullYear()} View this website on <a href=\"ipns://getdweb.net\">IPFS</a> and <a href=\"hyper://4392a5062f7bf93c26543ca7a85a009b4e568117d107f31788676377e7b4ef45\">Hypercore</a>.`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
