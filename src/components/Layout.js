import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'

class TemplateWrapper extends Component {
  state = {}

  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.menuLinkClick = this.menuLinkClick.bind(this);

    this.content = props.content;
  }

  menuLinkClick(){
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  
  render() {
    var contentInlineStyle = this.state.menuOpen ? {display: "none"} : {};
    return (
      <div>
        <Helmet title="DWeb" />
        <Navbar 
          menuLinkClick={this.menuLinkClick} 
          menuOpen={this.state.menuOpen} 
          />
        <div
          className="content"
          style={contentInlineStyle}
          >
          
          {this.content}
          
        </div>
      </div>
    )
  }
}

export default TemplateWrapper;
