import React from 'react'
import { Link } from 'gatsby'

export default function AboutUs() {
  return (
    <div className="about-us" id="mission">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-10 col-lg-8">
            <div className="about-us__text">
              <p>
                DWeb connects the people, projects and protocols essential to
                building a decentralized web. A web that is more private,
                reliable, secure and open. A web with many winners{'\u2014'}
                returning to the original vision of the World Wide Web and
                internet.
              </p>
              <p>
                <a href="../origin-story">Since 2016</a> we have been a bridge
                enabling diverse communities to freely exchange ideas about the
                technologies, values, markets and agreements we need to move
                forward.
              </p>
            </div>
            <Link to="/principles" className="btn about-us__btn">
              Read DWeb Principles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
