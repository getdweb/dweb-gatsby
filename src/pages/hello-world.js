import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function SocialMediaCommsJobDescriptionPage() {
  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="job-description">
              <h1 style={{ fontSize: '46px' }}>
                Hello World!
                <h2 className="highlight">Links to welcome you to the DWeb</h2>
              </h1>
              <hr />
              <div className="building-block__text">
                <ul>
                  <li>
                    <a href="/principles" target="blank">
                      DWeb Principles
                    </a>
                  </li>
                  <li>
                    <a href="/dweb-webinar-series" target="blank">
                      What is the DWeb? - DWeb webinar series
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hypha.coop/dripline/debate-over-dweb-vs-web3/"
                      target="blank"
                    >
                      The Debate Over DWeb vs. Web3 & The Decentralized Elephant
                      in the Room
                    </a>
                  </li>

                  <li>
                    <a href="//dweb.events" target="blank">
                      DWeb Events - Calendar of events from around the world
                    </a>
                    <ul>
                      <li>
                        <a
                          href="https://airtable.com/appTI5ffWtVBghxjJ/pagtSqKejqCT4bI2T/form"
                          target="blank"
                        >
                          Propose an event
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://mailchi.mp/archive/dweb-updates"
                      target="blank"
                    >
                      Subscribe to our newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://opencollective.com/dweb-network"
                      target="blank"
                    >
                      Support us on OpenCollective
                    </a>
                  </li>
                </ul>
                {/* End content div */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default SocialMediaCommsJobDescriptionPage
