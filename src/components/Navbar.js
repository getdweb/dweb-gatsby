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
    // console.log("prev:" + prevScrollPos + "; current:" + currentScrollPos);
    if (currentScrollPos == 0){
        setState({hidden: false, visible: false, top: true});
    } else if (just_loaded){
        setState({hidden: false, visible: true, top: false});
    } else {
      if (prevScrollPos > currentScrollPos) {
        setState({hidden: false, visible: true, top: false});
      } else {
        setState({hidden: true, visible: false, top: false});
      }
    }
    // console.log(state);
    prevScrollPos = currentScrollPos;
  };

  var navbarClassName = 'navbar ' + (props.menuOpen ? 'is-menu-open ': '') + (state.hidden ? 'hidden ': '') + (state.visible ? 'visible ': '') + (state.top ? 'top ': '');
  
  return (
    <nav 
      id="navbar"
      className={navbarClassName}
      >
      <HeaderLogo></HeaderLogo>
      <div className="navbar__menus">
        <MenuPrimary {...props}></MenuPrimary>
        <MenuSecondary></MenuSecondary>
        <MenuSocial></MenuSocial>
      </div>
      <HeaderButton></HeaderButton>
      <a
        id="menulink"
        className="navbar__menulink bars"
        rel="noopener noreferrer"
        // onClick={ () => {setState({open: !this.state.open});}}
        onClick={props.menuLinkClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <div className="other-bar"></div>
      </a>
    </nav>
  );
}

