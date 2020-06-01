import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Voice from './Voice'


class Voices extends Component {
  state = {}
  // currentScrollPos = window.pageYOffset

  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      voices: {}
    }
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }

  masonryOptions = {
    sm: {
        minWidth: 0,
        colsCount: 1,
        colsWidth: 100,
        gapsWidth: 0,
        unit: '%'
    },
    md: {
        minWidth: 768,
        colsCount: 2,
        colsWidth: 336,
        gapsWidth: 30,
        unit: 'px'
    },
    lg: {
        minWidth: 992,
        colsCount: 2,
        colsWidth: 375,
        gapsWidth: 24,
        unit: 'px'
    },
    xl: {
        minWidth: 1280,
        colsCount: 3,
        colsWidth: 322,
        gapsWidth: 30,
        unit: 'px'
    },
    xxl: {
        minWidth: 1450,
        colsCount: 3,
        colsWidth: 388,
        gapsWidth: 35,
        unit: 'px'
    }
  };

  currentOptions = {};

  masonrySetMinWidth = function(obj, width, unit){
    var old_width = obj.style.minWidth;
    if (parseInt(old_width) < parseInt(width)){
      obj.style.minWidth = width + unit;
    }
  }
  masonrySetMinHeight = function(obj, height){
    // console.log("h="+height);
    var old_height = parseInt(obj.style.minHeight);
    if (isNaN(old_height)) old_height = 0;
    // console.log(obj.style);
    // console.log("parent height="+parseInt(old_height));
    if (parseInt(old_height) < parseInt(height)){
      obj.style.minHeight = height + 'px';
    }
  }

  masonryGetCurrentOptions = function(){
    for (var key in this.masonryOptions){
      var el = this.masonryOptions[key];
      if (el.minWidth < window.innerWidth){
        this.currentOptions = el;
      }else{
        break;
      }
    }
  }

  masonryInit = function(masonryParent){
    var children = masonryParent.children;
    if (children.length > 0){
      this.masonryGetCurrentOptions();
      masonryParent.style.minHeight = '0px';
      var cols_offset = [],
      index = 0,
      i = 0;
      while (i < children.length){
        index = i;
        var el = children[i];
        // console.log('============');
        // console.log(children);
        // console.log(this.currentOptions);
        if (typeof el == 'undefined') continue;
        // console.log(index);
        // console.log(cols_offset);
        if (index < this.currentOptions.colsCount){
          el.style.width = this.currentOptions.colsWidth + this.currentOptions.unit;
          el.style.top = 'unset';
          el.style.left = index * (this.currentOptions.colsWidth + this.currentOptions.gapsWidth) + this.currentOptions.unit;
          // console.log(el);
          cols_offset[index] = el.offsetHeight;
          this.masonrySetMinWidth(masonryParent, (index + 1) * this.currentOptions.colsWidth + index * this.currentOptions.gapsWidth, this.currentOptions.unit);
          this.masonrySetMinHeight(masonryParent, cols_offset[index]);
        }else{
          // console.log(cols_offset);
          var min = Math.min(...cols_offset);
          // console.log('min='+min);
          index = cols_offset.indexOf(min);
          el.style.width = this.currentOptions.colsWidth + this.currentOptions.unit;
          el.style.top = cols_offset[index] + 'px';
          el.style.left = index * (this.currentOptions.colsWidth + this.currentOptions.gapsWidth) + this.currentOptions.unit;
          cols_offset[index] = cols_offset[index] + el.offsetHeight;
          this.masonrySetMinWidth(masonryParent, index * this.currentOptions.colsWidth + (index - 1) * this.currentOptions.gapsWidth, this.currentOptions.unit);
          this.masonrySetMinHeight(masonryParent, cols_offset[index]);
        }
        i++;
      };
    }
  }

  componentDidMount() {
    // this.masonryInit(document.getElementById("masonry"));
    setTimeout(function(voices){
      voices.masonryInit(document.getElementById("masonry"));
    }, 1000, this);
    window.addEventListener('resize', (e) => ((voices) => {
      voices.masonryInit(document.getElementById("masonry"));
    })(this)); // pass "this" as "navbar" parameter inside the function
  }

  getRefsFromChild(childRefs) {
    // you can get your requested value here, you can either use state/props/ or whatever you like based on your need case by case
    this.setState((state) => {
      var voices = state.voices;
      voices[childRefs.voice.attributes.i.value] = childRefs.voice;
      return {voices: voices};
    });
    
  }    

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allWordpressWpVoices(sort: {fields: acf___date, order: DESC}) {
              nodes {
                title
                id
                acf {
                  author
                  date
                  intro
                  link
                  image {
                    localFile {
                      url
                    }
                  }
                  voice_category {
                    name
                  }
                }
              }
            }
          }
        `}
        render={data => {
            var voices = data.allWordpressWpVoices.nodes;
            return (
            <div className="voices">
              <div className="header">Voices and ideas of<br />the decentralised web</div>
              <div className="header-notice voices__notice">If there is an article or video you believe we should mention here,<br />don’t wait - <a href="#">submit a story</a>.</div>
              <div className="masonry" id="masonry" style={{minHeight: 0}}>
                {Object.entries(voices).map(([key, voice]) => {
                  // console.log(key);
                  return (
                    <Voice 
                      voice={voice} 
                      key={voice.id}
                      i={key}
                      passRefUpward={this.getRefsFromChild}
                      />
                  )}
                )}
              </div>
            </div>
            )
          }
        }
      />
    );
  }
}

export default Voices;