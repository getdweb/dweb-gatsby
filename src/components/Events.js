import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
              image {
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
      }
    `
  )

  var events = data.allWordpressWpEvent.nodes;
  
  var cities_temp = data.allWordpressAcfCity.nodes;
  var cities = [];
  
  cities_temp.map(city => {
    cities[city.wordpress_id] = city.acf.color;
  });
  events = events
    .filter(event => {
      var milliseconds = Date.now() - Date.parse(event.acf.ended_at);
      var event_period = milliseconds > 0 ? "past" : "upcoming";
      // console.log(event_period);
      return event_period == period;
    });
  // console.log(events);

  return (
    <div className="events">
      <div className="header events__header">Events around the world</div>
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
      <div className="header-notice events__notice">Know the event worth mentioning?<br /><a href="#">Submit it here</a></div>
      {events.map(event => (
        <Event event={event} cities={cities} key={event.id} />
      ))}
    </div>
  )
}