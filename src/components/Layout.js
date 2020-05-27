import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Events from './Events'
import './all.sass'

class TemplateWrapper extends Component {
  state = {}

  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.menuLinkClick = this.menuLinkClick.bind(this);
  }

  menuLinkClick(){
    console.log("menuLinkClick()");
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  
  render() {
    var contentInlineStyle = this.state.menuOpen ? {display: "none"} : {};
    return (
      <div>
        <Helmet title="Home | Gatsby + WordPress" />
        <Navbar 
          menuLinkClick={this.menuLinkClick} 
          menuOpen={this.state.menuOpen} 
          />
        <div
          className="content"
          style={contentInlineStyle}
          >
          <div className="container">
            <div className="row">
              <div className="col col-12 col-xs-12">
                <Events />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateWrapper;
