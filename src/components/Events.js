import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Event from './Event'

export default function Events() {

  const [period, setPeriod] = useState("upcoming");

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpEvent(sort: {fields: acf___started_at, order: DESC}) {
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
            events_show_more_url
          }
        }
      }
    `
  )

  let events = data.allWordpressWpEvent.nodes;

  const options = data.wordpressAcfOptions.options;
  
  const citiesTemp = data.allWordpressAcfCity.nodes;
  const cities = [];
  
  citiesTemp.map(city => {
    cities[city.wordpress_id] = city.acf.color;
  });
  
  events = events
    .filter((event, key) => {
      const milliseconds = Date.now() - Date.parse(event.acf.ended_at);
      const eventPeriod = milliseconds > 0 ? "past" : "upcoming";
      events[key].period = eventPeriod;
      return eventPeriod === period;
    });

  const events_top_button_link = 
    options.events_top_button_link.substr(0,1) == "/"
    ? <Link to={options.events_top_button_link} className="btn building-block__btn">{options.events_top_button_caption}</Link>
    : <a href={options.events_top_button_link} className="btn building-block__btn" target="_blank">{options.events_top_button_caption}</a>

  let pastEventsLength = 0;
  
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
                {events_top_button_link}
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
                  recent
                </a>
            </div>
            <div className="header-notice events__notice" dangerouslySetInnerHTML={{__html: options.events_list_text}}></div>
              {events.slice(0).reverse().map(event => {
                if (event.period === 'upcoming'){
                  return <Event event={event} cities={cities} key={`event_${event.id}`} />
                }
              })}
              {events.map(event => {
                pastEventsLength++;
                if (pastEventsLength <= 7 && event.period === 'past'){
                  return <Event event={event} cities={cities} key={`event_${event.id}`} />
                }
              })}
              <div className="events__show_more">
                <Link 
                  className={"show-more " + (period=='upcoming' && "d-none")}
                  to={options.events_show_more_url}
                  >
                  Browse all past events
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}