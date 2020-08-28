import React, { Component } from 'react'
import MenuPrimary from './MenuPrimary'
import MenuSecondary from './MenuSecondary'
import MenuSocial from './MenuSocial'
import HeaderLogo from './HeaderLogo'
import HeaderButton from './HeaderButton'

class Navbar extends Component {
  state = {}
  prevScrollpos = 0;
  currentScrollPos = 0;

  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      visible: true,
      top: false
    }
    if (typeof window === `undefined`) return;
    this.prevScrollpos = window.pageYOffset;
    this.currentScrollPos = window.pageYOffset;
  }

  componentDidMount() {
    if (typeof window === `undefined`) return;
    window.addEventListener('scroll', (event) => ((navbar) => {
      // console.log('scroll');
      // console.log(event, navbar);
      navbar.setHeaderOffsets(false);
    })(this)); // pass "this" as "navbar" parameter inside the function
  }

  setHeaderOffsets(just_loaded) {
    if (typeof window === `undefined`) return;
    this.currentScrollPos = window.pageYOffset;
    // console.log("prev:" + this.prevScrollpos + "; current:" + this.currentScrollPos);
    if (this.currentScrollPos == 0){
        this.setState({hidden: false, visible: false, top: true});
    } else if (just_loaded){
        this.setState({hidden: false, visible: true, top: false});
    } else {
      if (this.prevScrollpos > this.currentScrollPos) {
        this.setState({hidden: false, visible: true, top: false});
      } else {
        this.setState({hidden: true, visible: false, top: false});
      }
    }
    // console.log(this.state);
    this.prevScrollpos = this.currentScrollPos;
  };

  render() {
    var navbarClassName = 'navbar ' + (this.props.menuOpen ? 'is-menu-open ': '') + (this.state.hidden ? 'hidden ': '') + (this.state.visible ? 'visible ': '') + (this.state.top ? 'top ': '');
    return (
      <nav 
        id="navbar"
        className={navbarClassName}
        >
        <HeaderLogo></HeaderLogo>
        <div className="navbar__menus">
          <MenuPrimary></MenuPrimary>
          <MenuSecondary></MenuSecondary>
          <MenuSocial></MenuSocial>
        </div>
        <HeaderButton></HeaderButton>
        <a
          id="menulink"
          className="navbar__menulink bars"
          rel="noopener noreferrer"
          // onClick={ () => {this.setState({open: !this.state.open});}}
          onClick={this.props.menuLinkClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <div className="other-bar"></div>
        </a>
      </nav>
    )
  }
}


export default Navbar;