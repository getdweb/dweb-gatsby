import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroAnimation from '../components/HeroAnimation';

export default function Hero() {
  const [previewDisplay, setPreviewDisplay] = useState("d-block");
  const [playDisplay, setPlayDisplay] = useState("d-flex");
  const [pauseDisplay, setPauseDisplay] = useState("d-none");

  const videoEmbed = useRef(null);
  const marqueeEl = useRef(null);

  const data = JSON.parse(`{
    "data": {
      "allWordpressAcfOptions": {
        "nodes": [
          {
            "options": {
              "hero_announcement_link": "https://dwebcamp.org/",
              "hero_announcement_caption": "DWeb Camp is back in 2022!<br>\\r\\nAug. 24-28, Navarro, CA. Join us!",
              "hero_tagline": "Connecting people,<br>projects and protocols to build a decentralized web",
              "hero_video_preview": {
                "localFile": {
                  "url": "https://getdweb.net/wp-content/uploads/2022/06/METRO-DWeb-home-ditther.png"
                }
              },
              "hero_video_url": "https://archive.org/details/goodbye-facebook-hello-decentralized-social-media",
              "hero_video_caption": "Webinar recording: \\\"Goodbye Facebook. Hello Decentralized Social Media?\\\"",
              "hero_video_caption_length": "775",
              "hero_quotes": [
                {
                  "image": {
                    "id": "ffae89f6-ea4e-5b19-b330-4fe82f3134fb",
                    "wordpress_id": 437,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-Benedict-lau.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "caf339c4-6b18-5aea-9484-2462b1016324",
                    "wordpress_id": 435,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote_jennifer-granick.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "cf07271a-7000-51e0-b984-9537542e1c73",
                    "wordpress_id": 440,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-joachim-lohkamp.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "ac32df71-38c0-5956-8440-289caf5c04fe",
                    "wordpress_id": 436,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote_wendy-hanamura.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "ef32a020-670f-5621-abc5-9d4941c9eef8",
                    "wordpress_id": 441,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-mai-sutton.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "04537eff-986d-5de2-8533-6d2d571d2b51",
                    "wordpress_id": 442,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-Matt-zumwalt.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "2b5d67e6-45e2-5410-b153-242336317ea0",
                    "wordpress_id": 444,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-Redecentralize.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "9010d0fd-720e-5290-b5be-d80c47bd13c3",
                    "wordpress_id": 443,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-primavera-de-filippi.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "839860a7-5fae-5ba7-b8f4-1c1564c10294",
                    "wordpress_id": 433,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote_brandon-wallace.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "21821861-15ae-582a-9332-f4c255c97531",
                    "wordpress_id": 439,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2020/12/quote-jay-graber.png"
                    }
                  }
                },
                {
                  "image": {
                    "id": "b6b33425-d7b2-5392-a008-6c02e89e0198",
                    "wordpress_id": 824,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2021/03/DWeb-principle-01.jpg"
                    }
                  }
                },
                {
                  "image": {
                    "id": "421a04ea-29b5-5e3b-8078-3783af65f2de",
                    "wordpress_id": 825,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2021/03/DWeb-principle-02.jpg"
                    }
                  }
                },
                {
                  "image": {
                    "id": "2ae3dd33-3f54-5d1a-871c-85092aa64097",
                    "wordpress_id": 826,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2021/03/DWeb-principle-03.jpg"
                    }
                  }
                },
                {
                  "image": {
                    "id": "62ca7994-dd34-5fb9-a75d-dde77d63aae4",
                    "wordpress_id": 827,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2021/03/DWeb-principle-04.jpg"
                    }
                  }
                },
                {
                  "image": {
                    "id": "b378dc07-aed5-5ab7-a592-669f83ba18d8",
                    "wordpress_id": 828,
                    "localFile": {
                      "url": "https://getdweb.net/wp-content/uploads/2021/03/DWeb-principle-05.jpg"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
  `)

  const options = data.data.allWordpressAcfOptions.nodes[0].options;

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

  const heroVideoPreviewBgUrl = options.hero_video_preview.localFile !== null ? options.hero_video_preview.localFile.url : "";

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
            <div className={"hero__video-preview " + previewDisplay} style={{backgroundImage: `url(${heroVideoPreviewBgUrl})`}}></div>
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
              const quoteImageUrl = quote.image.localFile !== null ? quote.image.localFile.url : "";
              return (
                <a className={"hero__quote " + quotesVisibility[quote.image.wordpress_id]} data-wordpress-id={quote.image.wordpress_id} key={quote.image.id} style={{backgroundImage: `url(${quoteImageUrl})`}} onClick={((e) => quoteClick(e, data.data))}></a>
              );
            })}
        </div>
      </div>
    </div>
  )
}
