import React, { Component } from 'react'
import HtmlEntitiesService from '../services/html-entities-service';

class Voice extends Component {
  state = {
    top: 0,
    left: 0
  };
  htmlEntitiesService = new HtmlEntitiesService();

  constructor(props) {
    super(props);
    this.voice = props.voice;
    this.color = props.color;
    this.i = props.i;
    this.state = {
      top: 0,
      left: 0
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const category = 
      this.voice.acf.voice_category != null 
      ? (<span className="voice__category" style={{color: this.color}}>{this.voice.acf.voice_category.name} </span>)  
      : "";
    let image = "";
    if (this.voice.acf.thumbnail_type !== 'url' && this.voice.acf.image){
      image = (<img className="voice__image" src={this.voice.acf.image.localFile.url} />);
    }else if (this.voice.acf.thumbnail_type == 'url' && this.voice.acf.image_url !== ''){
      image = (<img className="voice__image" src={this.voice.acf.image_url} />);
    }
    const date_parts = this.voice.acf.date.split('#');
    const title = this.htmlEntitiesService.decodeHtmlEntity(this.voice.title);
    return (
      <div
        className="voice"
        id={this.voice.id}
        i={this.i}
        ref="voice"
        >
          {image}
          <div className="voice__byauthor">by <span className="voice__author">{this.voice.acf.author}</span></div>
          <div className="voice__ondate">on <span className="voice_date">{date_parts[1]}</span></div>
          <div>
            {category}
            <a href={this.voice.acf.link} className="voice__title" target="_blank">{title}</a>
          </div>
          <div className="voice__intro">{this.voice.acf.intro}</div>
      </div>
    )
  }
}

export default Voice;