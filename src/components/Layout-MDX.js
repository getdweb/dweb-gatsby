import React, { useState, useEffect } from 'react'
import favicon from '../img/favicon.svg'
import Helmet from 'react-helmet'

import Navbar from './Navbar'

export default function PageLayout(props) {

  const [menuOpen, setMenuOpen] = useState(false);

  let content = props.children;
  console.log(props)

  const menuLinkClick = () => {
    setMenuOpen(()=>{
      return !menuOpen;
    })
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  let contentInlineStyle = menuOpen ? {display: "none"} : {};

  return (
    <div>
      <Helmet title="DWeb">
          <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar menuLinkClick={menuLinkClick} menuOpen={menuOpen} closeMenu={closeMenu} />
      <div className="content" style={contentInlineStyle}>
        {content}
      </div>
    </div>
  );
}
