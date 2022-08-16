import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroAnimation from '../components/HeroAnimation';

export default function Hero() {
  const [previewDisplay, setPreviewDisplay] = useState("d-block");
  const [playDisplay, setPlayDisplay] = useState("d-flex");
  const [pauseDisplay, setPauseDisplay] = useState("d-none");

  const videoEmbed = useRef(null);
  const marqueeEl = useRef(null);

  // TODO: change wordpress_id to key_id
  // TODO: make video link, background image to YAML

  const data = useStaticQuery(
    graphql`
      query {
        allHeroQuotesYaml {
          nodes {
            id
            wordpress_id
            url
          }
        }
      }
    `
  )

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
        activeQuote = quote.wordpress_id;
        next_quote_active = false;
      }
      // Set "d-none" class for all quotes by default:
      quotesVisibilityTemp[quote.wordpress_id] = "d-none";
      // Set next quote to be active:
      if (wordpressId == quote.wordpress_id){
        next_quote_active = true;
      }
    });
    // Set active quote:
    quotesVisibilityTemp[activeQuote] = "";
    setQuotesVisibility(quotesVisibilityTemp);
  }

  let quotes = data.allHeroQuotesYaml.nodes;
  const [quotesVisibility, setQuotesVisibility] = useState([]);

  useEffect(() => {
    let quotesVisibilityTemp = [];
    let first_quote = true;
    const quotesRandNumber = Math.floor(Math.random() * Math.floor(data.allHeroQuotesYaml.nodes.length));
    const quotesPart1 = data.allHeroQuotesYaml.nodes.slice(0, quotesRandNumber);
    const quotesPart2 = data.allHeroQuotesYaml.nodes.slice(quotesRandNumber);
    quotes = quotesPart2.concat(quotesPart1);
    quotes.map((quote) => {
      quotesVisibilityTemp[quote.wordpress_id] = first_quote ? "" : "d-none";
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
        <div className="hero__header" dangerouslySetInnerHTML={{__html: "Connecting people,<br>projects and protocols to build a decentralized web"}}></div>
      </div>
      <div className="hero__right">
        <a className="hero__announcement" target="_blank" href="https://dwebcamp.org/" dangerouslySetInnerHTML={{__html: "DWeb Camp is back in 2022!<br>\r\nAug. 24-28, Navarro, CA. Join us!"}}></a>
        <div className="hero__video">
          <div className="hero__video-frame">
            <video controls className="hero__video-embed" ref={videoEmbed} width="419" height="235">
              <source src="https://archive.org/details/goodbye-facebook-hello-decentralized-social-media" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className={"hero__video-preview " + previewDisplay} style={{backgroundImage: `url(https://getdweb.net/wp-content/uploads/2022/06/METRO-DWeb-home-ditther.png)`}}></div>
          </div>
          <a className={"hero__video-button hero__video-play " + playDisplay} onClick={videoPlayBtnClick}></a>
          <a className={"hero__video-button hero__video-pause " + pauseDisplay} onClick={videoPauseBtnClick}></a>
          <div className="hero__video-caption marquee">
            <span ref={marqueeEl}>Webinar recording: "Goodbye Facebook. Hello Decentralized Social Media?"</span>
          </div>
        </div>
        <div className="hero__quotes">
          {
            quotes.map((quote) => {
              const quoteImageUrl = quote.url !== null ? quote.url : "";
              return (
                <a className={"hero__quote " + quotesVisibility[quote.wordpress_id]} data-wordpress-id={quote.wordpress_id} key={quote.id} style={{backgroundImage: `url(${quoteImageUrl})`}} onClick={((e) => quoteClick(e, data))}></a>
              );
            })}
        </div>
      </div>
    </div>
  )
}
