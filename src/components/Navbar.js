import React, { useState, useEffect } from 'react'
import MenuPrimary from './MenuPrimary'
import MenuSecondary from './MenuSecondary'
import MenuSocial from './MenuSocial'
import HeaderLogo from './HeaderLogo'
import HeaderButton from './HeaderButton'

export default function Navbar(props) {
  let prevScrollPos = 0;
  let currentScrollPos = 0;

  const [state, setState] = useState({
    hidden: false,
    visible: true,
    top: false
  });

  useEffect(() => {
    if (typeof window === `undefined`) return;
    
    prevScrollPos = window.pageYOffset;
    currentScrollPos = window.pageYOffset;
    window.addEventListener('scroll', setHeaderOffsets(false)); // pass "this" as "navbar" parameter inside the function
  }, []);

  function setHeaderOffsets(just_loaded) {
    if (typeof window === `undefined`) return;
    currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0){
        setState({hidden: false, visible: false, top: true});
    } else if (just_loaded){
        setState({hidden: false, visible: true, top: false});
    } else if (prevScrollPos > currentScrollPos) {
        setState({hidden: false, visible: true, top: false});
      } else {
        setState({hidden: true, visible: false, top: false});
      }
    prevScrollPos = currentScrollPos;
  };

  const navbarClassName = `navbar ${  props.menuOpen ? 'is-menu-open ': ''  }${state.hidden ? 'hidden ': ''  }${state.visible ? 'visible ': ''  }${state.top ? 'top ': ''}`;

  const pathname = typeof window !== `undefined` ? window.location.pathname : "";
  const headerButton = pathname !== '/get-involved' ? <HeaderButton /> : "";
  
  return (
    <nav 
      id="navbar"
      className={navbarClassName}
      >
      <HeaderLogo />
      <div className="navbar__menus">
        <MenuPrimary {...props} />
        <MenuSecondary />
        <MenuSocial />
      </div>
      {headerButton}
      <a
        id="menulink"
        className="navbar__menulink bars"
        rel="noopener noreferrer"
        onClick={props.menuLinkClick}
      >
        <span />
        <span />
        <span />
        <div className="other-bar" />
      </a>
    </nav>
  );
}
