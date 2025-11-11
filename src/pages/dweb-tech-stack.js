import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function JustusInterviewPage() {
  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="custom-content">
              <h1>Behind the Scenes of DWeb’s Decentralized Tech Stack</h1>
              <img
                src="/images/globe-graphic.jpg"
                alt="Globe graphic"
                style={{
                  float: 'right',
                  maxWidth: '340px',
                }}
              />

              <div className="building-block__text">
                <p>
                  The DWeb crowd is made up of people who are excited to build
                  and try out alternative and cutting edge technologies that
                  align with our values. In order to welcome everyone in our
                  community, we prioritize stability, reliability, and ease of
                  use for all our public-facing tech infrastructure. So while
                  balancing our needs and desires, in some cases we’re forced to
                  rely on mainstream tools and sacrifice the use of free, open
                  and decentralized technologies.
                </p>
                <p>
                  Nevertheless, we’re determined to walk our talk. We’re slowly
                  but surely decentralizing our tech stack, migrating towards
                  decentralized and free software solutions as they become more
                  stable and simpler to adopt.
                </p>
                <p>
                  Still, the DWeb vision embodies values that go well beyond
                  merely technical solutions, no matter how cool or
                  revolutionary those tools can be. The principles that guide us
                  are above all about the people behind and in front of every
                  screen.
                </p>
                <p>
                  Therefore, today’s special issue does not focus solely on
                  announcing some long-awaited tech changes, but it’s a
                  behind-the-scenes look at the people and the collectives
                  (cooperatives, not by chance) that develop, maintain, and
                  power our decentralized tech stack.
                </p>
                <hr />
                <h2>Justus Perlwitz and the new DWebcamp.org</h2>
                <img
                  src="/images/justus-avatar-white.png"
                  alt="Portrait of Justus Perlwitz"
                  style={{
                    float: 'left',
                    maxWidth: '240px',
                    margin: '20px 0',
                  }}
                />
                <p>
                  Earlier this year, we were looking for a volunteer who could
                  update the software behind{' '}
                  <a
                    href="https://dwebcamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dwebcamp.org
                  </a>
                  . And that’s how we found{' '}
                  <a
                    href="https://www.justus.pw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Justus
                  </a>
                  , an enthusiastic, skilled, and dedicated developer who,
                  coincidentally, is working to start a DWeb Node in Tokyo.
                </p>
                <p>
                  Thanks to Justus’ contribution, we were not only able to get
                  everything up to date, but also make and pursue long-term
                  plans for our website infrastructure.
                </p>
                <p>
                  Tommi Marmo, our Community Engagement Lead, interviewed him
                  and they discussed the value of open technologies, Tokyo
                  hacker culture, the DWeb Camp experience, the Django work done
                  for dwebcamp.org, and many other topics. Read the full
                  interview{' '}
                  <a
                    href="https://getdweb.net/justus-interview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  !
                </p>
                <hr />
                <h2>
                  Hosting our websites on the decentralized Web, thanks to
                  Distributed Press
                </h2>
                <img
                  alt="Distributed Press"
                  src="/images/logo-distributedpress-grey.svg"
                  style={{
                    backgroundColor: '#ffffff',
                    margin: '20px 0 10px',
                  }}
                />
                <p>
                  <a
                    href="https://distributed.press/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Distributed Press
                  </a>{' '}
                  is a publishing tool for the distributed web.
                </p>
                <p>
                  It empowers publishing organizations and authors by adding the
                  ability to utilize peer-to-peer (p2p) and decentralized
                  protocols to any content management system (CMS), both for
                  content distribution and archiving purposes.
                </p>
                <p>
                  Furthermore, Distributed Press extends content reach by
                  publishing and hosting content on multiple distributed
                  networks and p2p protocols, like IPFS and Hypercore.
                </p>
                <p>
                  We are thrilled to announce that both{' '}
                  <a
                    href="http://getdweb.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    getdweb.net
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://dwebcamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dwebcamp.org
                  </a>{' '}
                  are now accessible through the decentralized web, thanks to
                  Distributed Press! Check it yourselves: visit{' '}
                  <a
                    href="ipns://getdweb.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ipns://getdweb.net
                  </a>{' '}
                  from your favourite decentralized browser like{' '}
                  <a
                    href="https://github.com/p2plabsxyz/peersky-browser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Peersky
                  </a>
                  , or just by installing the{' '}
                  <a
                    href="https://docs.ipfs.tech/install/ipfs-companion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IPFS extension
                  </a>{' '}
                  on a regular browser.
                </p>
                <p>
                  You can even use it Distributed Press yourself, for free!
                  Thanks to the endeavours of our friends at{' '}
                  <a
                    href="https://hypha.coop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hypha Co-op
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://sutty.nl/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sutty
                  </a>
                  , this software is{' '}
                  <a
                    href="https://docs.distributed.press/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open and available for everyone
                  </a>{' '}
                  to use.
                </p>
                <hr />
                <h2>The Discord ⟷ Matrix bridge is here</h2>
                <img
                  src="/images/matrix-graphic.png"
                  alt="Matrix graphic"
                  style={{
                    float: 'right',
                    maxWidth: '240px',
                    margin: '20px',
                  }}
                />
                <p>
                  We now have a federated Matrix server! The first thing we did
                  was configure and enable a bridge with our Discord community,
                  as strongly requested by many of you. Matrix is an open
                  federated network for secure, decentralized communication.
                </p>{' '}
                <p>
                  This was made possible by the generous support of{' '}
                  <a
                    href="https://hypha.coop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hypha Co-op
                  </a>
                  , who’s hosting our DWeb Matrix server and{' '}
                  <a
                    href="https://gitdab.com/cadence/out-of-your-element"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bridging service
                  </a>
                  .
                </p>{' '}
                <p>
                  Not only are all the Discord channels bridged with Matrix, and
                  vice-versa, but we already have an almost 1:1 feature parity
                  between the platforms. You shouldn’t notice any difference,
                  regardless of where you’re connecting from.
                </p>{' '}
                <p>
                  Note that as we are still testing the specifics and particular
                  edge cases, this bridge has to be considered experimental, so{' '}
                  <a
                    href="mailto:dweb@archive.org?subject=Matrix bridge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    please reach out
                  </a>{' '}
                  if you have anything to report or to suggest.
                </p>{' '}
                <p>
                  To join our Matrix space, from which you can join any of its
                  channels, just{' '}
                  <a
                    href="https://matrix.to/#/!KfSkhKqPiXJIpjaRgY:getdweb.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    follow this link
                  </a>
                  .
                </p>
                <hr />
                <h2>
                  Our ability to decentralize the DWeb network itself reflects
                  the care and generosity of our community. Thank you Justus,
                  sutty, and Hypha Co-op!{' '}
                </h2>
                <br />
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

export default JustusInterviewPage
