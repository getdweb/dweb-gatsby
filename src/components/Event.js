import React, { Component } from 'react'

class Event extends Component {
  state = {hover: false};

  constructor(props) {
    super(props);
    this.event = props.event;
    this.cities = props.cities;
    this.period = props.period;
    this.state = {hover: false};
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: this.event.acf.hover_color}
    } else {
      linkStyle = {}
    }
    
    return (
      <div 
        className={"event " + (this.event.acf.image != null ? "event_with-image" : "")}
        style={linkStyle} 
        onMouseEnter={() => {this.toggleHover();}} 
        onMouseLeave={() => {this.toggleHover();}} 
        >
          <div className="event__date">{this.event.acf.started_at.split("#")[0]}</div>
          <div className="event__time">{this.event.acf.started_at.split("#")[1].toUpperCase()}</div>
          <div className="event__underline"></div>
          <div className="event__city" style={{color: this.cities[this.event.acf.city.wordpress_id]}}>{this.event.acf.city.post_title}:</div>
          <a className="event__title">{this.event.title}</a>
          <div className="event__tags">// {
            this.event.acf.event_type.map(function(elem){
              return elem.name;
            }).join(" + ")
          }</div>
          {this.event.acf.image != null ? (<img src={this.event.acf.image.localFile.url} className="event__image" />) : ("")} 
      </div>
    )
  }
}


export default Event;