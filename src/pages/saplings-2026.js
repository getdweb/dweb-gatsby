import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function Saplings2026Page() {
  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="custom-content">
              <h1>The Future Takes Root: Introducing the Saplings Program</h1>
              <p>
                For the first time, DWeb Camp will have a track dedicated to teens.
              </p>

              <p>By Ryder Morton</p>

              <div className="building-block__text">
                <p>
                  If you want to come to DWeb Camp, bring the whole family! For the first time, 
                  DWeb Camp will have a teen program in addition to the children's program run 
                  in years past. 
                </p>              
                
                <p>
                  These two programs, the Saplings (teenagers) and the Seedlings 
                  (children) are part of the Intergenerational Growth track, which seeks to 
                  combine the perspectives of the Old Growth and the insights of the New Shoots 
                  alike. It will echo the myriad voices of the web - at once wise, innovative, and 
                  playful.
                </p>

                <br></br>

                <blockquote style={{ fontSize: '18px' }}>
                  <p>
                    At camp, we will make these protocols that govern our lives more transparent, allowing 
                    us to explore not only how they work, but how we can change them for a better future.
                  </p>
                </blockquote>

                <figure>
                  <img
                    src="/images/saplings-2026/1.png"
                    alt="Galileo in 2023 learns and plays with Noah Chon Lee, founder of Via Prize."
                  />
                  <figcaption>
                    Galileo in 2023 learns and plays with Noah Chon Lee, founder of Via Prize.
                  </figcaption>
                </figure>

                <p>
                  In more concrete terms, the Saplings program has three primary goals. The first 
                  is to demystify tech. Phones have become a staple of teenage life - but for all its 
                  familiarity, the device largely remains a black box. Could you explain how a YouTube 
                  video actually lands in your phone, or how a text message really reaches you? At 
                  camp, we will make these protocols that govern our lives more transparent, allowing 
                  us to explore not only how they work, but how we can change them for a better future.
                </p>

                <p>
                  Our learning will be grounded in doing. A sys-admin will guide teens through 
                  setting up a server, giving us an understanding of not just how the web works 
                  but also the “why” of mesh networks. We will hold a fiber-optic cable and a 
                  router while learning what a peer-to-peer system actually is. At camp, the 
                  pieces that form the web we know will be laid open for discovery.
                </p>

                <figure>
                  <img
                    src="/images/saplings-2026/2.png"
                    alt="A Seedlings Tradition: we end with a puppet parade to the closing ceremony on Saturday evening."
                  />
                  <figcaption>
                    A Seedlings Tradition: we end with a puppet parade to the closing ceremony on Saturday evening.
                  </figcaption>
                </figure>

                <p>
                  The second goal is to instill self-confidence, in both the conceptual 
                  and technical realms. We will create science fiction stories, debate 
                  against an AI digital twin, and deliberate whether it is the people or 
                  the system that would make a decentralized society successful. The Saplings 
                  program will give teens the background and the opportunity to think and 
                  discuss with each other and with some of the greatest technologists in the field.
                </p>

                <figure>
                  <img
                    src="/images/saplings-2026/3.png"
                    alt="DWeb Camp is a place to be awed by the beauty of the world - both in art and nature."
                  />
                  <figcaption>
                    DWeb Camp is a place to be awed by the beauty of the world - both in art and nature.
                  </figcaption>
                </figure>

                <p>
                  Thinking is fun, but so is getting hands-on! At camp, teens will learn to fix 
                  bicycles, take soil samples to analyze the ecosystem’s health, and solder their 
                  own TV-disabling remote controls. Teens will learn that we have the capacity to 
                  think about the issues of society and the web, but also that we have agency to 
                  make change ourselves.
                </p>

                <p>
                  Of course, no summer camping experience - even if in the context of a decentralized tech 
                  conference - is complete without fun! Learn self-defense from a Chi Gong master, sip tea 
                  and play Go in the Chaos Infusion tent, do improv, build dough murals with the Seedlings, 
                  and create cyanotype images with the sun. In the evenings teens can go on a hike, play in 
                  the pool, toss a frisbee, or learn about the festival music culture of Berlin.
                </p>

                <figure>
                  <img
                    src="/images/saplings-2026/4.png"
                    alt="Ryder Morton playing giant chess against his younger brother Hunter in 2024."
                  />
                  <figcaption>
                    Ryder Morton playing giant chess against his younger brother Hunter in 2024.
                  </figcaption>
                </figure>

                <p>
                  When I first came to DWeb Camp, I was 13. The experience struck me uniquely - the 
                  people at camp formed a community driven by a global mission but also grounded by 
                  tenderness for each other. It was a place where the old and the new intertwined, 
                  with all the lessons of the past and all the ambitions of the future.
                </p>

                <p>
                  This feeling compelled me to volunteer as an assistant Steward the next year, 
                  in 2024. Now, after another two years of learning and growing, I want to 
                  contribute more greatly to that spirit that makes DWeb Camp unique. My greatest 
                  hope is to inspire other teens in the way the people of DWeb have inspired me.
                </p>
                
                <p>
                  DWeb Camp will be an experience of learning, making, and playing. And not just for the teens.
                </p>
                <p>
                  We hope to see you there!
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

export default Saplings2026Page
