import React, { useState, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import favicon from '../img/favicon.svg'
import Helmet from 'react-helmet'
import {FaqQ, FaqA} from './LayoutPrinciples'

import Navbar from './Navbar'

export default function PageLayout(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  let content = props.children
  console.log(props)

  const menuLinkClick = () => {
    setMenuOpen(() => {
      return !menuOpen
    })
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  let contentInlineStyle = menuOpen ? { display: 'none' } : {}

  return (
    <div>
      <Helmet title="DWeb">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar
        menuLinkClick={menuLinkClick}
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />
      <div className="content" style={contentInlineStyle}>
        <div className="container faq">
          <div className="row">
            <div className="col col-12 col-xs-12">
              <div className="faq-sections faq-pair open">
                <MDXProvider
                  components={{
                    h1: FaqQ,
                    ol: FaqA,
                  }}
                >
                  {content}
                </MDXProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
