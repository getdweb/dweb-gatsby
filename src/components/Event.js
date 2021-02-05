import React, { Component } from 'react'

class Event extends Component {
  state = {hover: false};

  constructor(props) {
    super(props);
    this.event = props.event;
    this.cities = props.cities;
    this.started_at = typeof this.event.acf.started_at !== 'undefined' ? this.event.acf.started_at.split("*") : [];
    this.state = {hover: false};
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: this.cities[this.event.acf.city.wordpress_id]};
    } else {
      linkStyle = {}
    }
    const date = typeof this.started_at[1] !== 'undefined' ? this.started_at[1].split("#")[0] : "";
    const time = typeof this.started_at[1] !== 'undefined' ? this.started_at[1].split("#")[1].toUpperCase() : "";
    
    return (
      <a 
        className={"event " + (this.event.acf.event_image != null ? "event_with-image" : "")}
        style={linkStyle} 
        onMouseEnter={() => {this.toggleHover();}} 
        onMouseLeave={() => {this.toggleHover();}} 
        href={this.event.acf.registration_link}
        target="_blank"
        >
          <div className="event__date">{date}</div>
          <div className="event__time">{time}</div>
          <div className="event__underline"></div>
          <div className="event__city" style={{color: this.cities[this.event.acf.city.wordpress_id]}}>{this.event.acf.city.post_title}:</div>
          <div className="event__title" dangerouslySetInnerHTML={{__html: this.event.title}}></div>
          <div className="event__tags">{
            this.event.acf.event_type.map(function(elem){
              return elem.name;
            }).join(" + ")
          }</div>
          {this.event.acf.event_image != null ? (<img src={this.event.acf.event_image.localFile.url} className="event__image" />) : ("")} 
      </a>
    )
  }
}

export default Event;