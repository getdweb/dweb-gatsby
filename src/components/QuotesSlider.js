import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'

export default function QuotesSlider() {
  const data = useStaticQuery(
    graphql`
      query {
        allHeroQuotesYaml {
          nodes {
            id
            url
          }
        }
      }
    `
  )

  const hero_quotes = data.allHeroQuotesYaml.nodes

  return (
    <div className="quotes-slider-parent">
      <div className="quotes-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank={false}
          onSwiper={(swiper) => {
            const quotesRandNumber = Math.floor(
              Math.random() * Math.floor(hero_quotes.length)
            )
            swiper.slideTo(quotesRandNumber, 0, false)
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {hero_quotes.map((quote) => (
              <SwiperSlide key={quote.id}>
                <img src={quote.url} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
