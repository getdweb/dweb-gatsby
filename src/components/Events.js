import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Event from './Event'

export default function Events() {

  const [period, setPeriod] = useState("upcoming");

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpEvent {
          nodes {
            title
            id
            acf {
              ended_at
              started_at
              city {
                post_title
                wordpress_id
              }
              event_type {
                name
              }
              event_image {
                localFile {
                  url
                }
              }
              hover_color
              registration_link
            }
          }
        }
        allWordpressAcfCity {
          nodes {
            acf {
              color
            }
            wordpress_id
          }
        }
        wordpressAcfOptions {
          options{
            events_top_header
            events_top_intro
            events_top_button_caption
            events_top_button_link
            events_top_image {
              localFile {
                url
              }
            }
            events_list_header
            events_list_text
          }
        }
      }
    `
  )

  let events = data.allWordpressWpEvent.nodes;

  // const options = data.allWordpressAcfOptions.nodes[0].options;
  const options = data.wordpressAcfOptions.options;
  
  const citiesTemp = data.allWordpressAcfCity.nodes;
  const cities = [];
  
  citiesTemp.map(city => {
    cities[city.wordpress_id] = city.acf.color;
  });
  events = events
    .filter(event => {
      const milliseconds = Date.now() - Date.parse(event.acf.ended_at);
      const eventPeriod = milliseconds > 0 ? "past" : "upcoming";
      // console.log(event_period);
      return eventPeriod === period;
    });

  return (
    <div className="events" id="events">
      <div className="building-block">
        <div className="building-block__right" style={{backgroundImage: 'url(' + options.events_top_image.localFile.url + ')'}}>
        </div>
        <div className="building-block__left">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header building-block__header">{options.events_top_header}</div>
                <div className="building-block__text" dangerouslySetInnerHTML={{__html: options.events_top_intro}}></div>
                <Link to={options.events_top_button_link} className="btn building-block__btn">{options.events_top_button_caption}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header events__header">{options.events_list_header}</div>
            <div className="events__headerlinks">
              <a 
                className={"events__headerlink " + (period == "upcoming" ? "events__headerlink_active " : "")}
                onClick={ () => setPeriod("upcoming")}
                >
                  upcoming
                </a>
              &emsp;
              <a 
                className={"events__headerlink " + (period == "past" ? "events__headerlink_active " : "")} 
                onClick={ () => setPeriod("past")}
                >
                  past
                </a>
            </div>
            <div className="header-notice events__notice" dangerouslySetInnerHTML={{__html: options.events_list_text}}></div>
            {events.map(event => (
              <Event event={event} cities={cities} key={event.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}