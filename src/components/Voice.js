import React, { Component } from 'react'

class Voice extends Component {
  state = {
    top: 0,
    left: 0
  };

  // rand=(min, max)=>Math.floor(Math.random() * max) + min;
  // randHeight=()=>this.rand(100, 250)
  // randColor=()=>{
  //   var colors = ['red', 'yellow', 'blue', 'green', 'brown', 'orange', 'purple', 'pink', 'black', 'grey'];
  //   return colors[this.rand(0, 9)];
  // }

  constructor(props) {
    super(props);
    this.voice = props.voice;
    this.i = props.i;
    // console.log(this.i);
    this.state = {
      top: 0,
      left: 0
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    var category = 
      this.voice.acf.voice_category != null 
      ? (<span className="voice__category">{this.voice.acf.voice_category.name}.&ensp;</span>)  
      : "";
    var image = "";
    if (this.voice.acf.image){
      image = (<img className="voice__image" src={this.voice.acf.image.localFile.url} />);
    }
    var date_parts = this.voice.acf.date.split('#');
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
            <a className="voice__title">{this.voice.title.rendered}</a>
          </div>
          <div className="voice__intro">{this.voice.acf.intro}</div>
      </div>
    )
  }
}


export default Voice;