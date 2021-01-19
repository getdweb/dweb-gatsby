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

  const options = data.allWordpressAcfOptions.nodes[0].options;

  const quotesRandNumber = Math.floor(Math.random() * Math.floor(options.hero_quotes.length));
  const quotesPart1 = options.hero_quotes.slice(0, quotesRandNumber);
  const quotesPart2 = options.hero_quotes.slice(quotesRandNumber);
  const quotes = quotesPart2.concat(quotesPart1);

  return (
    <div className="quotes-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
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
            quotes.map((quote) => {
              return (
                <SwiperSlide key={quote.image.id}>
                  <img src={quote.image.localFile.url} />
                </SwiperSlide>
              );
            })
          }
        </Swiper>
    </div>
  )
}