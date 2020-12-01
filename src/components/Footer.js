import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import md5 from '../services/md5-service'

export default function Footer() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                footer_social_links {
                  icon_code
                  label
                  link
                }
                footer_text
                footer_menu_line {
                  label
                  link
                }
                footer_menu_blocks {
                  header
                  links {
                    label
                    link
                  }
                }
                footer_copyright
                network_nodes_bottom_link_label
                network_nodes_bottom_link_url
                network_nodes_header
              }
            }
          }
        }
        allWordpressWpCity(sort: {order: ASC, fields: title}) {
          nodes {
            title
            acf {
              color
            }
            wordpress_id
          }
        }
      }
    `
  )

  var options = data.allWordpressAcfOptions.edges[0].node.options;
  const cities = data.allWordpressWpCity.nodes;

  let social_links_last_3 = [];
  if (options.footer_social_links.length >= 7){
    social_links_last_3 = options.footer_social_links.slice(Math.max(options.footer_social_links.length - 3, 0));
    options.footer_social_links = options.footer_social_links.slice(0, Math.max(options.footer_social_links.length - 3, 0));
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="d-xl-inline-block footer__left">
              <div className="footer__text" dangerouslySetInnerHTML={{__html: options.footer_text}}></div>

              <div className="footer__social d-none d-md-inline-block">
                <div>
                  {options.footer_social_links.map(item => 
                    (
                    <a className="footer__social-item" href={item.link} target="_blank" key={md5(item.label)} dangerouslySetInnerHTML={{__html: item.icon_code}}></a>
                    )
                  )}
                </div>
                <div>
                  {social_links_last_3.map(item => 
                    (
                    <a className="footer__social-item" href={item.link} target="_blank" key={md5(item.label)} dangerouslySetInnerHTML={{__html: item.icon_code}}></a>
                    )
                  )}
                </div>
              </div>
            </div>
            
            <div className="d-xl-inline-block footer__right">
              <div className="footer__network-nodes-header">{options.network_nodes_header}</div>
              <div className="footer__network-nodes">
                {cities.map(city => (
                  <a className="footer__network-nodes-item" href={city.acf.link} target="_blank" style={{color: city.acf.color}} key={md5(city.title)}>{city.title}</a>
                  )
                )}
                <a className="footer__network-nodes-bottom-link" href={options.network_nodes_bottom_link_url} target="_blank">
                  {options.network_nodes_bottom_link_label}
                </a>
              </div>
              

              <div className="footer__social d-md-none">
                <div>
                  {options.footer_social_links.map(item => 
                    (
                    <a className="footer__social-item" href={item.link} target="_blank" key={md5(item.label)} dangerouslySetInnerHTML={{__html: item.icon_code}}></a>
                    )
                  )}
                </div>
                <div>
                  {social_links_last_3.map(item => 
                    (
                    <a className="footer__social-item" href={item.link} target="_blank" key={md5(item.label)} dangerouslySetInnerHTML={{__html: item.icon_code}}></a>
                    )
                  )}
                </div>
              </div>
              <div className="footer__menus">
                {options.footer_menu_blocks.map(block => 
                  (
                  <div className="footer__menu" key={md5(block.header)}>
                    <div className="footer__menu-header">{block.header}</div>
                    {block.links.map(item => (
                      <a className="footer__menu-link" href={item.link} target="_blank" key={md5(item.label)}>{item.label}</a>
                    ))}
                  </div>
                  )
                )}
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__menuline">
                {options.footer_menu_line.map(item => (
                  <a className="footer__menuline-item" href={item.link} target="_blank" key={md5(item.label)}>{item.label}</a>
                ))}
              </div>
              <div className="footer__copyright" dangerouslySetInnerHTML={{__html: `(c) ${new Date().getFullYear()} ${options.footer_copyright}`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}