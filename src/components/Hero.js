import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroAnimation from '../components/HeroAnimation';

export default function Hero() {
  const [previewDisplay, setPreviewDisplay] = useState("d-block");
  const [playDisplay, setPlayDisplay] = useState("d-flex");
  const [pauseDisplay, setPauseDisplay] = useState("d-none");

  const videoEmbed = useRef(null);
  const marqueeEl = useRef(null);

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
                localFile {
                  url
                }
              }
              hero_video_url
              hero_video_caption
              hero_video_caption_length
              hero_quotes {
                image {
                  id
                  wordpress_id
                  localFile {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const options = data.allWordpressAcfOptions.nodes[0].options;

  const videoPlayBtnClick = function(){
    setPreviewDisplay("d-none");
    setPlayDisplay("d-none");
    setPauseDisplay("d-flex");
    videoEmbed.current.play();
    marqueeEl.current.style.animationPlayState = 'paused';
  }

  const videoPauseBtnClick = function(){
    setPlayDisplay("d-flex");
    setPauseDisplay("d-none");
    videoEmbed.current.pause();
    marqueeEl.current.style.animationPlayState = 'running';
  }

  const quoteClick = (e) => {
    const wordpressId = e.target.getAttribute('data-wordpress-id');
    let quotesVisibilityTemp = [];
    let activeQuote;
    // First quote is active by default:
    let next_quote_active = true;
    quotes.map((quote) => {
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

  let quotes = options.hero_quotes;
  const [quotesVisibility, setQuotesVisibility] = useState([]);
  
  useEffect(() => {
    let quotesVisibilityTemp = [];
    let first_quote = true;
    const quotesRandNumber = Math.floor(Math.random() * Math.floor(options.hero_quotes.length));
    const quotesPart1 = options.hero_quotes.slice(0, quotesRandNumber);
    const quotesPart2 = options.hero_quotes.slice(quotesRandNumber);
    quotes = quotesPart2.concat(quotesPart1);
    quotes.map((quote) => {
      quotesVisibilityTemp[quote.image.wordpress_id] = first_quote ? "" : "d-none";
      first_quote = false;
    });
    setQuotesVisibility(quotesVisibilityTemp);
  }, []);

  useEffect(() => {
    setTimeout(()=>{
      if (marqueeEl.current !== null){
        const captionLength = +marqueeEl.current.offsetWidth;
        const period = (captionLength/80);
        marqueeEl.current.style.textShadow = `${captionLength}px 0 currentColor, calc(${captionLength}px * 2) 0 currentColor`;
        marqueeEl.current.style.animationDuration = `${period}s`;
      }
    }, 1000);
  });

  return (
    <div className="hero">
      <div className="hero__left">
        <HeroAnimation />
        <div className="hero__header" dangerouslySetInnerHTML={{__html: options.hero_tagline}}></div>
      </div>
      <div className="hero__right">
        <a className="hero__announcement" target="_blank" href={options.hero_announcement_link} dangerouslySetInnerHTML={{__html: options.hero_announcement_caption}}></a>
        <div className="hero__video">
          <div className="hero__video-frame">
            <video controls className="hero__video-embed" ref={videoEmbed} width="419" height="235">
              <source src={options.hero_video_url} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className={"hero__video-preview " + previewDisplay} style={{backgroundImage: `url(${options.hero_video_preview.localFile.url})`}}></div>
          </div>
          <a className={"hero__video-button hero__video-play " + playDisplay} onClick={videoPlayBtnClick}></a>
          <a className={"hero__video-button hero__video-pause " + pauseDisplay} onClick={videoPauseBtnClick}></a>
          <div className="hero__video-caption marquee">
            <span ref={marqueeEl}>{options.hero_video_caption}</span>
          </div>
        </div>
        <div className="hero__quotes">
          {
            quotes.map((quote) => {
            return (
              <a className={"hero__quote " + quotesVisibility[quote.image.wordpress_id]} data-wordpress-id={quote.image.wordpress_id} key={quote.image.id} style={{backgroundImage: `url(${quote.image.localFile.url})`}} onClick={((e) => quoteClick(e, data))}></a>
            );
            })}
        </div>
      </div>
    </div>
  )
}