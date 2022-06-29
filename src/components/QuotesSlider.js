import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import 'swiper/scss'
// import 'swiper/swiper.scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';


export default function QuotesSlider() {

  const data = JSON.parse(`{
  "data": {
    "allWordpressAcfOptions": {
      "nodes": [
        {
          "options": {
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
}`)

  const {hero_quotes} = data.data.allWordpressAcfOptions.nodes[0].options;

  return (
    <div className="quotes-slider-parent">
      <div className="quotes-slider">
          <Swiper
            spaceBetween={0}
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
                spaceBetween: 0,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 0,
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
