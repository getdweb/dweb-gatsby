import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function CalendarPage() {
  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <h1>Open Web Calendar with Proton</h1>
            <iframe
              id="open-web-calendar"
              style={{
                background:
                  "url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;",
                padding: 0,
              }}
              src="https://dweb.events/calendar.html?specification_url=https://gitlab.com/lightandluck/open-web-calendar/-/snippets/4827957/raw/main/dweb-calendar-spec.json"
              sandbox="allow-scripts allow-same-origin allow-popups allow-downloads"
              title="DWeb Events"
              height="791px"
              width="100%"
              frameBorder="1"
            />

            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />

            <h1>Embedded Google Calendar Example</h1>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=kevin.huu.nguyen%40gmail.com&amp;ctz=UTC"
              style={{ border: '0' }}
              width="100%"
              height="600"
              title="google-calendar"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default CalendarPage
