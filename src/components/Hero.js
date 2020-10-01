import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';

export default function Network() {

  const [previewDisplay, setPreviewDisplay] = useState("d-block");
  const [playDisplay, setPlayDisplay] = useState("d-flex");
  const [pauseDisplay, setPauseDisplay] = useState("d-none");
  

  const videoEmbed = useRef(null);

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
              hero_announcement_link
              hero_announcement_caption
              hero_tagline
              hero_video_preview {
                link
              }
              hero_video_url
              hero_video_caption
              hero_video_caption_length
              hero_quotes {
                image {
                  id
                  link
                  wordpress_id
                }
              }
            }
          }
        }
      }
    `
  )

  const options = data.allWordpressAcfOptions.nodes[0].options;
  // console.log(options);

  const videoPlayBtnClick = function(){
    setPreviewDisplay("d-none");
    setPlayDisplay("d-none");
    setPauseDisplay("d-flex");
    videoEmbed.current.play();
  }

  const videoPauseBtnClick = function(){
    setPlayDisplay("d-flex");
    setPauseDisplay("d-none");
    videoEmbed.current.pause();
  }

  const quoteClick = (e) => {
    const wordpressId = e.target.getAttribute('data-wordpress-id');
    let quotesVisibilityTemp = [];
    let activeQuote;
    // First quote is active by default:
    let next_quote_active = true;
    options.hero_quotes.map((quote) => {
      // Is this quote is active?
      if (next_quote_active){
        activeQuote = quote.image.wordpress_id;
        next_quote_active = false;
      }
      // Set "d-none" class for all quotes by default:
      quotesVisibilityTemp[quote.image.wordpress_id] = "d-none";
      // Set next quote to be active:
      if (wordpressId == quote.image.wordpress_id){
        next_quote_active = true;
      }
    });
    // Set active quote:
    quotesVisibilityTemp[activeQuote] = "";
    setQuotesVisibility(quotesVisibilityTemp);
  }

  let quotesVisibilityTemp = [];
  let first_quote = true;
  options.hero_quotes.map((quote) => {
    quotesVisibilityTemp[quote.image.wordpress_id] = first_quote ? "" : "d-none";
    first_quote = false;
  });
  const [quotesVisibility, setQuotesVisibility] = useState(quotesVisibilityTemp);

  return (
    <div className="hero">
      <div className="hero__left">
        <Particles params={{
            "particles": {
              "color": {
                "value": "random",
                "animation": {
                  "enable": false,
                  "speed": 1,
                  "sync": false
                }
              },
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 10,
                  "random": true
              },
              "opacity": {
                  "value": 1
              },
              "move": {
                  "direction": "none",
                  "out_mode": "out"
              },
              "line_linked": {
                  "enable": false
              }
            },
            "interactivity": {
              "events": {
                  "onclick": {
                      "enable": false
                  }
              },
              "modes": {
                  "remove": {
                      "particles_nb": 10
                  }
              }
            }
          }} />
        <div className="hero__header">
          {options.hero_tagline}
        </div>
      </div>
      <div className="hero__right">
        <a className="hero__announcement" target="_blank" href={options.hero_announcement_link}>
          {options.hero_announcement_caption}
        </a>
        <div className="hero__video">
          <div className="hero__video-frame">
            <video className="hero__video-embed" ref={videoEmbed} width="419" height="235">
              <source src={options.hero_video_url} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className={"hero__video-preview " + previewDisplay} style={{backgroundImage: `url(${options.hero_video_preview.link})`}}></div>
          </div>
          <a className={"hero__video-button hero__video-play " + playDisplay} onClick={videoPlayBtnClick}></a>
          <a className={"hero__video-button hero__video-pause " + pauseDisplay} onClick={videoPauseBtnClick}></a>
          <div className="hero__video-caption marquee">
            <span style={{textShadow: `${options.hero_video_caption_length}px 0 currentColor, calc(${options.hero_video_caption_length}px * 2) 0 currentColor`}}>{options.hero_video_caption}</span>
            {/* <span style={{textShadow: `484px 0 currentColor, calc(484px * 2) 0 currentColor`}}>{options.hero_video_caption}</span> */}
          </div>
        </div>
        <div className="hero__quotes">
          {
            options.hero_quotes.map((quote) => {
              // console.log(quote);
            return (
              <a className={"hero__quote " + quotesVisibility[quote.image.wordpress_id]} data-wordpress-id={quote.image.wordpress_id} key={quote.image.id} style={{backgroundImage: `url(${quote.image.link})`}} onClick={((e) => quoteClick(e, data))}></a>
            );
            })}
        </div>
      </div>
    </div>
  )
}