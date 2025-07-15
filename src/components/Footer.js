import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import md5 from '../services/md5-service'

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allFooterIndexYaml {
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
        allNetworkIndexYaml(sort: { title: ASC }) {
          nodes {
            color
            title
            link
          }
        }
        allSocialMediaIndexYaml {
          nodes {
            icon_code
            label
            link
          }
        }
      }
    `
  )

  const social = data.allSocialMediaIndexYaml.nodes
  const options = data.allFooterIndexYaml.nodes
  const cities = data.allNetworkIndexYaml.nodes

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
              />

              <div className="footer__social d-none d-md-inline-block">
                <div>
                  {social.map((item) => (
                    <a
                      className="footer__social-item"
                      href={item.link}
                      target="_blank"
                      key={md5(item.label)}
                      dangerouslySetInnerHTML={{ __html: item.icon_code }}
                      rel="noreferrer me"
                    />
                  ))}
                </div>
              </div>

              <div className=" footer__distributedpress">
                <h3>Powered by</h3>
                <a
                  className=""
                  href="https://distributed.press"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/logo-distributedpress-grey.png"
                    alt="Distributed Press Logo"
                    width="70%"
                  />
                </a>
                <br />
                <a
                  className="footer__distributedpress-link"
                  href="ipns://distributed.press"
                >
                  ipns://
                </a>

                <a
                  className="footer__distributedpress-link"
                  href="hyper://distributed.press"
                >
                  hyper://
                </a>
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
                    rel="noreferrer"
                  >
                    {city.title}
                  </a>
                ))}
                <a
                  className="footer__network-nodes-bottom-link"
                  href="../start-a-dweb-node/"
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
                      rel="noreferrer"
                    />
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
                            rel="noreferrer"
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
                            rel="noreferrer"
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
                  href="../privacy-policy"
                  target="_blank"
                  key={md5('Privacy policy')}
                >
                  Privacy policy
                </a>
              </div>
              <div
                className="footer__copyright"
                dangerouslySetInnerHTML={{
                  // __html: `©${new Date().getFullYear()} View this website on <a href=\"ipns://getdweb.net\">IPFS</a> and <a href=\"hyper://4392a5062f7bf93c26543ca7a85a009b4e568117d107f31788676377e7b4ef45\">Hypercore</a>.`,
                  __html: `©${new Date().getFullYear()}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
