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
              <h1 style={{ fontSize: '46px' }}>
                Interview with Justus Perlwitz
              </h1>
              <img
                src="/images/justus-avatar-white.png"
                alt="Portrait of Justus Perlwitz"
                style={{
                  float: 'right',
                  maxWidth: '140px',
                }}
              />

              <div className="building-block__text">
                <em>
                  <a
                    href="https://www.justus.pw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Justus Perlwitz
                  </a>{' '}
                  is a DWeb volunteer whose work has been key in updating and
                  refactoring the code of{' '}
                  <a
                    href="https://dwebcamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DWeb Camp's website
                  </a>
                  . He is an active and enthusiastic member of the global DWeb
                  Community, and he is based in Tokyo, Japan.
                  <br />
                  <br />
                  Tommi, from the DWeb Core Team, interviewed him. Here is the
                  full transcript of their conversation.
                </em>
                <hr />
                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  Discovering DWeb: From Berlin to Tokyo
                </h2>
                <p>
                  <b className="speaker1">Tommi:</b> Your story is so
                  incredible, a German person living in Tokyo and getting
                  intertwined with DWeb… Tell me all about it!
                </p>
                <p>
                  <b>Justus:</b> I'm Justus, I'm from Berlin, and I'm 32 years
                  old. I do cyber security consulting, a lot of software
                  development, and I've been working with decentralized Web
                  stuff for a while. I have also been involved in the
                  cryptocurrency sphere, Ethereum, and Web3 things, and I'm also
                  really into open source software. Two years ago I started
                  hearing about DWeb through my friend{' '}
                  <a
                    href="https://kumavis.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kumavis
                  </a>
                  , who has been with you since the beginning. He introduced me
                  to the whole thing.
                </p>

                <p>
                  Last summer, I was planning to go to DEFCON, as I usually do,
                  but Kumavis told me: "you should totally come to DWeb Camp!"
                  so, instead of Nevada, Las Vegas I ended up at DWeb Camp, and
                  I had a really great time there! Honestly, I didn't go with
                  many expectations, because looking at the sponsors, at the
                  program, and so on it seemed like there would be a bit of
                  something for everyone. Then, when we went there, I was
                  amazed. I spent most of the time with the network people, and
                  I just started messing around with some stuff. It was really
                  cool to see the full Internet infrastructure being set up at
                  Camp, including a 4G cell! These are things I have never seen
                  before, I didn't know you could just set up your own cell!
                </p>
                <p>
                  In general, I really like this kind of environment where there
                  are all those things about which I think I know something, but
                  then I get there, and suddenly it's like "whoah! I didn't know
                  about that at all! You can just do that yourself?" It's like
                  this with so many things at DWeb Camp, and I think that in the
                  DWeb crowd in general there's this attitude of asking whether
                  you can do some things yourself and the usual reply is "why
                  not? No one's gonna stop you." I think this is really really
                  cool!
                </p>

                <p>
                  Because of this great energy, Kumavis and I started talking
                  about opening up a chapter here In Tokyo, and we are already
                  talking to the DWeb Core Team about this, now we just have to
                  set up the dates and everything. As the initial conversation
                  was happening, a couple of months ago, an email went around
                  about a volunteer position to update the DWeb Camp website,
                  and it just so happens that I have exactly the skills that you
                  need to maintain that site because it's mostly made in Django,
                  and I just happen to have worked with Django for most of my
                  professional life so far. That was a wonderful coincidence,
                  that got me taking care of the site now.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '40px',
                    marginBottom: '20px',
                  }}
                >
                  Life in Tokyo: Work, Culture, and Community Challenges
                </h2>
                <p>
                  <b className="speaker1">Tommi:</b> Wow, you already touched
                  upon all the things I wanted to ask you! Let's unpack them one
                  by one. How did you end up being a developer in Tokyo?
                </p>

                <p>
                  <b>Justus:</b> In 2018, the cryptocurrency boom was happening,
                  so I got a job offer and I got here to work for an ICO, where
                  I did the whole technical management. I stayed with that
                  company for one and a half years. Before, when I was living in
                  Berlin, I was freelancing, and I made my own little businesses
                  with friends. After that first job here in Japan, I started
                  making my own company again, and now I'm
                  freelancing/consulting.
                </p>
                <p>
                  Beyond work, I was always really interested in Japan, I really
                  like the food, I'm really into learning languages in general,
                  so I am familiarizing myself with Japanese, it's fun! Then I
                  ended up getting married here, and I don't really feel the
                  need to move anywhere else anytime soon. Berlin is the only
                  other place I see myself living in, and I try to go back there
                  every year to see how things are going. People complain all
                  the time, but it's still a pretty good place, very
                  interesting.
                </p>

                <p>
                  <b className="speaker1">Tommi:</b> How is the hacker culture
                  in Tokyo?
                </p>

                <p>
                  <b>Justus:</b> There's not much widely connected hacker
                  culture happening here… One big issue is the language divide:
                  a lot of native Japanese speakers don't speak English well,
                  and the same goes for people who come from abroad: if you
                  don't speak Japanese very well, it makes it quite hard for the
                  communities to interact with each other.
                </p>
                <p>
                  I try to meet as many people as I can, in particular in the
                  cybersecurity and hacker spheres. The non-corporate tech
                  sphere, the one of messing with things, trying out tools, and
                  so on, is not so big here. The main language for cool stuff on
                  the Internet is English, and it's not truly accessible. I can
                  tell from experience that if something is not localized in
                  Japanese it's almost like it doesn't exist, it's invisible to
                  people.
                </p>

                <p>
                  I can anecdotally confirm that: when I read a sign and it has
                  something written in the Latin alphabet, even if it's smaller
                  and below, my eyes always go there first, and then go back to
                  the Kanji. As I grew up in Germany, I got used to seeing the
                  Latin alphabet, and I can guess that it works the other way
                  around as well. So there are these little friction points
                  everywhere that make it very hard for people to interact with
                  each other.
                </p>
                <p>
                  When Kumavis, mai, kev and I had the kickoff meeting for the
                  DWeb chapter here, we specifically talked about this issue:
                  most of the meetups that I know of here take place either in
                  Japanese or in English, never both. It's not good, because
                  many people don't feel welcome if something happens only in a
                  language they're not comfortable with.
                </p>
                <p>
                  It's a lost opportunity! If you have something cool to share,
                  the language shouldn't matter. So there are groups on both
                  sides: Japanese-speaking hackers, and English-speaking
                  hackers, they don't really know each other. If there's
                  something I can do to mitigate that, I would really like to
                  try!
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '40px',
                    marginBottom: '20px',
                  }}
                >
                  DWeb Camp Experience: Technology Meets Community
                </h2>
                <p>
                  <b>Justus:</b> At DWeb Camp, everything was in front of me:
                  people brought their little gadgets and tools, some brought
                  Meshtastic receivers, but it wasn't just that. What do you
                  actually do with it, what are the ideas behind the tech? Can
                  we use this to self-organize? How can we make our own
                  "Internet"?
                </p>
                <p>
                  It's not only about the tech! It was so cool to be at camp and
                  witness a good mix of the techie people but also people who
                  were thinking more about what you actually do with it. At a
                  lot of conferences, events, and retreats they don't manage to
                  do these kinds of things.
                </p>

                <p>
                  Coming back to Tokyo: just because there's this little
                  friction here or there it makes it very difficult for people
                  to find out what's happening somewhere else. So I think it
                  would be great to offer some DWeb-related content, but also
                  community activities. Even if it's merely a meetup with three
                  people, proposing a sort of "bridging" both for time zones and
                  cultures would be such a huge value.
                </p>
                <p>
                  That's what personally got me so interested in this story last
                  year, when Kumavis and I started talking about founding a
                  Node. I really see the potential for something like this, I
                  think there are so many opportunities, and if we're able to
                  bridge the gap, we can all learn from each other, and this
                  applies to any geographical location and any culture on this
                  planet.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '40px',
                    marginBottom: '20px',
                  }}
                >
                  Philosophy on Open Source and Collaboration
                </h2>
                <p>
                  <b>Justus:</b> I think a lot of economic activity is wasted on
                  just implementing the same thing over and over again, instead
                  of just using more standardized components for everything.
                  This is especially the case with proprietary software
                  development: as a developer who's writing code for a company,
                  if you leave it or if that company goes bankrupt, that code
                  just disappears.
                </p>
                <p>
                  Code is not a property that is tangible, like the balance of
                  your bank account, it's an intangible thing, it's mostly an
                  idea in our head, and the fact that all of this code that
                  people might even sacrifice their lifetime for could go to
                  waste is shameful. This applies to many other things, not only
                  to code, but I think a lot of the so-called "intellectual
                  property" (a term that I do not like at all) ends up being
                  locked behind bars for no good reason.
                </p>

                <p>
                  I'm very utopian: I think we should just stay at home, watch
                  movies all day, and get a universal basic income. I think one
                  thing that's keeping us very far from the post-scarcity
                  economy is that we just waste so many opportunities for
                  collaboration, and I see this personally with my job.
                </p>
                <p>
                  On the other hand, another really cool thing that I think
                  about a lot is that an app can be a home-cooked meal, as I
                  read in{' '}
                  <a
                    href="https://www.robinsloan.com/notes/home-cooked-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    this article
                  </a>{' '}
                  some time ago. Instead of always looking out for the problems
                  that everyone has, to make an app and sell it, to have
                  advertising, and so on, maybe you see your friend who wants to
                  take notes in a certain format on their phone so you write an
                  app for them, just for fun, for one person. You don't try to
                  scale it or anything. It just works for one person, so it
                  doesn't have to scale. If you just make a home-cooked meal for
                  someone, you do it as an act of service for the few people
                  you're cooking for, you don't care about how it can be
                  prepared in a canteen.
                </p>

                <p>
                  In the tech industry, and not only, there's a strong
                  conception of this, how it should be done: we write the code
                  and then we own it. We make our own standards and then
                  everyone has to use them. They can't use anything else
                  anymore. I see yet another opportunity for DWeb to change
                  things also in this sense.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '40px',
                    marginBottom: '20px',
                  }}
                >
                  Technical Work: Building the DWeb Camp Website
                </h2>
                <p>
                  <b className="speaker1">Tommi:</b> Let's get to the tech talk,
                  then! What did you do for dwebcamp.org, and how is it going?
                </p>

                <p>
                  <b>Justus:</b> One and a half months ago, Arkadiy [DWeb's Tech
                  Lead] and I had a kickoff meeting for the DWeb Camp website
                  renewal. It's made in{' '}
                  <a
                    href="https://www.djangoproject.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Django
                  </a>
                  , a framework for making web applications. In our particular
                  case it's being used as a CMS (Content Management System), and
                  with it you can create and edit pages, articles, and so on.
                </p>
                <p>
                  Everything that you see on the DWeb Camp website for 2024,
                  even if it was also used for previous camps, comes from there.
                  It's a bit like Wordpress, but the cool thing about our setup
                  is that using{' '}
                  <a
                    href="https://github.com/meeb/django-distill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    a plugin called distill
                  </a>{' '}
                  (like "distillation") you can turn everything into a static
                  website, so when you want to host it somewhere you just have
                  HTML files, image files, style sheets, etc. and you can just
                  upload and host them anywhere.
                </p>

                <p>
                  It has great usability, but since this website has been coded
                  by many different people over a long period of time, there
                  were a lot of things that haven't been maintained very well.
                  Simply, some of the libraries that it was using were quite out
                  of date, so my first step was to update all of them, because
                  otherwise we wouldn't be able to add anything new.
                </p>
                <p>
                  There were a lot of interesting and challenging issues:
                  there's this editor that the DWeb CMS was using, called{' '}
                  <a
                    href="https://django-ckeditor.readthedocs.io/en/latest/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ck editor
                  </a>
                  . It used to be free software, but it became proprietary. The
                  issue was that we had all the content made with that rich text
                  editor. Switching that dependency wasn't as simple as updating
                  the configuration, but a very cumbersome procedure, as we had
                  to find a reliable alternative.
                </p>

                <p>
                  It's almost boring that I'm mostly talking about libraries,
                  but that's the reality: if you have a really old software
                  project and you have a lot of outdated libraries, you have to
                  spend a lot of time just trying to fix those essential things
                  before you can even get started on doing anything interesting
                  on top of that.
                </p>
                <p>
                  The coolest and most relevant change was integrating the
                  database in the website repository, to avoid the requirement
                  of any server work. So, imagine that you just download a
                  folder, then you double click on a file, and it starts the
                  whole CMS for you. Maybe, if you're on a Mac or on Linux, you
                  don't even have to install anything else. Imagine you can just
                  click on something and have Wordpress open on your computer,
                  then you click a save button to somehow compress that folder,
                  and finally give it to another person to edit and/or to
                  publish. That's the whole idea: a local-first CMS.
                </p>

                <p>
                  Lastly, the most important thing I did for the DWeb Camp site
                  is not technical at all: I wrote documentation on how to
                  install everything and how to build the site, because there
                  wasn't a lot of documentation. I understand why it happened,
                  because a lot of people worked on it, and they focused on
                  making the things rather than writing about them. I learned
                  the value of documentation over the last few years, as I
                  develop a lot of software, then I give it to people and ask
                  them to test it for me.
                </p>
                <p>
                  I have a friend who's really good at just pretending that he
                  doesn't know anything, so he asks a lot of questions, even
                  though I think "that's really obvious!" but then it turns out
                  it's not obvious at all. A bit like defensive driving, I do
                  defensive documentation writing, also because the reality is
                  that a year from now I'm gonna look at this project and if I
                  don't have any documentation I won't know how it works myself!
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    marginTop: '40px',
                    marginBottom: '20px',
                  }}
                >
                  Looking Towards the Future: Building for Longevity and
                  Reusability
                </h2>
                <p>
                  <b>Justus:</b> I really care about making things for
                  longevity. I hope that out of all the things I can do for the
                  DWeb Camp site, I can make it still work in 10 years. It's
                  nice if we have enough time to add cool features, but if we
                  can make it a thing that DWeb can use for the next 10 years,
                  that's a great victory. I think we're pretty close to that
                  now.
                </p>
                <p>
                  Gosh, you know what? Out of all the things we've discussed
                  there's nothing cool and flashy. Honestly, it's all about
                  making something that you can give to someone who's not so
                  technically versed and they can edit a page. As far as I know,
                  this doesn't exist yet.
                </p>
                <p>
                  There's a vision for how the site could be a tool that many
                  people can use to make their own DWeb Camp-like websites and
                  all of this to say there's lots of cool connections with a lot
                  of really interesting people. I encounter so many new things
                  and one project leads to another and that's a really cool
                  vibe. That's what I like.
                </p>

                <p>
                  <b className="speaker1">Tommi:</b> Thank you Justus! It was
                  incredibly insightful! We'll be looking forward to the awesome
                  things you will be doing, in particular with the Tokyo Node.
                </p>

                <p>
                  <b>Justus:</b> Thank you! See you soon.
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

export default JustusInterviewPage
