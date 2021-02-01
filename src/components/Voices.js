import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Voice from './Voice'
import ScrollService from '../services/scroll-service';

export default function Voices() {

  const VOICES_PER_PAGE = 9;
  const RENDER_TIMEOUT = 200;

  let timeouts = [];

  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [page, setPage] = useState(1);
  const [voices, setVoices] = useState([]);

  const scrollService = new ScrollService();

  let voicesLoadedEvent;
  if (typeof window !== `undefined`) 
    voicesLoadedEvent = new Event('voicesLoaded'); // This event is used in ./templates/index.js

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpVoices {
          nodes {
            acf {
              author
              date
              intro
              link
              voice_category {
                term_id
                name
              }
              thumbnail_type
              image_url
              image {
                localFile {
                  url
                }
              }
            }
            title
            wordpress_id
          }
        }
        allWordpressWpVoiceCategories {
          nodes {
            acf {
              color
            }
            wordpress_id
          }
        }
        wordpressAcfOptions {
          options {
            voices_header
            voices_intro
          }
        }
      }
    `
  )

  const voicesAll = data.allWordpressWpVoices.nodes;
  const voiceCategories = data.allWordpressWpVoiceCategories.nodes;
  const options = data.wordpressAcfOptions.options;

  const loadVoices = function() {
    scrollService.saveScroll(); // Save scroll position
    let newVoices = voicesAll.slice(0, VOICES_PER_PAGE * page);
    setVoices(newVoices);
    if (VOICES_PER_PAGE * page > voicesAll.length) setFinished(true);
    setPage(page + 1);
    masonryRestart();
  }

  const onVoicesDisplayed = () => {
    if (typeof window === `undefined`) return;
    scrollService.restoreY();
    setLoading(false);
    window.dispatchEvent(voicesLoadedEvent);
  }

  useEffect(() => {
    loadVoices();
  }, []);

  const masonryOptions = {
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

  let currentOptions = {};

  const masonrySetMinWidth = (obj, width, unit) => {
    var old_width = obj.style.minWidth;
    if (parseInt(old_width) < parseInt(width)) {
      obj.style.minWidth = width + unit;
    }
  }

  const masonrySetMinHeight = (obj, height) => {
    var old_height = parseInt(obj.style.minHeight);
    if (isNaN(old_height)) old_height = 0;
    if (parseInt(old_height) < parseInt(height)) {
      obj.style.minHeight = height + 'px';
    }
  }

  const masonryGetCurrentOptions = () => {
    if (typeof window === `undefined`) return;
    for (var key in masonryOptions) {
      var el = masonryOptions[key];
      if (el.minWidth < window.innerWidth) {
        currentOptions = el;
      } else {
        break;
      }
    }
  }

  const masonryInit = (masonryParent) => {
    if (masonryParent == null) return;
    var children = masonryParent.children;
    if (children.length > 0) {
      masonryGetCurrentOptions();
      masonryParent.style.minHeight = '0px';
      var cols_offset = [],
        index = 0,
        i = 0;
      while (i < children.length) {
        index = i;
        var el = children[i];
        if (typeof el == 'undefined') continue;
        if (index < currentOptions.colsCount) {
          el.style.width = currentOptions.colsWidth + currentOptions.unit;
          el.style.top = 'unset';
          el.style.left = index * (currentOptions.colsWidth + currentOptions.gapsWidth) + currentOptions.unit;
          cols_offset[index] = el.offsetHeight;
          masonrySetMinWidth(masonryParent, (index + 1) * currentOptions.colsWidth + index * currentOptions.gapsWidth, currentOptions.unit);
          masonrySetMinHeight(masonryParent, cols_offset[index]);
        } else {
          var min = Math.min(...cols_offset);
          index = cols_offset.indexOf(min);
          el.style.width = currentOptions.colsWidth + currentOptions.unit;
          el.style.top = cols_offset[index] + 'px';
          el.style.left = index * (currentOptions.colsWidth + currentOptions.gapsWidth) + currentOptions.unit;
          cols_offset[index] = cols_offset[index] + el.offsetHeight;
          masonrySetMinWidth(masonryParent, index * currentOptions.colsWidth + (index - 1) * currentOptions.gapsWidth, currentOptions.unit);
          masonrySetMinHeight(masonryParent, cols_offset[index]);
        }
        i++;
      };
    }
    onVoicesDisplayed();
  }

  const masonryRestart = () => {
    if (typeof window === `undefined`) return;
    timeouts.forEach(timeout => clearTimeout(timeout));
    const firstTimeout = setTimeout(function () {
      masonryInit(document.getElementById("masonry"));
      window.addEventListener('resize', () => {
        scrollService.saveScroll(); // Save scroll position
        masonryInit(document.getElementById("masonry"));
      }); // pass "this" as "navbar" parameter inside the function
    }, RENDER_TIMEOUT);
    timeouts.push(firstTimeout);
  }

  return (
    <div className="voices" id="voices">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xl-8">
            <div className="header" dangerouslySetInnerHTML={{__html: options.voices_header}}></div>
            <div className="header-notice voices__notice" dangerouslySetInnerHTML={{__html: options.voices_intro}}></div>
          </div>
          <div className="col col-12">
            <div className="masonry" id="masonry" style={{ minHeight: 0 }}>
              {Object.entries(voices).map(([key, voice]) => {
                const filtered = voiceCategories.filter(cat => {
                  return cat.wordpress_id === voice.acf.voice_category.term_id;
                });
                return (
                  <Voice
                    voice={voice}
                    color = {filtered.length > 0 ? filtered[0].acf.color : "inherit"}
                    key={"voice_"+voice.wordpress_id}
                    i={key}
                  />
                )
              })}
            </div>
            <div className="voices__footer">
              <a 
                className={"show-more voices__show-more " + ((loading || finished) && "d-none")}
                onClick={loadVoices}
                >
                show more
              </a>
              <div className={"voices__loader " + ((!loading || finished) && "d-none")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
