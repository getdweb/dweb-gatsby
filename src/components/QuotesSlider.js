import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export default function QuotesSlider() {

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressAcfOptions {
          nodes {
            options {
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

  const {hero_quotes} = data.allWordpressAcfOptions.nodes[0].options;

  return (
    <div className="quotes-slider-parent">
      <div className="quotes-slider">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={false}
            onSwiper={(swiper)=>{
              const quotesRandNumber = Math.floor(Math.random() * Math.floor(hero_quotes.length));
              swiper.slideTo(quotesRandNumber, 0, false);
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {
              hero_quotes.map((quote) => {
                return (
                  <SwiperSlide key={quote.image.id}>
                    <img src={quote.image.localFile.url} />
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
      </div>
    </div>
  )
}