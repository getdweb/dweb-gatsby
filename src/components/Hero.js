import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroAnimation from './HeroAnimation'

export default function Hero() {
  const [previewDisplay, setPreviewDisplay] = useState('d-block')
  const [playDisplay, setPlayDisplay] = useState('d-flex')
  const [pauseDisplay, setPauseDisplay] = useState('d-none')

  const videoEmbed = useRef(null)
  const marqueeEl = useRef(null)

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
        allHeroVideoOptionsYaml {
          nodes {
            video_url
            preview_image_url
          }
        }
      }
    `
  )

  const videoPlayBtnClick = function () {
    setPreviewDisplay('d-none')
    setPlayDisplay('d-none')
    setPauseDisplay('d-flex')
    videoEmbed.current.play()
    marqueeEl.current.style.animationPlayState = 'paused'
  }

  const videoPauseBtnClick = function () {
    setPlayDisplay('d-flex')
    setPauseDisplay('d-none')
    videoEmbed.current.pause()
    marqueeEl.current.style.animationPlayState = 'running'
  }

  const quoteClick = (e) => {
    const wordpressId = e.target.getAttribute('data-wordpress-id')
    const quotesVisibilityTemp = []
    let activeQuote
    // First quote is active by default:
    let next_quote_active = true
    quotes.map((quote) => {
      // Is this quote is active?
      if (next_quote_active) {
        activeQuote = quote.wordpress_id
        next_quote_active = false
      }
      // Set "d-none" class for all quotes by default:
      quotesVisibilityTemp[quote.wordpress_id] = 'd-none'
      // Set next quote to be active:
      if (wordpressId == quote.wordpress_id) {
        next_quote_active = true
      }
    })
    // Set active quote:
    quotesVisibilityTemp[activeQuote] = ''
    setQuotesVisibility(quotesVisibilityTemp)
  }

  let quotes = data.allHeroQuotesYaml.nodes
  const [quotesVisibility, setQuotesVisibility] = useState([])

  useEffect(() => {
    const quotesVisibilityTemp = []
    let first_quote = true
    const quotesRandNumber = Math.floor(
      Math.random() * Math.floor(data.allHeroQuotesYaml.nodes.length)
    )
    const quotesPart1 = data.allHeroQuotesYaml.nodes.slice(0, quotesRandNumber)
    const quotesPart2 = data.allHeroQuotesYaml.nodes.slice(quotesRandNumber)
    quotes = quotesPart2.concat(quotesPart1)
    quotes.map((quote) => {
      quotesVisibilityTemp[quote.wordpress_id] = first_quote ? '' : 'd-none'
      first_quote = false
    })
    setQuotesVisibility(quotesVisibilityTemp)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (marqueeEl.current !== null) {
        const captionLength = +marqueeEl.current.offsetWidth
        const period = captionLength / 80
        marqueeEl.current.style.textShadow = `${captionLength}px 0 currentColor, calc(${captionLength}px * 2) 0 currentColor`
        marqueeEl.current.style.animationDuration = `${period}s`
      }
    }, 1000)
  })

  return (
    <div className="hero">
      <div className="hero__left">
        <HeroAnimation />
        <div
          className="hero__header"
          dangerouslySetInnerHTML={{
            __html:
              'Connecting people,<br>projects and protocols to build a decentralized web',
          }}
        />
      </div>
      <div className="hero__right">
        <a
          className="hero__announcement"
          target="_blank"
          href="https://blog.archive.org/2024/11/12/we-want-to-decentralize-the-dweb-movement/"
          dangerouslySetInnerHTML={{
            __html:
              'DWeb Camp will return in 2026! Find here what we have planned for 2025',
          }}
          rel="noreferrer"
        />
        <div className="hero__video">
          <div className="hero__video-frame">
            <video
              controls
              className="hero__video-embed"
              ref={videoEmbed}
              width="419"
              height="235"
            >
              <source
                src={data.allHeroVideoOptionsYaml.nodes[0].video_url}
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
            <div
              className={`hero__video-preview ${previewDisplay}`}
              style={{
                backgroundImage: `url(${data.allHeroVideoOptionsYaml.nodes[0].preview_image_url})`,
              }}
            />
          </div>
          <a
            className={`hero__video-button hero__video-play ${playDisplay}`}
            onClick={videoPlayBtnClick}
          />
          <a
            className={`hero__video-button hero__video-pause ${pauseDisplay}`}
            onClick={videoPauseBtnClick}
          />
          <div className="hero__video-caption marquee">
            <span ref={marqueeEl}>DWeb Virtual Meetup: Bluesky and Beyond</span>
          </div>
        </div>
        <div className="hero__quotes">
          {quotes.map((quote) => {
            const quoteImageUrl = quote.url !== null ? quote.url : ''
            return (
              <a
                className={`hero__quote ${
                  quotesVisibility[quote.wordpress_id]
                }`}
                data-wordpress-id={quote.wordpress_id}
                key={quote.id}
                style={{ backgroundImage: `url(${quoteImageUrl})` }}
                onClick={(e) => quoteClick(e, data)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
