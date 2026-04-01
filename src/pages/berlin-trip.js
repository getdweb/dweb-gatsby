import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function BerlinTripPage() {
  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="custom-content">
              <h1>How DWeb Camp is Being Built in Berlin</h1>
              <p>
                At the legendary c-base, technologists, activists, and artists
                gathered to shape the next chapter of the decentralized web.
              </p>

              <p>By Wendy Hanamura</p>
              <figure>
                <img
                  src="/images/berlin-trip/4.png"
                  alt="View on the Spree from c-base"
                />
                <figcaption>
                  c-base is a space station that “crashed” and is being
                  reconstructed along the Spree river by a group of Berlin
                  hackers. Some call it the mother of all hackerspaces.
                </figcaption>
              </figure>

              <div className="building-block__text">
                <p>
                  On a gray February morning in Berlin, people wandered down a
                  dark ramp into a space station.
                </p>
                <p>
                  Not a metaphorical one—at least not entirely.{' '}
                  <a href="https://c-base.org">c-base</a>, with its blinking
                  lights, maze of cables, and decades of hacker lore, has long
                  described itself as a space station that crashed on Earth 4.5
                  billion years ago. Since the mid-1990s it has been a gathering
                  place for coders and tinkerers who prefer to build the future
                  themselves rather than wait for it to arrive.
                </p>
                <p>
                  On this particular morning, they had come to design something
                  new.
                </p>
                <p>
                  In February, an invitation had circulated across Europe’s
                  decentralized technology networks: come to c-base and help
                  shape the next <a href="https://dwebcamp.org/">DWeb Camp</a>,
                  a five-day gathering that will take place this July in the
                  forests of Brandenburg.
                </p>
                <p>There was no fixed agenda, and no finished plan.</p>
                <p>Just a question.</p>
                <p>
                  <strong>
                    <em>
                      If we were to build the next version of DWeb Camp
                      together, what might it look like?
                    </em>
                  </strong>
                </p>
                <p>
                  Before long, the room filled. Peer-to-peer developers had come
                  from Edinburgh, free-software advocates from Berlin,
                  privacy-first technologists from Shanghai, and policy thinkers
                  from Copenhagen. Artists, funders, open-source builders, and
                  organizers filtered in carrying laptops and winter coats. Most
                  of them had never met before.
                </p>
                <p>
                  They had come not just to attend—but to help build something.
                </p>
                <p>
                  The timing was not accidental. Across the world, the systems
                  shaping the internet—and increasingly public life—are
                  consolidating. Governments tighten control. Platforms encroach
                  on our privacy. The internet as we know it is splintering, and
                  along with it, our consensus about what is true. For many in
                  the room that morning, the pressing question was can we
                  restructure the web before it hardens into something more
                  destructive than its early architects ever imagined?
                </p>
                <p>
                  DWeb Camp, first held in Northern California in 2019, grew out
                  of that concern. The gathering was conceived as a place where
                  technologists, artists, organizers, and policymakers might
                  come together to begin building a more decentralized web.
                </p>
                <p>
                  A web built less like a pyramid and more like a forest.
                  Distributed. Resilient. Sharing resources underground.
                </p>
                <p>
                  This summer, DWeb Camp’s theme is “Root Systems,” and it moves
                  to Europe for the first time. The meeting at c-base was an
                  early step in imagining what might grow there.
                </p>
                <figure>
                  <img
                    alt="Brewster Kahle in conversation with Wendy Hanamura"
                    src="/images/berlin-trip/1.png"
                  />
                  <figcaption>
                    For an hour, Internet Archive founder Brewster Kahle
                    answered the questions of DWeb Sr. Organizer, Wendy
                    Hanamura, in a wide-ranging chat about public AI, his
                    successes and failures, and the imperative for
                    decentralization in this political moment.
                  </figcaption>
                </figure>

                <h2>Origins of a Decentralized Gathering</h2>
                <p>
                  <q>It feels like I’m coming home,</q> Brewster Kahle, founder
                  of the Internet Archive,{' '}
                  <a href="https://archive.org/details/dweb-meetup-berlin-20260228-brewster-kahle">
                    said when he opened the morning.
                  </a>
                </p>
                <p>
                  Kahle traces some of the inspiration for DWeb Camp to the
                  Chaos Communication Camp, the sprawling hacker gathering he
                  first attended in 2003. But his vision was always more
                  focused: an event where technologists could work alongside
                  artists, organizers, and policymakers to imagine and build the
                  infrastructure of a decentralized web.
                </p>
                <p>
                  <q>
                    A web that’s more private, more reliable, but still fun,
                  </q>{' '}
                  he said, hopping up and down. <q>A web with many winners.</q>
                </p>

                <h2>Collective Intelligence</h2>
                <p>
                  At c-base, Kahle and a dozen core organizers didn’t arrive
                  with a finished program. Instead they facilitated breakout
                  conversations, solicited unconference topics, and most
                  importantly, listened.
                </p>
                <p>
                  Throughout the day, small circles formed across the space
                  station, and similar themes surfaced again and again.
                </p>
                <p>
                  Not everything, participants suggested, needs to scale to
                  billions of users. Perhaps some of the most important
                  decentralized tools will serve smaller networks—families,
                  communities, groups of collaborators who know one another. An
                  intimate web, as some people called it, rather than the global
                  one.
                </p>
                <p>
                  Others spoke about shared infrastructure in a broader sense:
                  not just software, but the resources communities could
                  distribute. Buildings. Time. Convenings. Knowledge.
                </p>
                <p>
                  The question, several people suggested, was not simply how to
                  build better tools but how to sustain the ecosystems that
                  allow those tools to exist.
                </p>
                <p>
                  Holke Brammer, of the{' '}
                  <a href="https://www.hypercerts.org/">
                    Hypercerts Foundation
                  </a>
                  , offered a framework that drew nods around the table.
                </p>
                <p>
                  <q>It’s said, first you need the values,</q> he recited.
                  <br />
                  <q>
                    Then governance.
                    <br /> Then the right incentives.
                    <br />
                    And finally the technology to build it.
                  </q>
                </p>
                <p>
                  DWeb Camp tries to bring all of those layers together in the
                  same place at the same time. Which means inviting not just
                  engineers but researchers, economists and storytellers.
                </p>
                <p>
                  Marek Tuszynski, co-founder of{' '}
                  <a href="https://tacticaltech.org/">Tactical Tech</a>, offered
                  a wry observation about how the technology world often divides
                  itself.
                </p>
                <p>
                  <q>They say technology is inspired in San Francisco,</q> he
                  recounted.{' '}
                  <q>It’s built in China. And criticized in Europe.</q>
                </p>
                <p>
                  The challenge, he suggested, was to move beyond those boxes—to
                  collaborate across them.
                </p>
                <p>
                  Later, when participants were asked what would make the camp
                  most valuable, one answer surfaced repeatedly.
                </p>
                <p>
                  <q>To find the people I want to work with after Camp,</q>{' '}
                  someone said,{' '}
                  <q>
                    and figure out how to keep working together on an on-going
                    basis.
                  </q>
                </p>

                <h2>Grounded in Place</h2>
                <figure>
                  <img
                    alt="Franzi and Marv presenting Alte Hölle"
                    src="/images/berlin-trip/3.png"
                  />
                  <figcaption>
                    Franzi and Marv, two of the stewards of the Alte Hölle
                    Collective, share the terrain of the 100,000 sq. meters
                    retreat site
                  </figcaption>
                </figure>
                <p>
                  DWeb Camp has always been shaped by the places where it
                  occurs.
                </p>
                <p>
                  When organizers began looking for a European site, they
                  eventually settled on{' '}
                  <a href="https://alte-hoelle.de/">Alte Hölle</a>, a forested
                  property in Brandenburg about an hour southwest of Berlin.
                </p>
                <p>
                  The decision had as much to do with the people stewarding the
                  land as with the landscape itself.
                </p>
                <p>
                  In 2021, a collective of friends who met at Chaos
                  Communications Camp purchased the property—once a Stasi
                  recreation site—with the intention of turning it into a
                  long-term gathering place for artists, hackers, and activists.
                </p>
                <p>Their question was straightforward.</p>
                <p>
                  <em>
                    Why build a camp only to dismantle it a few days later? Why
                    not create infrastructure that could remain?
                  </em>
                </p>
                <p>
                  Two of the site’s stewards, Franzi and Marv, joined the
                  gathering at c-base. Rather than simply presenting the site,
                  they participated in the discussions, listening carefully to
                  the people who will soon gather there.
                </p>
                <p>
                  <q>We share a lot of the same values,</q> they said.{' '}
                  <q>
                    We are a volunteer group that supports [you] and is an ally
                    for [your] event.
                  </q>
                </p>
                <p>
                  The goal, for DWeb organizers, is not merely to occupy Alte
                  Hölle but to contribute to it—to plant something, rather than
                  simply passing through.
                </p>
                <figure>
                  <img
                    alt="A green field with tents and surrounding trees"
                    src="/images/berlin-trip/2.jpg"
                  />
                  <figcaption>
                    The field where some 700+ campers will pitch their tents in
                    Brandenburg.
                  </figcaption>
                </figure>

                <h2>Partners with Principles</h2>
                <figure>
                  <img
                    alt="Afri presenting the badge prototype for DWeb Camp 2026"
                    src="/images/berlin-trip/5.png"
                  />
                  <figcaption>
                    Afri of Department of Decentralization demonstrates the
                    programmable badge his team is developing for DWeb Camp. Via
                    radio waves, you will be able to talk person to person at
                    Camp, without going to the cloud or WIFI.
                  </figcaption>
                </figure>
                <p>
                  Strong collaborators don’t just support your vision. They push
                  you to live up to it.
                </p>
                <p>
                  Berlin’s{' '}
                  <a href="https://dod.ngo/">
                    Department of Decentralization (DoD)
                  </a>
                  —a collective formed after organizing ETHBerlin in 2018—has
                  encouraged DWeb Camp organizers to align our tools more
                  closely with our principles. That means prioritizing
                  open-source infrastructure wherever possible.
                </p>
                <p>
                  Tickets will be sold through{' '}
                  <a href="https://pretix.eu/about/en/">PreTix</a>.<br />
                  The schedule will run on{' '}
                  <a href="https://pretalx.com/p/about/">PreTalx</a>.<br />
                  Collaborative documents will live on{' '}
                  <a href="https://cryptpad.fr/">CryptPad</a>.<br />
                  Camp communications will be via{' '}
                  <a href="https://matrix.to/#/#dwebcamp-2026:getdweb.net">
                    Matrix.
                  </a>
                </p>
                <p>Tools designed with privacy and security in mind.</p>
                <p>
                  Not just talking about decentralization, but practicing it.
                </p>

                <h2>Building Across Borders</h2>
                <figure>
                  <img alt="Our team" src="/images/berlin-trip/6.png" />
                  <figcaption>
                    Some of the organizers of DWeb Camp from Alte Hölle,
                    Department of Decentralization and the Internet Archive came
                    together at c-base in February to plan for July.
                  </figcaption>
                </figure>

                <p>
                  The organizers of DWeb Camp 2026 are based across North
                  America and Europe and have lineages from around the
                  globe—Nigeria, Russia, Germany, France, Italy, Ukraine, Canada
                  and the United States.
                </p>
                <p>
                  Toward the end of the day at c-base, Kahle returned to a theme
                  that was disarmingly simple.
                </p>
                <p>Welcome.</p>
                <p>
                  <q>
                    This is a really special community…they welcomed me twenty
                    years ago,
                  </q>{' '}
                  he said.{' '}
                  <q>
                    You may not be aware of the effect you have by saying
                    ‘welcome’ to somebody from a foreign place. I think it is a
                    hallmark of a community that is living and thriving.
                  </q>
                </p>
                <p>
                  That small gesture, he suggested, can shape the direction of
                  entire communities.{' '}
                  <q>
                    I hope that DWeb Camp is to your liking, if it's not, say
                    so, and let’s basically make it better. Let’s build
                    something together.
                  </q>
                </p>
                <p>Because DWeb Camp has never been a finished product.</p>
                <p>
                  It is something closer to a living system. It’s shaped by the
                  people who show up, the relationships they form, and the ideas
                  that take hold.
                </p>
                <p>
                  And in the forests of Brandenburg this July, those
                  connections—technical, social, and human—will begin to spread
                  beneath the surface.
                </p>
                <p>
                  Like any root system, their real strength may lie in what we
                  cannot see.
                </p>
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

export default BerlinTripPage
