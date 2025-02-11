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
              }}
              src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?specification_url=https://gist.githubusercontent.com/lightandluck/59e9495f66c45dcdf3852b5925d03645/raw/64ea8f0f0325d36a8784891fc7a6535c47cba361/specs.json"
              sandbox="allow-scripts allow-same-origin allow-popups"
              height="600px"
              width="100%"
              title="open-web-calendar"
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
