import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import favicon from '../img/favicon.svg'

import Navbar from './Navbar'

export default function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const { content } = props

  const menuLinkClick = () => {
    setMenuOpen(() => !menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const contentInlineStyle = menuOpen ? { display: 'none' } : {}

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
        {content}
      </div>
    </div>
  )
}
