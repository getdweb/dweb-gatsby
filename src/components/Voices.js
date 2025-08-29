import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Voice from './Voice'
import ScrollService from '../services/scroll-service'

export default function Voices() {
  const VOICES_PER_PAGE = 9
  const RENDER_TIMEOUT = 500

  const timeouts = []

  const [loading, setLoading] = useState(true)
  const [finished, setFinished] = useState(false)
  const [page, setPage] = useState(1)
  const [voices, setVoices] = useState([])

  const scrollService = new ScrollService()

  let voicesLoadedEvent
  if (typeof window !== `undefined`)
    voicesLoadedEvent = new Event('voicesLoaded') // This event is used in ./templates/index.js

  // term ids
  /*
			{
				"Flashback:": 9,
				"Profile:": 10,
				"Opinion:": 8,
				"Newsletter:": 19,
				"Analysis:": 11,
				"Guide:": 12,
			}
		*/
  const data = JSON.parse(`{
	"data": {
		"allWordpressWpVoices": {
			"nodes": [
				{
					"acf": {
						"author": "Val Elefante",
						"date": "#26 August 2025",
						"intro": "A behind-the-scenes look at the Cookie Jar Collective convening, where artists, technologists, and policy leaders came together to reimagine savings as a shared resource and explore new models of digital public infrastructure.",
						"link": "https://r2i-lab.org/shaping-collective-futures-co-designing-a-new-social-safety-net-for-artists-and-gig-workers/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Shaping Collective Futures: Co-Designing A New Social Safety Net for Artists and Gig Workers",
					"wordpress_id": 1326
				},
				{
					"acf": {
						"author": "Val Elefante",
						"date": "#2024",
						"intro": "The following list of Decentralized Web use cases, examples solutions, and tools was curated by Accelerating Makers, a program of Public Good App House and TechSoup that is helping technology builders and nonprofits co-create purpose-built tools for public good.",
						"link": "https://acceleratingmakers.notion.site/DWeb-for-Impact-Use-Case-Database-8b7e0449d56a4c66905ac7e3fad3a597",
						"voice_category": {
							"term_id": 12,
							"name": "Guide"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb for Impact: Use Case Database",
					"wordpress_id": 1325
				},
				{
					"acf": {
						"author": "11th Hour Project, Raft Foundation",
						"date": "#July 2025",
						"intro": "Float - the funding lab for open agroecological technologies - is an experiment in community-led innovation prioritization and resource allocation that seeks to bridge the experience and expertise of agroecological farmers, technologists, researchers, and civil society to generate collective commons*.",
						"link": "https://float.ag/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Float - Funding lab for open agroecological technologies",
					"wordpress_id": 1324
				},
				{
					"acf": {
						"author": "EU Social Economy Gateway",
						"date": "#28 November 2024",
						"intro": "The sharing and use of data is one of the ways in which the European Commission seeks to boost the development of social economy organisations and allow them to contribute to an inclusive, green and fair economy and society. Data driven processes and sharing of data can foster robust and efficient collaborations, increase knowledge and innovation, enhance civic empowerment and help to open up new markets and business models.",
						"link": "https://social-economy-gateway.ec.europa.eu/eu-initiatives/code-conduct-data-sharing-social-economy_en",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Code of conduct data sharing in the social economy",
					"wordpress_id": 1323
				},
				{
					"acf": {
						"author": "Rithikha Rajamohan",
						"date": "#August 2024",
						"intro": "In August 2024, a transdisciplinary group of contributors in the public goods funding, technology, farming and food systems spaces gathered in Navarro, California. Our purpose was to develop a vision for the future of agriculture, its supporting technologies, and how we might go about resourcing the first steps towards it.",
						"link": "https://dfood.webflow.io",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "D:Food Web - The Distributed Past & Future of Agriculture",
					"wordpress_id": 1322
				},
				{
					"acf": {
						"author": "Nigini Oliveira",
						"date": "#9 April 2025",
						"intro": "What better way to bootstrap this blog than by covering a DWeb event we co-hosted? On the 28th of February, Will and I partnered with the INTDEV team to host the first Seattle Node Gathering of 2025. In past node meetings, a group of us identified an opportunity to start conversations about the usability and user experience of DWeb software and services. Investing in UX is one of the most crucial steps to creating software and services that promote human agency and collective benefits. Hence, we proposed the general topic 'UX Challenges for DWeb systems' for our usually intimate and friendly gathering.",
						"link": "https://dweb.observer/seattle-node-gathering-feb-2025/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Seattle Node Gathering (Feb, 2025)",
					"wordpress_id": 1321
				},
				{
					"acf": {
						"author": "mai ishikawa sutton",
						"date": "#26 March 2025",
						"intro": "In late February, members of the DWeb Core Team and the DWeb community were in Taipei to attend the 13th edition of RightsCon, the largest global summit on human rights in the digital age. Namely, we were there to connect with the digital rights community. We wanted to participate in an event where thousands of people travel from around the world to discuss the current and future state of the internet, and to meet others who were involved in building decentralized, distributed, and peer-to-peer network technologies.",
						"link": "https://blog.archive.org/2025/03/26/dweb-and-digital-rights-a-report-back-from-rightscon-in-taipei/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb and Digital Rights: A Report Back from RightsCon in Taipei",
					"wordpress_id": 1320
				},
				{
					"acf": {
						"author": "Chad Kohalyk, Emily McGill",
						"date": "#20 September 2024",
						"intro": "Phew! It was a whirlwind nine days in July as volunteers stepped to host a number of events wrapped around the Internet Engineering Task Force's (IETF) meeting in Vancouver. We would like to thank all the LOCALHOST and related community organizers, as well as other community members that volunteered their time and energy.",
						"link": "https://dwebyvr.org/localhost-2025-wrap-up/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "LOCALHOST 2025 Wrap-up",
					"wordpress_id": 1319
				},
				{
					"acf": {
						"author": "Chad Kohalyk",
						"date": "#21 November 2024",
						"intro": "'Interdependence' is a key value highlighted in the DWeb Principles. Local community-building is core to the DWeb movement, striving for more technical agency and an equitable world. There are DWeb Nodes popping up all over the world, but I believe we it is also important to link nearby nodes into a wider DWeb network. The best way to do that is in person so a few of us from the Vancouver DWeb node piled into my car (other Canadian friends took the train or the bus) and made a pilgrimage across the southern border for the DWeb Seattle Social. This is a first pass trip report of the event to share some of photos and next actions.",
						"link": "https://dwebyvr.org/dweb-seattle-social-trip-report/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Seattle Social Trip Report",
					"wordpress_id": 1318
				},
				{
					"acf": {
						"author": "Chad Kohalyk, David Luecke",
						"date": "#30 January 2025",
						"intro": "On January 11th and 12th 2025, more than two dozen technologists gathered in Vancouver, coming from as far away as Seattle, Vancouver Island and Salt Spring Island to hear talks from some of the people on the forefront of the local-first movement, and then learn together in a collaborative hackathon.",
						"link": "https://dwebyvr.org/dweb-local-first-weekend-roundup-2/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Local-First Weekend roundup",
					"wordpress_id": 1317
				},
				{
					"acf": {
						"author": "Christine Lemmer-Webber",
						"date": "#13 December 2024",
						"intro": "A few weeks ago I wrote How decentralized is Bluesky really?, a blogpost which received far more attention than I expected on the fediverse and Bluesky both. Thankfully, the blogpost was received well generally, including by Bluesky's team. Bryan Newbold, core Bluesky engineer, wrote a thoughtful response article: Reply on Bluesky and Decentralization, which I consider worth reading.",
						"link": "https://dustycloud.org/blog/re-re-bluesky-decentralization/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Re: Re: Bluesky and Decentralization",
					"wordpress_id": 1316
				},
				{
					"acf": {
						"author": "Bryan Newbold",
						"date": "#26 November 2024",
						"intro": "This is a reply to Christine Lemmer-Webber's thoughtful (and widely read) 'How decentralized is Bluesky really?' blog post. I am so happy and grateful that Christine took the time to write up her thoughts and put them out in public. Her writing sheds light on substantive differences between protocols and projects, and raises the bar on analysis in this space. However, I disagree with some of the analysis, and have a couple specific points to correct.",
						"link": "https://whtwnd.com/bnewbold.net/3lbvbtqrg5t2t",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Reply on Bluesky and Decentralization",
					"wordpress_id": 1315
				},
				{
					"acf": {
						"author": "Christine Lemmer-Webber",
						"date": "#22 November 2024",
						"intro": "Recently due to various events (namely a lot of people getting off of X-Twitter), Bluesky has become a lot more popular, and excitement for its underlying protocol, ATProto, is growing. Since I worked on ActivityPub which connects together Mastodon, Sharkey, Peertube, GotoSocial, etc, etc, etc in the present-day fediverse, I often get asked whether or not I have opinions about ATProto vs ActivityPub, and the answer is that I do have opinions",
						"link": "https://dustycloud.org/blog/how-decentralized-is-bluesky/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "How decentralized is Bluesky really?",
					"wordpress_id": 1314
				},
				{
					"acf": {
						"author": "Vincent Charlebois",
						"date": "#26 November 2024",
						"intro": "DWeb Camp is a space for people to connect, share, and envision the future of the internet, and to explore how the decentralized web can foster healthier relationships with technology. Throughout our week-long gathering, we discussed decentralized governance, transparency, cooperation, ethical AI, and ecological metaphors that could inspire new ways of structuring interactions, embodying trust, human agency, and sustainability.",
						"link": "https://hypha.coop/dripline/dweb-camp-recap-a-cybernetic-ecology/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A Cybernetic Ecology",
					"wordpress_id": 1313
				},
				{
					"acf": {
						"author": "Juan Cruz",
						"date": "#05 November 2024",
						"intro": "El objetivo principal de este campamento fue crear un espacio donde activistas, desarrolladores, artistas, investigadores y acompañantes comunitarios nos conectamos, aprendimos y compartimos experiencias e ideas para transformar nuestros contextos a través de la tecnología descentralizada teniendo en cuenta principios como la confianza, el respeto mutuo y la conciencia ambiental.",
						"link": "https://redescomunitarias.co/es/noticias/dweb-camp-2024-un-espacio-para-la-innovacion-colaboracion-y-bienestar-comunitario",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Dweb Camp 2024: Un Espacio para la innovación, colaboración y bienestar comunitario ",
					"wordpress_id": 1312
				},
				{
					"acf": {
						"author": "Kiado Cruz",
						"date": "#October 2024",
						"intro": "A lo largo de la historia, nuestros pueblos han sido incorporados a imperios y naciones sin nuestro consentimiento. Esta inclusión forzada ha generado explotación, despojo de recursos y pérdida de nuestras culturas. Ante el avance de la inteligencia artificial (IA), debemos recordar esta historia de opresión y colonialismo.",
						"link": "https://zapotecoxidza.com/inteligencia-artificial-para-todxs/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "¿Inteligencia artificial para todxs? Inclusión en la IA",
					"wordpress_id": 1311
				},
				{
					"acf": {
						"author": "Dave Thompson",
						"date": "#26 September 2024",
						"intro": "In lieu of a traditional conference space, DWeb Camp takes place at a campground in the redwood forests of northern California. On top being outdoors, the event has several layers of COVID mitigations in place to help protect public safety. It's a unique setting for discussing all the problems facing the decentralized web and the solutions currently being developed. Getting there from the east coast of the US was a long journey, but DWeb Camp was worth it!",
						"link": "https://www.spritely.institute/news/spritely-went-to-dweb-camp-2024-recap.html",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Spritely went to DWeb Camp: 2024 Recap",
					"wordpress_id": 1310
				},
				{
					"acf": {
						"author": "The Feathers Crew",
						"date": "#19 August 2024",
						"intro": "We were looking forward to conversations about how technology can become more sustainable not just as a business but also for our communities and the planet. It was also one of the first opportunities to share what we've been working on with Feathers Cloud Auth, a scalable, secure and decentralized authentication system for modern web runtimes.",
						"link": "https://feathers.cloud/blog/posts/2024-08-19-dwebcamp-2024",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWebcamp 2024",
					"wordpress_id": 1309
				},
				{
					"acf": {
						"author": "Doc Searls",
						"date": "#15 August 2024",
						"intro": "The challenge now isn’t to save the newspapers, magazines, and TV news reports that served us before we all started carrying glowing rectangles in our pockets and purses—and getting our news on those. It’s to make facts matter and keep mattering after stories that use facts move off the screens, speakers, and earphones that feed our interests and appetites.",
						"link": "https://doc.searls.com/2024/08/15/better-way-to-do-news/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A Better Way to Do News",
					"wordpress_id": 1308
				},
				{
					"acf": {
						"author": "Mindplex",
						"date": "#15 August 2024",
						"intro": "Mai Ishikawa Sutton explains how Dweb camp evolved from “Burning Man meets Hacker Camp” to being focused on creating decentralized projects that help humanity evolve in a positive way.",
						"link": "https://magazine.mindplex.ai/introduction-to-dweb-camp-being-human-together-dweb-series-part-1/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Introduction to Dweb Camp: Being Human Together: Dweb Series – Part 1",
					"wordpress_id": 1307
				},
				{
					"acf": {
						"author": "Johannes Ernst",
						"date": "#8 August 2024",
						"intro": "I had the opportunity to run a workshop on FediTest, and the larger question of how can we ever ensure the quality of large-scale decentralized, heterogeneous systems that we are now building, such as in the Fediverse.",
						"link": "https://feditest.org/blog/2024-08-08-feditest-at-dwebcamp/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "FediTest presentation at DWebCamp",
					"wordpress_id": 1306
				},
				{
					"acf": {
						"author": "mai ishikawa sutton",
						"date": "#31 July 2024",
						"intro": "Our Fellows represent a diverse tapestry of cultural and professional backgrounds. They are human rights activists, technologists, educators, community organizers, archivists, researchers, artists, musicians, scientists, cultural conservationists, civil society workers, and digital security experts. Through intersectional approaches to decentralization and decolonization, our Fellows fight for environmental and social justice.",
						"link": "https://blog.archive.org/2024/07/31/moving-together-introducing-the-2024-dweb-fellows/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Moving Together: Introducing the 2024 DWeb Fellows",
					"wordpress_id": 1305
				},
				{
					"acf": {
						"author": "Antonia Bustamante",
						"date": "#14 November 2023",
						"intro": "Allí Coolab (laboratorio cooperativo de redes libres) organizó el primer DWeb+Coolab Camp, versión brasilera del DWeb Camp.",
						"link": "https://blog.archive.org/2023/11/14/descentralizar-para-fortalecer-comunidades-dwebcoolab-camp-brasil/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Descentralizar para fortalecer comunidades: DWeb+Coolab Camp Brasil",
					"wordpress_id": 1304
				},
				{
					"acf": {
						"author": "kev nguyen",
						"date": "#23 October 2023",
						"intro": "Coolab Camp is a continuing experiment in the DWeb movement — weaving together technologists, dreamers, builders, and organizers in a beautiful outdoor setting, providing food and shelter for the week, then letting the sharing, imagination, and community building fly.",
						"link": "https://blog.archive.org/2023/10/23/regenerating-community-in-the-rainforest-at-dwebcoolab-camp-brazil/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Regenerating Community in the Rainforest at DWeb+Coolab Camp Brazil",
					"wordpress_id": 1303
				},
				{
					"acf": {
						"author": "Emaline Friedman",
						"date": "#7 July 2023",
						"intro": "Organized by the Internet Archive, DWeb Camp is home to some of the most offbeat voices in the distributed web space. The ‘DWeb’ term itself is intentionally contrasted with ‘Web3’; inconspicuously absent from the talks, workshops, and brain melds unfolding in tree-shrouded tents and amphitheaters were token shills, gamified pitches, and naive optimism around degen crypto culture per se.",
						"link": "https://blog.neighbourhoods.network/social-coordination-sensemaking-at-dweb-camp-2023-335d5e3726b1",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Social Coordination & Sensemaking at DWeb Camp 2023",
					"wordpress_id": 1302
				},
				{
					"acf": {
						"author": "Paul Krafel",
						"date": "#27 July 2023",
						"intro": "As we gain experience, we refine scripts by which to smoothly navigate various situations with less effort. Much of the time, I am performing well-honed scripts. This might be fine for brushing my teeth and getting ready for bed but my scripts might dominate my focus, blinding me to at-that-moment opportunities beyond the script.",
						"link": "https://roamingupward.net/dweb-and-grief/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb and Grief",
					"wordpress_id": 1301
				},
				{
					"acf": {
						"author": "Val Elefante, Jenny Fan, Dazza Greenwood, Cent Hosten, Ronen Tamari, Joshua Tan, Riley Wong, and Jacky Zhao",
						"date": "#22 August 2023",
						"intro": "The Metagovernance Project (aka- Metagov) returned to DWeb Camp for our second year in a row, this year as a DWeb Sponsor, supporting the event by curating some of the camp’s governance and AI sessions. In this blog, we hear from Josh Tan, co-curator of the AI track, and governance researchers from Metagov who helped co-create the governance track.",
						"link": "https://blog.archive.org/2023/08/22/dweb-camp-exploring-governance-ai/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Camp: Exploring Governance & AI",
					"wordpress_id": 1300
				},
				{
					"acf": {
						"author": "Lia Holland",
						"date": "#29 June 2023",
						"intro": "At Dweb Camp my organization Fight for the Future looked to further bridge the gap between tech projects and the front-line activists, journalists, and marginalized people they aim to serve. Amid our advocacy work for the First Amendment right to code and against financial surveillance, we’ve found that a lot is getting lost in translation. First and foremost, what’s missing between tech and activism is trust.",
						"link": "https://www.shareable.net/uniting-tech-and-activism-how-dweb-camp-is-elevating-decentralized-technology/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Uniting tech and activism: How Dweb Camp is elevating decentralized technology",
					"wordpress_id": 1299
				},
				{
					"acf": {
						"author": "Val Elefante",
						"date": "#10 July 2023",
						"intro": "DWeb Camp was founded on the idea that we need a “third path” for technology that exists somewhere in-between the venture-backed startup “move fast and break things” model and the too-slow and too-bureaucratic academic research-paper-based model. This middle path could take the best elements of the other two: be a path for conscious tech development, building tools for a better world, and getting those tools into the hands of the people and communities who need it most.",
						"link": "https://valelefante.substack.com/p/dweb-camp-2023-coalition-building",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Camp 2023: Coalition-Building Across the Tech Stack",
					"wordpress_id": 1298
				},
				{
					"acf": {
						"author": "Christian Memije",
						"date": "#27 June 2023",
						"intro": "Micah told me about DWeb Camp, and how much he loved the community. So when the opportunity arrived for me to join as a space steward of the Mycelium Pavilion (a space in the event), I took it.",
						"link": "https://memije.substack.com/p/dweb-camp-2023",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A reflection on my experience at DWeb Camp 2023",
					"wordpress_id": 1297
				},
				{
					"acf": {
						"author": "Jacky Zhao",
						"date": "#27 July 2023",
						"intro": "DWeb Camp exists because the founders believed that we couldn’t just have the technologists and entrepreneurs building away in one realm and the academics, philosophers, and critics theory-making in another. Rather, they wanted to create a space where both of these types of people could co-exist, learn from each other, and leave eventually having become a bit of the other — the technologist a little more critical, and the critic a little more pragmatic.",
						"link": "https://jzhao.xyz/posts/DWeb-Camp-2023",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Camp: Gather by the Campfire",
					"wordpress_id": 1296
				},
				{
					"acf": {
						"author": "Xin Xin and TB Dinesh",
						"date": "#29 June 2023",
						"intro": "Interview with TB Dinesh at DWeb Camp 2023",
						"link": "https://soundcloud.com/xin-757599911/location-intelligence-ant-hill-hacks?si=8fb2126642c24f1395fdac0e26919e00",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Location Intelligence | A Conversation with TB Dinesh",
					"wordpress_id": 1295
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton and Nicolás Pace",
						"date": "#11 August 2023",
						"intro": "The DWeb Fellowship invites people from around the world to come to California for DWeb Camp. This year, we had 36 Fellows – they traveled from India, Cambodia, Argentina, Cuba, Kenya, Malawi, Germany, Italy, and from many other places overseas, as well as from across North America and the Bay Area. We selected these exceptional individuals because they invite and challenge us to transform our reality and co-create a vision of a better Web.",
						"link": "https://blog.archive.org/2023/08/11/dweb-fellows-2023-lighting-the-path-towards-a-better-web/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Fellows 2023: Lighting the Path Towards a Better Web",
					"wordpress_id": 1294
				},
				{
					"acf": {
						"author": "Filecoin Foundation",
						"date": "#11 August 2023",
						"intro": "Mauve, Jacky Zhao, and Fauno from the team behind Distributed Press, a tool designed to simplify the process of publishing on the decentralized web. Hear from the team as they discuss their roles, the technologies they use, and their approach to privacy and data security. Get a glimpse of what the future holds for Distributed Press in the rapidly evolving landscape of the decentralized Web.",
						"link": "https://www.youtube.com/watch?v=zZqPomT1Teo",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralized Publishing with Distributed Press",
					"wordpress_id": 1293
				},
				{
					"acf": {
						"author": "Andi Argast",
						"date": "#22 August 2023",
						"intro": "A week-long gathering in the California hills, DWeb Camp was a good antidote to the existential dread I sometimes carry; a vital response to the now-is-end-of-the-world feelings that many seem to share in this age of burning forests, warming oceans, and democratic failings. Technology frames my dystopian sentiments and DWeb Camp opened a space to envision different techno-futures than the extractive stare of Big Tech.",
						"link": "https://hypha.coop/dripline/technological-futures-under-the-redwoods/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Technological futures under the redwoods",
					"wordpress_id": 1292
				},
				{
					"acf": {
						"author": "Yavuz Selim Kiyak",
						"date": "#10 August 2023",
						"intro": "Imagine a stunning forest characterized by majestic redwood trees towering hundreds of meters in height, with a nearby river beautifully meandering through the landscape. Everywhere is a stage: Under the tree, across the field, alongside the river… There is no feeling of urgency, the titles of the participants are not important, and the joy of missing out is encouraged. This is the spirit of DWeb Camp.",
						"link": "https://blog.holochain.org/the-joy-of-missing-out-with-holochain-at-dweb-camp/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Joy of Missing Out with Holochain at DWeb Camp",
					"wordpress_id": 1291
				},
				{
					"acf": {
						"author": "Eric Harris-Braun",
						"date": "#20 July 2023",
						"intro": "In March 2023 Holochain began conversations with DWeb Camp about sponsorship and offered to create a simple application for note taking and community connection (via a tag cloud and shared space for documentation). This was intended to increase the collective intelligence of the camp and to help document the conference sessions.",
						"link": "https://blog.holochain.org/emergence-lessons-in-contextual-complexity/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Emergence: Lessons in Contextual Complexity",
					"wordpress_id": 1290
				},
				{
					"acf": {
						"author": "Paul d'Aoust",
						"date": "#3 August 2023",
						"intro": "It’s a rare thing at a tech conference to hear cheers when someone says the internet is down. But then, DWeb Camp is a rare sort of tech conference.",
						"link": "https://blog.holochain.org/whats-next-for-the-dweb/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "What's Next for the DWeb?",
					"wordpress_id": 1289
				},
				{
					"acf": {
						"author": "Holochain",
						"date": "2023-07-11#11 July 2023",
						"intro": "Breath in, Breath out. Another DWeb Camp has come and gone.",
						"link": "https://blog.holochain.org/dweb-camp-2023-holochain/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Camp 2023 + Holochain",
					"wordpress_id": 1288
				},
				{
					"acf": {
						"author": "Dana Beltrán Barbosa and María Alvarez Malvido",
						"date": "2022-12-07#7 Dec 2022",
						"intro": "People from diverse walks of life had the opportunity and privilege to give ourselves the time and place to get together and weave ideas towards the decentralisation of the internet.",
						"link": "https://www.apc.org/en/blog/rethinking-technologies-dreaming-collectively-dweb",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Rethinking technologies. Dreaming collectively at DWeb",
					"wordpress_id": 1286
				},
				{
					"acf": {
						"author": "Abigail Glasgow",
						"date": "2022-11-29#29 Nov 2022",
						"intro": "Through her initiative Talk to Me About Water, Amelia Bearskin is building climate lounges that will pop-up in public spaces to congregate passersby around the fundamental role water plays in climate restoration and, by consequence, reservation restoration.",
						"link": "https://www.architecturaldigest.com/story/indigenous-architects-activists-artists-restoring-tribal-sovereignty",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "How Indigenous Architects, Artists, and Activists Are Using Design to Restore Tribal Sovereignty",
					"wordpress_id": 1287
				},
				{
					"acf": {
						"author": "Ross Schulman and Jon Callas",
						"date": "2022-11-18#18 Nov 2022",
						"intro": "A wave of people have announced that they're leaving Twitter to check out something called Mastodon, and that leaves many wondering, what is Mastodon anyway? More importantly, what is the “fediverse” and what is “ActivityPub”? This explainer will help you make heads or tails of this new approach to communications and social media.",
						"link": "https://www.eff.org/deeplinks/2022/11/leaving-twitters-walled-garden",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Leaving Twitter&#8217;s Walled Garden",
					"wordpress_id": 1256
				},
				{
					"acf": {
						"author": "Bill Budington",
						"date": "2022-11-16#16 Nov 2022",
						"intro": "With so many users migrating to Mastodon as their micro-blogging service of choice, a lot of questions are being raised about the privacy and security of the platform. Though in no way comprehensive, we have a few thoughts we’d like to share on the topic.",
						"link": "https://www.eff.org/deeplinks/2022/11/mastodon-private-and-secure-lets-take-look",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Is Mastodon Private and Secure? Let’s Take a Look",
					"wordpress_id": 1255
				},
				{
					"acf": {
						"author": "Cindy Cohn and Rory Mir",
						"date": "2022-11-16#16 Nov 2022",
						"intro": "Great numbers of ex-Twitter users and employees are making a new home in the “fediverse,” fleeing the chaos of Elon Musk’s takeover. This exodus includes prominent figures from civil society, tech law and policy, business and journalism.  It also represents a rare opportunity to make a better corner of the internet…if we don’t screw it up.",
						"link": "https://www.eff.org/deeplinks/2022/11/fediverse-could-be-awesome-if-we-dont-screw-it",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Fediverse Could Be Awesome (If We Don’t Screw It Up)",
					"wordpress_id": 1254
				},
				{
					"acf": {
						"author": "Arkadiy Kukarkin",
						"date": "2022-10-14#14 Oct 2022",
						"intro": "The Internet Archive holds over 100PB of data, spanning the Wayback Machine, films, scientific publications, vintage video games, and more. What is it like to try to decentalize at this scale?",
						"link": "https://archive.devcon.org/archive/watch/6/universal-access-to-all-knowledge-decentralization-experiments-at-the-internet-archive/?playlist=Devcon%206&tab=YouTube",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Universal Access to All Knowledge: Decentralization Experiments at the Internet Archive",
					"wordpress_id": 1258
				},
				{
					"acf": {
						"author": "Kaitlyn Tiffany",
						"date": "2022-10-05#5 Oct 2022",
						"intro": "Long before the NFT boom or the Web3 backlash, an unglamorous movement was under way. Where does it stand now?",
						"link": "https://www.theatlantic.com/technology/archive/2022/10/internet-archive-decentralized-web-web3-brewster-kahle/671647/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Battle for the Soul of the Web",
					"wordpress_id": 1231
				},
				{
					"acf": {
						"author": "Jennie Rose Halperin",
						"date": "2022-10-04#4 Oct 2022",
						"intro": "The final session of our webinar series explored the values that drive our current web, and the web we want to build for the future. As we build a new web, most would like for it to be driven by a different set of values: community, collaboration, freedom, sovereignty, democracy, and trust. ",
						"link": "http://blog.archive.org/2022/10/04/mapping-principles-for-a-better-world-ethics-of-the-decentralized-web-uses-in-humanitarian-work/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Mapping Principles for a Better World: Ethics of the Decentralized Web &#038; Uses in Humanitarian Work",
					"wordpress_id": 1221
				},
				{
					"acf": {
						"author": "Remy Hellstern",
						"date": "2022-09-23#23 Sep 2022",
						"intro": "The Xinjiang Documentation Project collaborated with the Internet Archive and the Wayback Machine to recover the a five-part video series posted by Youtube account CHINA LIVE entitled, “Visiting a Re-Education Camp in Xinjiang” which recorded the daily lives of individuals in re-education facilities. ",
						"link": "https://xinjiang.sppga.ubc.ca/critical-scholarship/project-reports/visiting-a-re-education-camp-in-xinjiang-series/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Recovering “Visiting a Re-Education Camp in Xinjiang” Series",
					"wordpress_id": 1223
				},
				{
					"acf": {
						"author": "Paul d'Aoust",
						"date": "2022-09-19#19 Sep 2022",
						"intro": "One thing that I notice repeatedly is people building bridges instead of shouting at each other from their own islands. They arrive with open minds, ready to share and listen, ready to build a web with many winners.",
						"link": "https://blog.holochain.org/the-dweb-is-an-ensemble-piece/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The DWeb Is An Ensemble Piece",
					"wordpress_id": 1222
				},
				{
					"acf": {
						"author": "Paul Lindner",
						"date": "2022-09-15#15 Sep 2022",
						"intro": "Once upon a time in a Mendocino Redwood Forest a slice of humanity decided to camp together and find ways to make technology work better for people.  I had the good fortune to thrive and soak in this environment.",
						"link": "https://1500wordmtu.com/2022/decentralized-web-camp-2022",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralized Web Camp 2022",
					"wordpress_id": 1225
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-09-09#9 Sep 2022",
						"intro": "For exactly 3 years, once each month, the Redecentralize Digest has delivered summaries of publications, updates and upcoming events. All things come to an end, including this digest.",
						"link": "https://redecentralize.org/redigest/2022/kthxbye/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — kthxbye",
					"wordpress_id": 1229
				},
				{
					"acf": {
						"author": "Heather Vescent",
						"date": "2022-09-09#9 Sep 2022",
						"intro": "\\\"It was clear from the people I met, our conversations and the great sessions, that decentralization isn’t a future concept.\\\" Storj's Heather Descent on DWeb Camp 2022.",
						"link": "https://www.storj.io/blog/storj-at-dweb-camp-my-highlights-from-the-coolest-event-in-decentralization",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Storj at DWeb Camp &#8211; My Highlights from the Coolest Event in Decentralization",
					"wordpress_id": 1224
				},
				{
					"acf": {
						"author": "TyChi",
						"date": "2022-08-31#31 Aug 2022",
						"intro": "At the Heartwood Chapel of Camp Navarro, where internet was intermittent, but connections were bountiful— a discussion began in a local-only, offline-first, serverless-multiplayer fashion.",
						"link": "https://musings.tychi.me/a-connection-of-peers-gathered-in-the-wood",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A connection of peers gathered in the wood",
					"wordpress_id": 1257
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2022-08-25#25 Aug 2022",
						"intro": "How do we ensure that the decentralized web fulfills its potential to create a better web for all? The first step is to recognize that there are many people around the world who are already doing this work.",
						"link": "http://blog.archive.org/2022/08/25/introducing-the-2022-dweb-fellows/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Introducing the 2022 DWeb Fellows",
					"wordpress_id": 1226
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-07-03#3 Jul 2022",
						"intro": "In this issue:\\r\\n• Give up GitHub\\r\\n• Chrome Alone\\r\\n• Miscellaneous discoveries\\r\\n• Notable events coming up",
						"link": "https://redecentralize.org/redigest/2022/06/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — June 2022",
					"wordpress_id": 1204
				},
				{
					"acf": {
						"author": "Nathan Schneider",
						"date": "2022-06-07#7 Jun 2022",
						"intro": "The same crypto tools presently being used to bypass the international order could instead become the means of architecting a better one.",
						"link": "https://www.noemamag.com/how-we-can-encode-human-rights-in-the-blockchain/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "How We Can Encode Human Rights In The Blockchain",
					"wordpress_id": 1198
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-06-07#7 Jun 2022",
						"intro": "In this issue:\\r\\n\\r\\n• PublicSpaces conference happened\\r\\n• The decentralised elephant in the room\\r\\n• Subsidiarity, not redundancy\\r\\n• Fair Play?\\r\\n• Anil on how to fix the internet\\r\\n• Miscellaneous discoveries\\r\\n• Notable events coming up",
						"link": "https://redecentralize.org/redigest/2022/05/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — May 2022",
					"wordpress_id": 1197
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2022-05-17#17 May 2022",
						"intro": "What matters in this discussion – in any discussion over a technology really – is who’s designing it, who controls it, and who stands to benefit?",
						"link": "https://hypha.coop/dripline/debate-over-dweb-vs-web3/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Debate Over DWeb vs. Web3 &#038; The Decentralized Elephant in the Room",
					"wordpress_id": 1190
				},
				{
					"acf": {
						"author": "Caralee Adams",
						"date": "2022-05-13#13 May 2022",
						"intro": "The pending sale of Twitter to Elon Musk has generated a buzz about the future of social media and just who should control our data. Wendy Hanamura, director of partnerships at the Internet Archive, moderated an online discussion “Goodbye Facebook, Hello Decentralized Social Media?” about the opportunities and dangers ahead.",
						"link": "https://blog.archive.org/2022/05/13/goodbye-facebook-hello-decentralized-social-media/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Goodbye Facebook. Hello Decentralized Social Media?",
					"wordpress_id": 1189
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-05-09#9 May 2022",
						"intro": "In this issue:\\r\\n• Twitter’s indecency\\r\\n• Bluesky opens up\\r\\n• EU Voice & Video on the Fediverse\\r\\n• A Declaration for the Future of the Internet\\r\\n• Miscellaneous discoveries\\r\\n• Notable events coming up",
						"link": "https://redecentralize.org/redigest/2022/04/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — April 2022",
					"wordpress_id": 1174
				},
				{
					"acf": {
						"author": "Jennie Rose Halperin",
						"date": "2022-04-21#21 Apr 2022",
						"intro": "How many passwords do you have saved, and how many of them are controlled by a large, corporate platform instead of by you? The “Keeping your Personal Data Personal: How Decentralized Identity Drives Privacy” session started with that provocative question to illustrate the potential of smart wallets.",
						"link": "https://blog.archive.org/2022/04/21/whats-in-your-smart-wallet-keeping-your-personal-data-personal/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "What’s in Your Smart Wallet? Keeping your Personal Data Personal",
					"wordpress_id": 1171
				},
				{
					"acf": {
						"author": "Mike Masnick",
						"date": "2022-04-15#15 Apr 2022",
						"intro": "Musk doesn’t realize that the people who have actually worked on content moderation for years have been getting the curve to move in the right direction, before hitting some sort of ceiling. And he wants to take them all the way back to the ground floor for no reason other than he doesn’t seem to recognize any of the work that’s already been done.",
						"link": "https://www.techdirt.com/2022/04/15/elon-musk-demonstrates-how-little-he-understands-about-content-moderation/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Elon Musk Demonstrates How Little He Understands About Content Moderation",
					"wordpress_id": 1169
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-04-08#8 Apr 2022",
						"intro": "In this issue:\\r\\n\\r\\n• EU’s DMA hammered out\\r\\n• Ethereum 8 years later\\r\\n• Miscellaneous discoveries\\r\\n• Notable events coming up",
						"link": "https://redecentralize.org/redigest/2022/03/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — March 2022",
					"wordpress_id": 1155
				},
				{
					"acf": {
						"author": "Caralee Adams",
						"date": "2022-03-11#11 Mar 2022",
						"intro": "Storing digital assets presents diverse challenges: attacks by hackers, deep fakes, censorship, and the unforeseeable cost of storing bits for centuries. Could a new approach—decentralized storage—offer some solutions? That was the focus of an Internet Archive webinar on February 24.",
						"link": "https://blog.archive.org/2022/03/11/in-an-ever-expanding-library-using-decentralized-storage-to-keep-your-materials-safe/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "In an Ever-Expanding Library, Using Decentralized Storage to Keep Your Materials Safe",
					"wordpress_id": 1145
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-03-06#6 Mar 2022",
						"intro": "The Redecentralize Digest for February, with in this issue:\\r\\n• Interop remedies\\r\\n• The EU’s Data Act\\r\\n• Open Tech Will Save Us, again\\r\\n• DWeb Camp ahead: save the date\\r\\n• Miscellaneous discoveries\\r\\n• Notable events coming up",
						"link": "https://redecentralize.org/redigest/2022/02/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — February 2022",
					"wordpress_id": 1092
				},
				{
					"acf": {
						"author": "Caralee Adams",
						"date": "2022-02-15#15 Feb 2022",
						"intro": "A series of six workshops called “Imagining a Better Online World: Exploring the Decentralized Web” kicked off on January 27 with an introductory session establishing some common vocabulary for this new approach to digital infrastructure.",
						"link": "https://blog.archive.org/2022/02/15/the-decentralized-web-an-introduction/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Decentralized Web: An Introduction",
					"wordpress_id": 1147
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-02-06#6 Feb 2022",
						"intro": "In this issue:\\r\\n\\r\\n• FOSDEM happened\\r\\n• Moxie on Web3\\r\\n• Paul on individualism & collectivism\\r\\n• Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2022/01/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — January 2022",
					"wordpress_id": 1061
				},
				{
					"acf": {
						"author": "Internet Archive, DWeb, Library Futures, the Metropolitan New York Library Council",
						"date": "2022-01-27#27 Jan 2022",
						"intro": "In this series of six workshops, “Imagining a Better Online World: Exploring the Decentralized Web,” we explore the ways in which moving to decentralized technologies may enhance your privacy, empower you to control your own data, and resist censorship. ",
						"link": "https://getdweb.net/dweb-webinar-series/",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Imagining a Better Online World: Exploring the Decentralized Web",
					"wordpress_id": 1106
				},
				{
					"acf": {
						"author": "Taeyoon Choi ",
						"date": "2022-01-19#19 Jan 2022",
						"intro": "Since it was invented in 1989, the World Wide Web has become both the global standard and the building block for tech products and platforms. But its success came with limitations and growing concerns around the centralization of power among the small clusters of giant tech corporations. Decentralized Web (DWeb) technologies are alternatives to the contemporary World Wide Web.",
						"link": "https://www.deemjournal.com/stories/other-networks",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Other Networks: Taeyoon Choi on Infrastructure and Equity on the Decentralized Web",
					"wordpress_id": 1164
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2022-01-04#4 Jan 2022",
						"intro": "In this issue:\\r\\n\\r\\n• Web3, DWeb, Web0…?\\r\\n• Self-Certifying Web Protocols\\r\\n• Avoiding Internet Centralization\\r\\n• Exploring the Decentralized Web\\r\\n• Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/12/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — December 2021",
					"wordpress_id": 1021
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-12-06#6 Dec 2021",
						"intro": "In this issue:\\r\\n\\r\\n• A declaration of interdependence\\r\\n• Whose Web3?\\r\\n• Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/11/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — November 2021",
					"wordpress_id": 1020
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-11-03#3 Nov 2021",
						"intro": "In October’s Redecentralize Digest:\\r\\n • What to get right first to protect human rights in ‘Web3’\\r\\n • DWeb meetup (tomorrow!)\\r\\n • Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/10/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — October 2021",
					"wordpress_id": 1011
				},
				{
					"acf": {
						"author": "Joshua Tan",
						"date": "2021-10-25#25 Oct 2021",
						"intro": "Updates on projects and discussions taking place across Metagov’s various working groups.",
						"link": "https://metagov.substack.com/p/metagov-news-1-oct-2021?s=r",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Metagov News #1",
					"wordpress_id": 1186
				},
				{
					"acf": {
						"author": "Karissa McKelvey",
						"date": "2021-10-11#11 Oct 2021",
						"intro": "This talk offers an alternative data model for structuring identities and relationships that is resistant to phishing, impersonation, and machine-in-the-middle attacks — without sacrificing usability. ",
						"link": "https://www.youtube.com/watch?v=5ClLkuaoE-o",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Prevent Phishing and Impersonation",
					"wordpress_id": 1152
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-10-05#5 Oct 2021",
						"intro": "In this issue:\\r\\n• Cryptoeconomics as a Limitation on Governance\\r\\n• Ecological awareness\\r\\n• Backchannel petnames\\r\\n• New Public & Unfinished\\r\\n• Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/09/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — September 2021",
					"wordpress_id": 998
				},
				{
					"acf": {
						"author": "Rebecca MacKinnon",
						"date": "2021-10-01#1 Oct 2021",
						"intro": "Five things I wish Web2 had addressed early to protect human rights. Rebecca’s essay takes a page of history to outline missed opportunities from Web2 that we should not miss as we embark on the next chapter of the internet. Her chosen lens, human rights, is fascinating because it showcases the most ambitious goals the internet might accomplish and also where it has failed with breathless technical solutions. ",
						"link": "https://www.starlinglab.org/what-to-get-right-first/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "What to get right first",
					"wordpress_id": 1007
				},
				{
					"acf": {
						"author": "Vitalik Buterin",
						"date": "2021-09-26#26 Sep 2021",
						"intro": "Vitalik Buterin in response to Nathan Schneider's recommendations for governance based on cryptoeconomics.",
						"link": "https://vitalik.ca/general/2021/09/26/limits.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "On Nathan Schneider on the limits of cryptoeconomics",
					"wordpress_id": 1188
				},
				{
					"acf": {
						"author": "Amelia Winger-Bearskin, Eli Pariser",
						"date": "2021-09-23#23 Sep 2021",
						"intro": "An interview with scholar, artist, and hacker Amelia Winger-Bearskin, on decentralized storytelling and turning ideas into rhizomes for future generations.",
						"link": "https://newpublic.org/article/1649/decentralized-storytelling-from-native-tradition-to-the-metaverse",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralized storytelling, from Native tradition to the metaverse",
					"wordpress_id": 1185
				},
				{
					"acf": {
						"author": "Josh Kramer",
						"date": "2021-09-23#23 Sep 2021",
						"intro": "This visual guide, based on Nathan Schneider’s paper “Decentralization: An Incomplete Ambition,” describes some of the more notable forms of decentralized networks.",
						"link": "https://newpublic.org/article/1668/a-visual-guide-to-decentralization",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A visual guide to decentralization",
					"wordpress_id": 1184
				},
				{
					"acf": {
						"author": "Shraddha Goled",
						"date": "2021-09-20#20 Sep 2021",
						"intro": "In 2018, the World Wide Web inventor Tim Berners-Lee and a group of 800 web builders met in San Francisco to discuss how to circumvent the internet gatekeepers like Google and Facebook at the Decentralised Web Summit, hosted by Internet Archive. The demand was a decentralised web, which isn’t a new concept but has gained much popularity after John Snowden’s revelations, the Cambridge Analytica fiasco, and others. After almost three decades, the evolution of the internet is standing at the threshold of its 3.0 version. Berners-Lee had earlier predicted a Semantic Web, a version that would be autonomous, intelligent, and open. Instead, web 3.0 seems to check all the boxes.",
						"link": "https://analyticsindiamag.com/web-3-0-handing-ownership-of-data-back-to-the-users/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Web 3.0: Handing Ownership Of Data Back To The Users",
					"wordpress_id": 995
				},
				{
					"acf": {
						"author": "Kelsey Breseman",
						"date": "2021-09-20#20 Sep 2021",
						"intro": "Most articles you’ll find about this discuss cryptocurrency and NFTs, but our use case of decentralized and highly duplicated file storage isn’t immune. Aren’t we asking for more files to be stored on more servers, with more aggregate uptime and thus more energy use? In this context, do we now need to protect the environment more directly from the decentralized web?",
						"link": "https://blog.archive.org/2021/09/20/ecological-awareness-for-the-decentralized-web/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-principle-05.png"
							}
						}
					},
					"title": "Ecological Awareness for the Decentralized Web",
					"wordpress_id": 983
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-09-05#5 Sep 2021",
						"intro": "In this issue:\\r\\n\\r\\n• Human rights are not a bug\\r\\n• Appeals to prevent the next Google in the EU, and create “full stack” public media in the US\\r\\n• Apple’s controversial step towards making iPhones police their owners\\r\\n• Other tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/08/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — August 2021",
					"wordpress_id": 976
				},
				{
					"acf": {
						"author": "Coraline Ada Ehmke",
						"date": "2021-09-03#3 Sep 2021",
						"intro": "Realizing the potential of the web to democratize the advance of human knowledge while preserving cultural autonomy and promoting universal human rights requires more than a begrudging (and often patronizing) nod to “global perspectives” interpreted through the lens of the Silicon Valley ethos. Achieving just outcomes requires actively prioritizing both equal access and equitable participation across social and cultural boundaries.",
						"link": "https://blog.archive.org/2021/09/03/the-sacred-geometry-of-respect-trust-and-equity/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-principle-03.png"
							}
						}
					},
					"title": "The Sacred Geometry of Respect, Trust, and Equity",
					"wordpress_id": 980
				},
				{
					"acf": {
						"author": "Nathan Schneider",
						"date": "2021-08-29#29 Aug 2021",
						"intro": "In this paper, Nathan Schneider highlights considerations for designers to respond to limitations that cryptoeconomic governance faces. He recommends enveloping cryptoeconomics within forms of politics capable of seeing beyond economic metrics for human flourishing and the common good.",
						"link": "https://osf.io/wzf85/?view_only=a10581ae9a804aa197ac39ebbba05766",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Cryptoeconomics as a Limitation on Governance",
					"wordpress_id": 1187
				},
				{
					"acf": {
						"author": "BowtiedDevil",
						"date": "2021-08-25#25 Aug 2021",
						"intro": "Not your keys, not your coins. In the crypto world, this is an essential truth. Even if you’re not an expert on private-public key cryptography, you intuitively understand that allowing someone else to control your assets is a losing move. Communication is the same. Not your keys, not your contacts! Fortunately, there are communication protocols that provide strong encryption. ",
						"link": "https://bowtieddevil.com/post/secure-communications-with-matrix/",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Secure Communications with Matrix",
					"wordpress_id": 992
				},
				{
					"acf": {
						"author": "Vitalik Buterin",
						"date": "2021-08-22#22 Aug 2021",
						"intro": "When a seller wants to sell a fixed supply of an item that is in high (or uncertain and possibly high) demand, one choice that they often make is to set a price significantly lower than what \\\"the market will bear\\\". The result is that the item quickly sells out, with the lucky buyers being those who attempted to buy first. This has happened in a number of situations within the Ethereum ecosystem, notably NFT sales and token sales / ICOs. But this phenomenon is much older than that; concerts and restaurants frequently make similar choices, keeping prices cheap and leading to seats quickly selling out or buyers waiting in long lines.",
						"link": "https://vitalik.ca/general/2021/08/22/prices.html",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Alternatives to selling at below-market-clearing prices for achieving fairness (or community sentiment, or fun)",
					"wordpress_id": 990
				},
				{
					"acf": {
						"author": "Toby Shorin, Laura Lotti, Aaron Z. Lewis, Joanna Pope, Maria Gomez",
						"date": "2021-08-20#20 Aug 2021",
						"intro": "Other Internet received funding from Uniswap Grants Program to conduct an ethnography of its Discord, with the goal of exploring how off-chain governance has evolved almost a year after the introduction of UNI. Our research was guided by questions such as: what are the barriers to greater user participation? How can the process by which informal ideas become official governance proposals be improved? What does it look like to have a treasury managed by a large group of users distributed across multiple platforms? How might collective decision-making work when each communication interface enforces its own unique norms and culture? This is the first in a series of research reports on off-chain governance in the crypto ecosystem.",
						"link": "https://otherinter.net/research/uniswap-offchain-report/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Uniswap Research Report: Discord, Governance, Community",
					"wordpress_id": 991
				},
				{
					"acf": {
						"author": "Rae McKelvey",
						"date": "2021-08-17#17 Aug 2021",
						"intro": "Interoperability makes email the most popular and effective social network around the globe – but most of the web doesn’t work like email. The ACCESS Act, a recently introduced US law, would potentially change that by allowing users to more easily port their data to other services and force large platforms to be interoperable. We take a look at four compelling reasons why your team should design for interoperability: growth, cost, innovation, and user safety.",
						"link": "https://simplysecure.org/blog/design-for-interoperability-why-designers-should-pay-attention-to-the-access-act/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Design for Interoperability: Why Designers Should Pay Attention to the ACCESS Act",
					"wordpress_id": 988
				},
				{
					"acf": {
						"author": "Vitalik Buterin",
						"date": "2021-08-16#16 Aug 2021",
						"intro": "One of the important trends in the blockchain space over the past year is the transition from focusing on decentralized finance (DeFi) to also thinking about decentralized governance (DeGov). While the 2020 is often widely, and with much justification, hailed as a year of DeFi, over the year since then the growing complexity and capability of DeFi projects that make up this trend has led to growing interest in decentralized governance to handle that complexity.",
						"link": "https://vitalik.ca/general/2021/08/16/voting3.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Moving beyond coin voting governance",
					"wordpress_id": 989
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-07-05#5 Jul 2021",
						"intro": "In this digest: Cross-linking your accounts • All your domain are belong to US • Paul’s pivots • Misc tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/06/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — June 2021",
					"wordpress_id": 944
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2021-07-02#2 Jul 2021",
						"intro": "InterRep started from the high level goal of making reputations on centralized social platforms more accessible to web3 apps, while preserving privacy more than public attestations, and executed on a simple solution: use a centralized server to act as a bridge.",
						"link": "https://jaygraber.medium.com/introducing-interrep-255d3f56682",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Introducing InterRep",
					"wordpress_id": 949
				},
				{
					"acf": {
						"author": "Paul Frazee",
						"date": "2021-06-27#27 Jun 2021",
						"intro": "I’ve always preferred P2P over blockchains, though I see them as parallel technologies rather than competitors. I’ve been concerned about blockchains’ feasibility; Ethereum successfully adopting Proof-of-Stake will be a big step toward longevity in my mind. Assuming it does survive and thrive, I expect blockchains to trend towards payments, global agreement (names), financial systems (exchanges), and contractual systems (DAOs).",
						"link": "https://paulfrazee.medium.com/productizing-p2p-bff5aed95f6a",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Productizing P2P",
					"wordpress_id": 967
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-06-22#22 Jun 2021",
						"intro": "Our featured speaker at the June DWeb Meetup was Nathan Schneider, an author, professor of media studies at the University of Colorado Boulder, and Director of the Media Enterprise Design Lab. ",
						"link": "https://blog.archive.org/2021/06/22/dweb-meetup-june-2021-latest-from-the-dweb-ecosystem/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Meetup June 2021 — Latest from the DWeb Ecosystem",
					"wordpress_id": 970
				},
				{
					"acf": {
						"author": "Paul Frazee",
						"date": "2021-06-14#14 Jun 2021",
						"intro": "Around the beginning of this year, I started on a new project called CTZN. It was a new attempt at decentralized Twitter that grew out of some ideas I had bouncing in my head.",
						"link": "https://paulfrazee.medium.com/building-in-the-open-70ac9dccf1aa",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Building in the Open",
					"wordpress_id": 968
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-06-02#2 Jun 2021",
						"intro": "In this digest:\\r\\n\\r\\n• DWeb meetup (today!)\\r\\n• Reimagining the Internet\\r\\n• Matrix Spaces\\r\\n• Misc tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/05",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — May 2021",
					"wordpress_id": 919
				},
				{
					"acf": {
						"author": "Nathan Schneider",
						"date": "2021-05-27#27 May 2021",
						"intro": "The DWeb Principles call for “distributed benefits.” Companies like Amazon remind us why. The people contributing their work, their data, and their imagination to make technology valuable should receive value in return.",
						"link": "https://blog.archive.org/2021/05/27/distribute-commons-not-commodities/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-principle-02-for-blog.jpg"
							}
						}
					},
					"title": "Distribute Commons, Not Commodities",
					"wordpress_id": 922
				},
				{
					"acf": {
						"author": "Jay Carpenter",
						"date": "2021-05-26#26 May 2021",
						"intro": "Central Bank Digital Currencies (CBDCs) are being explored and launched by many countries around the world. DWeb Arizona's Desert Blockchain held a virtual meetup to discuss the various implications of CBDCs.\\r\\n",
						"link": "https://www.youtube.com/watch?v=IeKHDu4hzP0",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "VIDEO &#8211; Desert Blockchain Meetup: Central Bank Digital Currencies",
					"wordpress_id": 931
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-05-17#17 May 2021",
						"intro": "Mai Ishikawa Sutton, lead organizer of DWeb Projects with the Internet Archive and cofounder and editor of COMPOST, an online zine about the digital commons, discusses what the distributed web and DWeb are, community principles as an organizing tool, and the ways decentralization is a verb not a noun.",
						"link": "https://logicmag.io/distribution/from-the-bottom-to-the-top-mai-ishikawa-sutton-on-the-decentralized-web/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "From the Bottom to the Top: Mai Ishikawa Sutton on the Decentralized Web",
					"wordpress_id": 987
				},
				{
					"acf": {
						"author": "Matthew Hodgson",
						"date": "2021-05-17#17 May 2021",
						"intro": "As many know, over the years we've experimented with how to let users locate and curate sets of users and rooms in Matrix. Back in Nov 2017 we added 'groups' (aka 'communities') as a custom mechanism for this - introducing identifiers beginning with a + symbol to represent sets of rooms and users, like +matrix:matrix.org.",
						"link": "https://matrix.org/blog/2021/05/17/the-matrix-space-beta",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Matrix Space Beta!",
					"wordpress_id": 925
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-05-11#11 May 2021",
						"intro": "At the May 2021 DWeb Meetup, we heard from three artists and a technologist, offering differing perspectives about the potential and pitfalls of this new technological boom.",
						"link": "https://blog.archive.org/2021/05/11/dweb-meetup-may-2021-nfts-hope-or-hype-of-art/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-eventbrite-cover-NFT-03.jpg"
							}
						}
					},
					"title": "DWeb Meetup May 2021 — NFTs: Hope or Hype of Art?",
					"wordpress_id": 862
				},
				{
					"acf": {
						"author": "Serisa",
						"date": "2021-05-06#6 May 2021",
						"intro": "Let’s talk about social media. Since the world first became familiar with the name Edward Snowden, people have become more concerned about internet privacy. Now, along with concerns about government surveillance, a growing number of Americans are becoming concerned with companies tracking their movements on the web and filing away their data.",
						"link": "https://niminae.medium.com/what-is-decentralized-social-media-bf183d118356",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "What is Decentralized Social Media?",
					"wordpress_id": 928
				},
				{
					"acf": {
						"author": "Danny O'Brien",
						"date": "2021-05-06#6 May 2021",
						"intro": "The word “internet” has been so effectively hijacked by its most dystopian corners that it’s grown harder to even refer to this older element of online life, let alone bring it back into the forefront of society’s consideration.",
						"link": "https://www.eff.org/deeplinks/2021/05/introducing-public-interest-internet",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Introducing the Public Interest Internet",
					"wordpress_id": 926
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-05-05#5 May 2021",
						"intro": "This is a list of articles and research papers related to non-fungible tokens (or NFTs), prepared ahead of the Decentralized Web Meetup in May 2021.",
						"link": "https://medium.com/decentralized-web/dweb-meetup-may-2021-nft-reading-list-5bbdf04d0217",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "DWeb Meetup May 2021 — NFT Reading List",
					"wordpress_id": 861
				},
				{
					"acf": {
						"author": "Aether",
						"date": "2021-04-29#29 Apr 2021",
						"intro": "Last week (shh, yes last week) we were talking about how the only long-term viable mode of operation for an online community of sufficient size is one that of a sovereign state where the users are citizens who consent to the actions of that state. This meant citizens withholding consent without being kicked out would be able to control how the platform works.",
						"link": "https://aether.app/blog/2021-04-29-death-and-life-of-great-online-cities/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/london-burning.jpg"
							}
						}
					},
					"title": "aether:blog – The death and life of great online cities",
					"wordpress_id": 857
				},
				{
					"acf": {
						"author": "Ben Werdmüller",
						"date": "2021-04-23#23 Apr 2021",
						"intro": "I’ve been having a lot of really inspiring conversations about decentralization lately. Decentralization doesn’t require the blockchain - and pre-dates it - but the rise of blockchain technologies have allowed more people to become comfortable with the idea and why it’s valuable.",
						"link": "https://werd.io/2021/the-return-of-the-decentralized-web",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The return of the decentralized web",
					"wordpress_id": 950
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-04-22#22 Apr 2021",
						"intro": "The March 2021 DWeb Meetup featured a presentation by Marta Belcher, Board Chair of the new Filecoin Foundation (FF) & Filecoin Foundation for the Decentralized Web (FFDW). We also heard the latest from nine other projects across the DWeb Ecosystem.",
						"link": "https://blog.archive.org/2021/04/22/dweb-meetup-march-2021-latest-in-the-dweb-ecosystem/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/March2021_DWebSF.jpeg"
							}
						}
					},
					"title": "DWeb Meetup March 2021: Latest in the DWeb Ecosystem",
					"wordpress_id": 850
				},
				{
					"acf": {
						"author": "Valeria Ferrari",
						"date": "2021-04-19#19 Apr 2021",
						"intro": "In order to tackle the existing gap in shared semantics, this glossary converges the efforts of experts from various disciplines to build a shared vocabulary on the social, technical, economic, political aspects of decentralised, distributed or sovereign technologies.",
						"link": "https://policyreview.info/glossary/introducing-decentralised-technosocial-systems#editorial",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Introducing the glossary of decentralised technosocial systems",
					"wordpress_id": 927
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-04-04#4 Apr 2021",
						"intro": "In this digest:\\r\\n\\r\\n• The DOTS pattern library\\r\\n• Decentralisation explained with tomato cans\\r\\n• Public Spaces coalition\\r\\n• Compost magazine & Distributed Press\\r\\n• Misc tips & updates and events coming up",
						"link": "https://redecentralize.org/redigest/2021/03",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest — March 2021",
					"wordpress_id": 830
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-03-22#22 Mar 2021",
						"intro": "For a long time, we’ve felt that the growing, diverse, global community interested in building the decentralized Web needed an entry point. A portal into the events, concepts, voices, and resources critical to moving the Decentralized Web forward. ",
						"link": "https://blog.archive.org/2021/03/22/a-new-portal-for-the-decentralized-web-and-its-guiding-principles/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A New Portal for the Decentralized Web and its Guiding Principles",
					"wordpress_id": 818
				},
				{
					"acf": {
						"author": "Burak Nehbit",
						"date": "2021-03-16#16 Mar 2021",
						"intro": "Today, the argument I’d like to make relates to one of the two core tenets of Aether; moderation. Moderation is not just the control of content you see (i.e. the black box algorithm as other networks call it), but also the shape of the network as it is designed, what it assumes, what it avoids, what it prefers you do.",
						"link": "https://aether.app/blog/2021-03-16-oedipus-the-moderator/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "aether:blog &#8211; The fair moderator",
					"wordpress_id": 816
				},
				{
					"acf": {
						"author": "James Duncan",
						"date": "2021-03-11#11 Mar 2021",
						"intro": "Square One is a new podcast that gives newbies bite-size nuggets to help them understand decentralized tech and cryptocurrency networks. This 4-minute episode explores the significance of the Internet and how it uses protocols to transact data across servers around the globe. ",
						"link": "https://anchor.fm/square1/episodes/Conceptual-Introduction-to-the-Internet-esare0",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Square One: Conceptual Introduction to the Internet",
					"wordpress_id": 811
				},
				{
					"acf": {
						"author": "Iryna Nezhynska",
						"date": "2021-03-10#10 Mar 2021",
						"intro": "In order to create momentum, DWeb’s leaders wanted to give the community a brand that exhibits the aspirations of its members and one that engenders a feeling of belonging and unity among them.",
						"link": "https://nezhynska.com/work/dweb",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/iryna_dweb_blog-e1617052634848.png"
							}
						}
					},
					"title": "How can we foster a community that builds a decentralized web?",
					"wordpress_id": 819
				},
				{
					"acf": {
						"author": "DIF",
						"date": "2021-03-03#3 Mar 2021",
						"intro": "With all the talk about vaccines and Covid Credentials, it's easy to miss our community's regularly scheduled programming. February may have flown right by many of us, so take a minute to catch up on the steady work everyone else was doing at DIF: Sidetree's specification reaches v1 🎉, a flurry of fascinating (and recorded) research presentations elucidated today's landscape, tomorrow's, at various layers of the stack, the standards landscape and beyond 🤓, and there is mounting momentum for at least two new DIF groups 💪",
						"link": "https://blog.identity.foundation/newsletter-issue16/",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralized Identity Foundation &#8212; DIF Monthly March 2021",
					"wordpress_id": 797
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-03-01#1 Mar 2021",
						"intro": "February was short (as usual) but packed, counting two new websites for the decentralisation community. Covered in this digest:\\r\\n--The long-awaited DWeb community website launched, along with the “DWeb principles” declaration\\r\\n--The second new website, the DWeb event calendar\\r\\n--FOSDEM happened\\r\\n--Thoughtful writing about “user domestication” and open platforms\\r\\n--The CTZN social network, other updates, and upcoming events\\r\\n",
						"link": "https://redecentralize.org/redigest/2021/02",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8212; February 2021",
					"wordpress_id": 795
				},
				{
					"acf": {
						"author": "David Rosenthal",
						"date": "2021-02-25#25 Feb 2021",
						"intro": "A week ago yesterday the Internet Archive launched both a portal for the Decentralized Web (DWeb) at https://getdweb.net/, designed by a team led by Iryna Nezhynska of Jolocom, and a set of principles for the Decentralized Web, developed with much community input by a team led by Mai Ishikawa Sutton and John Ryan.",
						"link": "https://blog.dshr.org/2021/02/principles-for-decentralized-web.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Principles For The Decentralized Web",
					"wordpress_id": 786
				},
				{
					"acf": {
						"author": "Jay Carpenter",
						"date": "2021-02-24#24 Feb 2021",
						"intro": "VIDEO: Recently the Arizona Fintech Council was formed to introduce Fintech Startups to banks interested in collaborating with innovators.\\r\\nThis session examines how Fintech Startups from any country can connect with banks eager to explore what is possible with talented innovators.\\r\\n",
						"link": "https://www.patreon.com/posts/48022726",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "AZ Fintech Council &#8211; Opportunity for Startups",
					"wordpress_id": 809
				},
				{
					"acf": {
						"author": "Michael McCallister",
						"date": "2021-02-22#22 Feb 2021",
						"intro": "On February 18, 2021, the movement toward a decentralized web took another step forward. The people behind the Decentralized Web Summits and DWebCamp 2019 launched a new website for organizing and information: GetDWeb.net. ",
						"link": "https://metaverse.wordpress.com/2021/02/22/tech-of-by-for-people-decentralized-web/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Tech of, by, and for the people",
					"wordpress_id": 785
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2021-02-18#18 Feb 2021",
						"intro": "Since 2016, a global community of developers, organizers, entrepreneurs, and academics have gathered to share ideas and approaches to building a Decentralized Web. The DWeb they dreamt of would stand in stark contrast to today’s Web. The DWeb would enable people to have control over their own digital lives. In order to “lock the Web open,” DWeb infrastructure would be distributed itself, in ways that could be foolproof against concentrated control. \\r\\n\\r\\nWhat values do we share beyond giving people more control, and not being “centralized”? What specific features did DWeb projects need to have to be considered, well, DWeb? These were the underlying questions that motivated us to create these DWeb Principles.",
						"link": "https://blog.archive.org/2021/02/18/behind-the-scenes-of-the-decentralized-web-principles/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/WaybackWheel_DWebCamp2019.jpg"
							}
						}
					},
					"title": "Behind the Scenes of the Decentralized Web Principles",
					"wordpress_id": 801
				},
				{
					"acf": {
						"author": "Jon Henshaw",
						"date": "2021-02-10#10 Feb 2021",
						"intro": "The IPFS distributed web makes it easy to share files across the web from a home computer. Cloudflare can extend IPFS by allowing you to use a custom domain at no cost.",
						"link": "https://coywolf.pro/webmaster/ipfs-distributed-web-cloudflare-host-site/",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "How to leverage Cloudflare &#038; IPFS to host a free high-availability site",
					"wordpress_id": 783
				},
				{
					"acf": {
						"author": "Matthew Gould",
						"date": "2021-02-05#5 Feb 2021",
						"intro": "This article covers advantages, challenges to the Decentralized Web and proffers some solutions.",
						"link": "https://unstoppabledomains.com/blog/challenges-to-the-decentralized-web",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Challenges to the Decentralized Web",
					"wordpress_id": 1149
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-02-03#3 Feb 2021",
						"intro": "In this digest:\\r\\nWritings on centralisation and/versus democracy\\r\\nA decentralised social media ecosystem review\\r\\nA new publication, The Reboot\\r\\nBrave browser supports IPFS",
						"link": "https://redecentralize.org/redigest/2021/01",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8212; January 2021",
					"wordpress_id": 796
				},
				{
					"acf": {
						"author": "Karissa McKelvey",
						"date": "2021-02-01#1 Feb 2021",
						"intro": "How the federation of email plays a role in its stability and popularity, and how decentralized social platforms would benefit us all from a design first perspective. ",
						"link": "https://thereboot.com/breaking-tech-open-why-social-platforms-should-work-more-like-email/",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/Reboot_emailstory_V2-1-1.png"
							}
						}
					},
					"title": "Why Social Platforms Should Work More Like Email",
					"wordpress_id": 782
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2021-01-21#21 Jan 2021",
						"intro": "Report — This overview of the decentralized social ecosystem is structured by protocols, applications, and topics. The protocols and applications sections contain summaries of existing projects. ",
						"link": "https://matrix.org/_matrix/media/r0/download/twitter.modular.im/981b258141aa0b197804127cd2f7d298757bad20",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Bluesky: Ecosystem review",
					"wordpress_id": 753
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2021-01-21#21 Jan 2021",
						"intro": "In decentralized social networks, communities can set their own moderation policies, but what tools are available for enforcement? This post looks at technical approaches to decentralized moderation, and points out areas that could use more experimentation and research.",
						"link": "https://jaygraber.medium.com/designing-decentralized-moderation-a76430a8eab",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Designing decentralized moderation",
					"wordpress_id": 620
				},
				{
					"acf": {
						"author": "Benjamin Powers",
						"date": "2021-01-19#19 Jan 2021",
						"intro": "The InterPlanetary File System (IPFS), a decentralized peer-to-peer protocol designed to make the web less centralized and to avoid censorship, has been integrated into the desktop web browser Brave, making it the first browser to have a native IPFS integration.",
						"link": "https://www.coindesk.com/brave-browser-native-ipfs-integration-decentralized-web",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Brave Becomes First Browser to Offer Native IPFS Integration",
					"wordpress_id": 622
				},
				{
					"acf": {
						"author": "Kelsey Breseman, Data Together",
						"date": "2021-01-18#18 Jan 2021",
						"intro": "Most of our data and information is controlled by a handful of companies. How did this come to be, what are examples of responsible and irresponsible holding of this power, and how do we imagine we might slip the trap of data monopolies? This discussion features voices from academia, nonprofits, and technologists around the problem of centralized data.",
						"link": "https://datatogether.org/posts/09_data_monopolies/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Data Together Discussion — Data Monopolies",
					"wordpress_id": 784
				},
				{
					"acf": {
						"author": "Michał “rysiek” Woźniak",
						"date": "2021-01-18#18 Jan 2021",
						"intro": "After the violent events at the US Capitol social media monopolists are finally waking up to the reality that centralisation is dangerous; with power over daily communication of hundreds of millions of users comes responsibility perhaps too big even for Big Tech.",
						"link": "https://redecentralize.org/blog/2021/01/18/centralization-is-a-danger-to-democracy.html",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Centralisation is a danger to democracy",
					"wordpress_id": 629
				},
				{
					"acf": {
						"author": "Lucas Matney",
						"date": "2021-01-15#15 Jan 2021",
						"intro": "This week, Twitter CEO Jack Dorsey finally responded publicly to the company’s decision to ban President Trump from its platform, writing that Twitter had “faced an extraordinary and untenable circumstance” and that he did not “feel pride” about the decision. In the same thread, he took time to call out a nascent Twitter-sponsored initiative called “bluesky,” which is aiming to build up an “open decentralized standard for social media” that Twitter is just one part of.",
						"link": "https://techcrunch.com/2021/01/15/twitters-vision-of-decentralization-could-also-be-the-far-rights-internet-endgame/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "TechCrunch: Twitter&#8217;s decentralized future",
					"wordpress_id": 798
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2021-01-02#2 Jan 2021",
						"intro": "Happy new month! A good moment to look back at the last month. In this digest we’ll cover: The EU’s new proposals for regulating 'gatekeeper' platforms; The Remote CCC conference and DWeb meetup; and Technology’s trade-offs discussed in “The Decentralized Web of Hate”.\\r\\n",
						"link": "https://redecentralize.org/redigest/2020/12",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; December 2020",
					"wordpress_id": 639
				},
				{
					"acf": {
						"author": "Kelsie Nabben",
						"date": "2020-12-21#21 Dec 2020",
						"intro": "Decentralised information infrastructure does not have a clearly defined “ethnography”, by which to describe its unique attributes. This piece draws on historical research on the ‘cypherpunk mailing list’ archives to form a descriptive basis of the unique attributes of decentralised information infrastructure for ethnographic studies. ",
						"link": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3752531",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "An Ethnography of Decentralised Information Infrastructure’: Adopting Cypherpunk Nomenclature",
					"wordpress_id": 793
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2020-12-10#10 Dec 2020",
						"intro": "Even amidst the COVID lock down, builders of the Decentralized Web have hit new milestones with their projects this year. At our last DWeb Meetup of 2020, we heard from a dozen projects about their breakthroughs, challenges, and roadmaps for the coming year.",
						"link": "https://blog.archive.org/2020/12/10/dweb-meetup-the-latest-in-the-dweb-ecosystem/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-eventbrite-The-latest-in-DWeb-SF-cover.png"
							}
						}
					},
					"title": "The Latest in the DWeb Ecosystem",
					"wordpress_id": 800
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-12-01#1 Dec 2020",
						"intro": "In the “Mapping Social Media” project of the Knight First Amendment institute, Ethan Zuckerman analyses the ‘logic’ of several types of social networks (for example ‘chat logic’, ‘civic logic’ or ‘crypto logic’), by comparing networks along five axes: their technology, revenue model, ideology, governance and affordances. ",
						"link": "https://redecentralize.org/redigest/2020/11",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; November 2020",
					"wordpress_id": 640
				},
				{
					"acf": {
						"author": "Ethan Zuckerman",
						"date": "2020-11-03#3 Nov 2020",
						"intro": "Evan Henshaw-Plath (aka Rabble), founder of Planetary.Social and member of Twitter's founding team, joins the podcast to talk about decentralized social media, how context collapse makes content moderation on platforms like Facebook and Twitter impossible, and building a platform that's safe for people like furries while keeping away people like neo-Nazis.",
						"link": "https://publicinfrastructure.org/podcast/03-evan-henshaw-plath",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Reimagining the Internet with Evan Henshaw-Plath of Planetary.Social",
					"wordpress_id": 619
				},
				{
					"acf": {
						"author": "Ethan Zuckerman",
						"date": "2020-11-03#3 Nov 2020",
						"intro": "As we’ve begun our work on mapping social media, several alternatives to “Facebook logic” have become clear. Mastodon is an example of a platform that falls under what we will call “decentralized” logic. This group of platforms uses decentralized technology such as federation or peer-to-peer protocols.",
						"link": "https://knightcolumbia.org/content/what-if-social-media-worked-more-like-email",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "What if Social Media Worked More Like Email?",
					"wordpress_id": 585
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-11-02#2 Nov 2020",
						"intro": "Self-sovereign identity and frictionless dystopia -- In recent years, self-sovereign identity (or SSI) has become a popular topic. Dozens of projects are inventing protocols that enable people to identify themselves online or to prove they possess specific credentials. ",
						"link": "https://redecentralize.org/redigest/2020/10",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; October 2020",
					"wordpress_id": 641
				},
				{
					"acf": {
						"author": "Emmi Bevensee",
						"date": "2020-10-29#29 Oct 2020",
						"intro": "This report looks at how hate movements are decentralizing using emerging technologies in ways that make them harder to combat. These technologies ask us critical questions about the future of society and the internet but also pose incredible potential to help us along our way.",
						"link": "https://rebelliousdata.com/p2p/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The Decentralized Web of Hate",
					"wordpress_id": 630
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-10-06#6 Oct 2020",
						"intro": "Follow us OFF Facebook -- We got a last-minute opportunity to host a workshop at the NGI Policy Summit last week, part of the European Union’s Next Generation Internet programme. ",
						"link": "https://redecentralize.org/redigest/2020/09",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; September 2020",
					"wordpress_id": 642
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2020-09-24#24 Sep 2020",
						"intro": "Many of us know that the Internet is broken, so how do we build something better? On September 22, DWeb San Francisco invited a panel of experts to share their views on the most viable paths forward. The panelists included author & EFF advisor Cory Doctorow, Matrix.org co-founder Amandine Le Pape, decentralized social media researcher Jay Graber, and TechDirt’s Mike Masnick. They covered a range of approaches — including technical, regulatory, and organizational — that could bring us towards a future where our networks are more resilient, participatory, and decentralized.",
						"link": "https://blog.archive.org/2020/09/24/dweb-panel-if-big-tech-is-toxic-how-do-we-build-something-better/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-eventbrite-SocialDilemma-SF-cover-1024x512-1.png"
							}
						}
					},
					"title": "DWeb Panel: If Big Tech Is Toxic, How Do We Build Something Better?",
					"wordpress_id": 803
				},
				{
					"acf": {
						"author": "David Rosenthal",
						"date": "2020-09-22#22 Sep 2020",
						"intro": "The Ecosystem Is Moving: Challenges For Distributed And Decentralized Technology is a talk by Moxie Marlinspike that anyone interested in the movement to re-decentralize the Internet should watch and think about. Marlinspike concludes \\\"I'm not entirely optimistic about the future of decentralized systems, but I'd also love to be proven wrong\\\".",
						"link": "https://blog.dshr.org/2020/09/moxie-marlinspike-on-decentralization.html#more",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "",
						"image": null
					},
					"title": "Moxie Marlinspike On Decentralization",
					"wordpress_id": 344
				},
				{
					"acf": {
						"author": "Nathan Schneider",
						"date": "2020-09-11#11 Sep 2020",
						"intro": "Lots of tech projects these days, especially crypto-networks, aspire to decentralization. Or their evangelists say they do, because they feel they need to. Decentralization is the new disruption—the thing everything worth its salt (and a huge ICO) is supposed to be doing.",
						"link": "https://hackernoon.com/decentralizing-everything-never-seems-to-work-2bb0461bd168",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*ubOOkWtA8DC04-IsA93aGw.jpeg",
						"image": null
					},
					"title": "What to do once you admit that decentralizing everything never seems to work",
					"wordpress_id": 156
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-09-01#1 Sep 2020",
						"intro": "Don’t shoot the messenger -- The Google Play app store decided that several Fediverse apps (at least Subway Tooter, Fedilab, Husky, MastoPane) will be removed from the store because they ‘promote violence or incite hatred’; thereby blaming the app for the forums people could connect to by knowingly entering such a forum’s address. ",
						"link": "https://redecentralize.org/redigest/2020/08",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; August 2020",
					"wordpress_id": 644
				},
				{
					"acf": {
						"author": "Juan Caballero",
						"date": "2020-08-18#18 Aug 2020",
						"intro": "There is no one single (or even central) place where decentralized identity technologies are being created. It is decentralized in its processes as well as its topography. Learning the “lay of the land” entails bouncing around a network more than surveying a city from a high vantage point. ",
						"link": "https://medium.com/decentralized-identity/where-to-begin-b2a55b898b3",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Where to begin?",
					"wordpress_id": 631
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2020-08-17#17 Aug 2020",
						"intro": "This repository explains key decentralized identity topics and components. It identifies that decentralized identities may be federated, user-centric, or self-sovereign and gives some examples.",
						"link": "https://gitlab.com/bluesky-community1/decentralized-ecosystem/-/blob/master/topics/identity.md",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Bluesky Community Decentralized Identity Repository",
					"wordpress_id": 1150
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2020-08-12#12 Aug 2020",
						"intro": "Four DWeb Camp 2019 Global Fellows shared how their community networks in South Africa, Brazil and India are adapting to COVID. Though they can connect to the World Wide Web, the fact that these networks maintain steady connectivity between local nodes with locally-hosted content is in many ways more valuable than their internet access.",
						"link": "https://medium.com/decentralized-web/community-networks-adapt-to-new-realities-under-covid-a-dweb-meetup-recap-d9367f74735a",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-eventbrite-one-year-after-DWebCamp-SF-cover.png"
							}
						}
					},
					"title": "Community Networks Adapt to New Realities Under COVID: A DWeb Meetup Recap",
					"wordpress_id": 345
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-08-01#1 Aug 2020",
						"intro": "Having started in July 2019, this monthly digest has been going for a full year now. Thanks for all the positive and constructive feedback so far! We hope to continue to be a helpful source of information and opinion for our readers, while looking for ways to improve it further and add value in other ways.",
						"link": "https://redecentralize.org/redigest/2020/07",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; July 2020",
					"wordpress_id": 645
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-07-01#1 Jul 2020",
						"intro": "Decentralization Off The Shelf (DOTS) is a new initiative by Simply Secure and friends to help developers and (UX) designers of decentralised software make better user-facing applications.",
						"link": "https://redecentralize.org/redigest/2020/06",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; June 2020",
					"wordpress_id": 646
				},
				{
					"acf": {
						"author": "Alexander Cobleigh",
						"date": "2020-06-29#29 Jun 2020",
						"intro": "How do you remove malicious participants from a chat? For a set of participants, what are the steps needed such that the malicious participant is no longer visible by anyone in the set? This work explores an approach to implementing a subjective, trust-based system.",
						"link": "https://cblgh.org/articles/trustnet.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "TrustNet: Trust-based Moderation Systems",
					"wordpress_id": 621
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-06-01#1 Jun 2020",
						"intro": "GDPR 2 years -- Two years after the EU’s General Data Protection Regulation went into effect, the teeth it was supposed to have are rarely used to bite, leaving much of the tech industry to apply its own wishful interpretations of the law.",
						"link": "https://redecentralize.org/redigest/2020/05",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; May 2020",
					"wordpress_id": 647
				},
				{
					"acf": {
						"author": "Benedict Lau",
						"date": "2020-05-08#8 May 2020",
						"intro": "This new website about DWeb Camp’s Meshnet documents how a group of enthusiastic people came together on that farm in California to build our own infrastructure of connectivity for a community of 450 people, and how this experiment may help other communities come online.",
						"link": "https://medium.com/decentralized-web/dweb-camp-meshnet-a-model-for-bringing-communities-online-b410c3dd4e5a",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*fAgzZ2itu3tRVNsQHzmENg.jpeg",
						"image": null
					},
					"title": "DWeb Camp Meshnet: A model for bringing communities online",
					"wordpress_id": 346
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-05-01#1 May 2020",
						"intro": "Contact tracing apps, continued -- Whereas in March some buzz was growing around bluetooth-based contact tracing apps to help contain Covid-19 (see previous digest), in April it almost felt like that was the only thing being written about.",
						"link": "https://redecentralize.org/redigest/2020/04",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; April 2020",
					"wordpress_id": 648
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-04-02#2 Apr 2020",
						"intro": "It seems hard to judge what is still relevant to digest, as the corona crisis changes daily life as we knew it and fills newspapers front to back; perhaps hindsight will show obvious omissions. Coincidentally, but with a great sense of timing, Ira joined the UK’s National Health Service this month — to work on data interoperability.",
						"link": "https://redecentralize.org/redigest/2020/03",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; March 2020",
					"wordpress_id": 649
				},
				{
					"acf": {
						"author": "David Smooke",
						"date": "2020-03-06#6 Mar 2020",
						"intro": "Trying to conceptualize the dWeb can really trip people up because it is so simple, that it’s easy to feel like you just don’t “get it,” like you’re missing something. But the reality is that the dWeb is a revisiting of the vintage internet in which the idea was simply to connect a bunch of computers around the globe.",
						"link": "https://hackernoon.com/dweb-at-large-simply-connect-a-bunch-of-computers-around-the-globe-dr-cazzell-5vyt32cu",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": null,
						"image_url": null,
						"image": null
					},
					"title": "dWeb at Large: “Simply Connect a Bunch of Computers Around the Globe” &#8211; Dr. Cazzell",
					"wordpress_id": 347
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-03-01#1 Mar 2020",
						"intro": "Friends, We have finally updated our website! An early spring cleaning of the cobwebs and archiving old material, and new content on the home and ‘about’ page. We are feeling proud :D",
						"link": "https://redecentralize.org/redigest/2020/02",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; February 2020",
					"wordpress_id": 650
				},
				{
					"acf": {
						"author": "Irina Bolychevsky",
						"date": "2020-02-07#7 Feb 2020",
						"intro": "From advocates, politicians and technologists, calls for doing something about big tech grow louder by the day. Yet concrete ideas are few or failing to reach the mainstream. This post covers what breaking up big tech would mean and why it’s not enough. I propose an open intervention that will give people a real choice and a way out of controlled walled gardens.",
						"link": "https://redecentralize.org/blog/2020/02/07/breaking-big-tech-open.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Instead of breaking up big tech, let’s break them open",
					"wordpress_id": 652
				},
				{
					"acf": {
						"author": "Gerben",
						"date": "2020-02-01#1 Feb 2020",
						"intro": "DWeb SF meetup explored decentralised social media -- The Internet Archive hosted an event with various presentations around decentralising social media. This post provides both the video recording and an excellent summary, so we will skip that here and merely quote one quip from John Ryan’s talk (which corresponds to his latest blog post): \\\"The answer to the walled garden problem is not more walled gardens.\\\"\\r\\n",
						"link": "https://redecentralize.org/redigest/2020/01",
						"voice_category": {
							"term_id": 19,
							"name": "Newsletter:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Redecentralize Digest &#8211; January 2020",
					"wordpress_id": 651
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2020-01-17#17 Jan 2020",
						"intro": "This post will provide a survey of social applications that have incorporated a blockchain into their design. Social applications that use a blockchain are decentralized to varying degrees.",
						"link": "https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": null,
						"image_url": null,
						"image": null
					},
					"title": "Blockchain Social Networks",
					"wordpress_id": 349
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2020-01-09#9 Jan 2020",
						"intro": "This post will provide an overview of some of the most popular federated and peer-to-peer social network designs. I’ll dive into detail on ActivityPub and ssb, and cover how their main implementations address the hard problems of identity, moderation, and monetization.",
						"link": "https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralized Social Networks",
					"wordpress_id": 350
				},
				{
					"acf": {
						"author": "John Patrick Ryan",
						"date": "2020-01-06#6 Jan 2020",
						"intro": "If you’re a disgruntled user of social media, or an entrepreneur or investor seeing opportunity in the wave of disenchantment, you’re wondering if alternative social media are important, or is “just” creating more walled gardens a bad idea? Instead, do decentralized intermediaries, such as Twitter’s BlueSky, ActivityPub and Digi.me, show the way forward?",
						"link": "https://medium.com/decentralized-web/decentralizing-ending-walled-gardens-6f0d4a8b4e98",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": null,
						"image_url": null,
						"image": null
					},
					"title": "Decentralizing: ending walled gardens",
					"wordpress_id": 351
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2019-12-26#26 Dec 2019",
						"intro": "A core component of decentralizing the web is how you store and share data. IPFS and Dat are distributed file systems that can provide data storage for the decentralized web. They can be thought of as essentially next-generation versions of bittorrent. This post will compare the high level and technical details.",
						"link": "https://medium.com/decentralized-web/comparing-ipfs-and-dat-8f3891d3a603",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*M7NooPRLcaJnHg8Tznyb_Q.png",
						"image": null
					},
					"title": "Comparing IPFS and Dat",
					"wordpress_id": 352
				},
				{
					"acf": {
						"author": "Jack Dorsey",
						"date": "2019-12-11#11 Dec 2019",
						"intro": "Twitter is funding a small independent team of up to five open source architects, engineers, and designers to develop an open and decentralized standard for social media. The goal is for Twitter to ultimately be a client of this standard.",
						"link": "https://twitter.com/jack/status/1204766078468911106",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": null,
						"image_url": null,
						"image": null
					},
					"title": "Twitter CEO Jack Dorsey&#8217;s Project Bluesky Announcement",
					"wordpress_id": 353
				},
				{
					"acf": {
						"author": "Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan",
						"date": "2019-10-23#23 Oct 2019",
						"intro": "The authors propose “local-first software”: a set of principles for software that include the ability to work offline and collaborate across multiple devices, while also improving the security, privacy, long-term preservation, and user control of data.",
						"link": "https://www.inkandswitch.com/local-first/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Local-first software: you own your data, in spite of the cloud",
					"wordpress_id": 1191
				},
				{
					"acf": {
						"author": "John Patrick Ryan",
						"date": "2019-09-30#30 Sep 2019",
						"intro": "There’s a rising tide of interest in re-thinking the World Wide Web, toward a decentralized model. This piece — but of course — does not attempt to create a definitive, centralized answer. Instead, this note offers a frame for considering the types of answers, and looks at some really good examples. The goal here: discuss. Take to conference or party, refine, revise, rinse, repeat.",
						"link": "https://medium.com/decentralized-web/why-decentralize-5d8e9dcedb2c",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*ix9UgxGHFwugyyG4nzqYvw.jpeg",
						"image": null
					},
					"title": "Why Decentralize?",
					"wordpress_id": 354
				},
				{
					"acf": {
						"author": "Mike Masnick",
						"date": "2019-08-21#21 Aug 2019",
						"intro": "This article proposes an entirely different approach—one that might seem counterintuitive but might actually provide for a workable plan that enables more free speech, while minimizing the impact of trolling, hateful speech, and large-scale disinformation efforts. As a bonus, it also might help the users of these platforms regain control of their privacy. And to top it all off, it could even provide an entirely new revenue stream for these platforms. That approach: build protocols, not platforms.",
						"link": "https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Protocols, Not Platforms: A Technological Approach to Free Speech",
					"wordpress_id": 592
				},
				{
					"acf": {
						"author": "Jolocom",
						"date": "2019-08-13#13 Aug 2019",
						"intro": "Looking to expand beyond the traditional confines of a tech conference, DWeb Camp was a chance to join other technologists, designers, writers, artists, and other creatives and dreamers for a four-day retreat to get re/connected and continue the conversation around creating the next generation of the Web — a decentralized Web 3.0, a web we deserve.",
						"link": "https://medium.com/decentralized-web/jolocom-dwebcamp-recap-d2db0881000a",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*v0yKFPOhJpmXUHi_eob2Tw.png",
						"image": null
					},
					"title": "DWeb Camp: building a web that we deserve",
					"wordpress_id": 593
				},
				{
					"acf": {
						"author": "Dr. Carley Corrado",
						"date": "2019-08-06#6 Aug 2019",
						"intro": "At DWeb Camp, this craving I’ve felt across industries for a decade of professional development was satiated delightfully with a shared set of values and playful engagement. They set the stage for ease of connection and conversations that matter.",
						"link": "https://medium.com/decentralized-web/dweb-camp-powered-by-play-new-paths-to-authentic-learning-4654347b0d41",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*Nw6KCTDWkmZTrsGwDRlf2A.jpeg",
						"image": null
					},
					"title": "DWeb Camp Powered by Play: New Paths to Authentic Learning",
					"wordpress_id": 594
				},
				{
					"acf": {
						"author": "Brandon D. Wallace",
						"date": "2019-08-04#4 Aug 2019",
						"intro": "The Internet Archive led DWeb Camp took place on the coastline of California, around 40 miles south of San Francisco — hosted by a majestic organic farm community focused on regenerative solutions. While previous DWeb events have occurred, not much was known about exactly what would unfold at what was ultimately a highly intentioned camp experience.",
						"link": "https://medium.com/decentralized-web/decentralized-webcamp-2019-experience-plan-systems-9cc5cde8d4b2",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*iXrZ7HE-aAARL7HkD0GGUA.jpeg",
						"image": null
					},
					"title": "Decentralized WebCamp 2019 Experience | PLAN Systems",
					"wordpress_id": 595
				},
				{
					"acf": {
						"author": "Jay Graber",
						"date": "2019-07-29#29 Jul 2019",
						"intro": "On the last night of the Decentralized Web Camp, I was hanging around outside after dinner when an older white-haired man walked past, shouting “Old timer’s circle starting soon! Everyone who’s been doing stuff with computers 30 years or more.” ",
						"link": "https://medium.com/decentralized-web/the-internets-old-guard-c10b0ff0fb8d",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*SuUu9KViRBEFJw6c2pY1vA.jpeg",
						"image": null
					},
					"title": "The Internet’s Old Guard",
					"wordpress_id": 597
				},
				{
					"acf": {
						"author": "Frances Sawyer",
						"date": "2019-07-21#21 Jul 2019",
						"intro": "Held on a farm near Pescadero, California, the first ever DWeb Camp brought together more than 375 campers from six continents to workshop, relax, build, and strengthen the community working on the decentralized web.",
						"link": "https://medium.com/decentralized-web/remembering-the-first-dweb-camp-july-2019-b96614636291",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "https://miro.medium.com/max/700/0*iCcSBSLr6V_TVicj",
						"image": null
					},
					"title": "Remembering the First DWeb Camp, July 2019",
					"wordpress_id": 596
				},
				{
					"acf": {
						"author": "Frances Sawyer",
						"date": "2019-07-18#18 Jul 2019",
						"intro": "I connected with Mary Lou Jepsen to talk about how she is currently thinking about the transformations happening in the technologies where she spends most of her time today and the possible implications of the decentralized web for privacy, healthcare, power, and society.",
						"link": "https://medium.com/decentralized-web/dweb-camp-profile-mary-lou-jepson-on-the-future-of-practical-telepathy-and-learning-from-pioneers-e8df05da0451",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*dD58krYkvYSzSyAsXe4ctQ.jpeg",
						"image": null
					},
					"title": "DWeb Camp Profile: Mary Lou Jepson on the Future of Practical Telepathy and Learning from Pioneers",
					"wordpress_id": 599
				},
				{
					"acf": {
						"author": "Shannon Wu",
						"date": "2019-07-18#18 Jul 2019",
						"intro": "Perhaps best known as the early CTO of Ripple, Stefan Thomas’s contributions to the decentralized web extend long before his rise to fame. With years of significant contributions to the open source, blockchain, and development communities, his vision for scaling open technology sets him apart",
						"link": "https://medium.com/decentralized-web/dweb-camp-profile-ripples-former-cto-stefan-thomas-loves-the-open-web-and-is-changing-the-de78787a127d",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*5gC9YwWj7FmdRg0iniPHEQ.jpeg",
						"image": null
					},
					"title": "DWeb Camp Profile: Ripple’s Former CTO Stefan Thomas",
					"wordpress_id": 598
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2019-07-17#17 Jul 2019",
						"intro": "DWeb Camp is about bringing the people behind decentralized technologies together, and reflect, as peers and co-creators, on how we shape the networks and applications we’re building. It’s about recognizing how personal and interpersonal dynamics need to be explored in the same way we experiment and build new networking technologies.",
						"link": "https://medium.com/decentralized-web/transforming-ourselves-to-transform-our-networks-f4511a3d7483",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*Mt-7FOr3baH3lux8Xi20Aw.png",
						"image": null
					},
					"title": "Transforming Ourselves to Transform Our Networks",
					"wordpress_id": 600
				},
				{
					"acf": {
						"author": "Mai Ishikawa Sutton",
						"date": "2019-07-16#16 Jul 2019",
						"intro": "We identified some of these remarkable social-tech innovators and have invited ten of them to join us at DWeb Camp. They are coming from all corners of the world to share their experience building decentralized networks and applications.",
						"link": "https://medium.com/decentralized-web/https-medium-com-decentralized-web-introducing-2019-dweb-camp-global-fellows-1fafe29c3c9f",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/1*g5UzI4TE_qRD3l2Go4DBHw.png",
						"image": null
					},
					"title": "Introducing the 2019 DWeb Camp Global Fellows",
					"wordpress_id": 603
				},
				{
					"acf": {
						"author": "Lawrence Wilkinson and Richard Whitt",
						"date": "2019-07-16#16 Jul 2019",
						"intro": "Summary of a conversation the authors led at the 2018 DWeb Summit on the topic of the language and terminology we use to talk about the Decentralized Web.",
						"link": "https://medium.com/decentralized-web/defining-our-terms-conversations-7a5f34261bba",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "url",
						"image_url": "https://miro.medium.com/max/700/0*JQDmDT-ZGshSC_6y",
						"image": null
					},
					"title": "“Defining Our Terms” Conversations",
					"wordpress_id": 602
				},
				{
					"acf": {
						"author": "Frances Sawyer",
						"date": "2019-07-16#16 Jul 2019",
						"intro": "...I spoke with Kelsey Breseman, a rockstar engineer and entrepreneur working to solve climate change, protect public access to scientific data, and build a better web.",
						"link": "https://medium.com/decentralized-web/getting-ready-for-dweb-camp-a-conversation-with-kelsey-breseman-be4e396c704d",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Getting Ready for DWeb Camp: A Conversation with Kelsey Breseman",
					"wordpress_id": 601
				},
				{
					"acf": {
						"author": "Wendy Hanamura",
						"date": "2019-07-14#14 Jul 2019",
						"intro": "The Decentralized Web is a concept. It’s a set of technologies. It’s a network of builders and designers and dreamers. What started with small gatherings in San Francisco, London, Los Angeles, Toronto and Berlin is growing into a global movement. ",
						"link": "https://medium.com/decentralized-web/branding-the-decentralized-web-8f3c9af1682c",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/DWeb-logo-story-black-for-voices.png"
							}
						}
					},
					"title": "Branding the Decentralized Web",
					"wordpress_id": 604
				},
				{
					"acf": {
						"author": "Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan",
						"date": "2019-04-01#1 Apr 2019",
						"intro": "In this article we propose “local-first software”: a set of principles for software that enables both collaboration and ownership for users. Local-first ideals include the ability to work offline and collaborate across multiple devices, while also improving the security, privacy, long-term preservation, and user control of data.",
						"link": "https://www.inkandswitch.com/local-first.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Local-first software: You own your data, in spite of the cloud",
					"wordpress_id": 605
				},
				{
					"acf": {
						"author": "Alek Tarkowski, Sophie Bloemen, & Paul Keller",
						"date": "2018-12-21#21 Dec 2018",
						"intro": "In the last decade, centralised and even monopolistic services have been built on top of the decentralised infrastructure of the Internet. Since these are all very large and often non-European commercial entities, the centralisation of control over the digital networks is a form of market capture of a resource that should be treated as a universal basic service that needs to be governed as a commons.",
						"link": "https://shared-digital.eu/decentralise-infrastructure/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/pie_infra-wide-1200.png",
						"image": null
					},
					"title": "Shared Digital Europe Principle: Decentralise infrastructure",
					"wordpress_id": 606
				},
				{
					"acf": {
						"author": "Sarah Friend",
						"date": "2018-12-10#10 Dec 2018",
						"intro": "(VIDEO) There is building movement to decentralize the web (or re-decentralize the web) with newer technologies, such as secure scuttlebutt, peer-to-peer file storage like dat or ipfs, and blockchain gaining popularity. Older technologies like mesh networking are enjoying a resurgence as well. Communities that engage with these technologies often frame decentralization as a moral good in and of itself - but to what extent has this claim been validated?",
						"link": "https://www.youtube.com/watch?v=9mRhvltGs8A",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "url",
						"image_url": "",
						"image": null
					},
					"title": "Decentralization and its Discontents",
					"wordpress_id": 607
				},
				{
					"acf": {
						"author": "Iryna Nezhynska",
						"date": "2018-10-05#5 Oct 2018",
						"intro": "A month ago, more than 750 tech minds interested in building the web we want — and the web we deserve — gathered at the old San Francisco Mint for DWeb Summit. While my dev team was busy running workshops, I joined the UX/UI session on Builders Day as a storyteller to later share with the world what puzzled our minds at the time.",
						"link": "https://jolocom.io/blog/looking-back-at-dweb-summit-ux-ui-workshop/",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": {
							"localFile": {
								"url": "/images/A02-hero-mob.png"
							}
						}
					},
					"title": "Looking back at DWeb Summit UX/UI workshop",
					"wordpress_id": 608
				},
				{
					"acf": {
						"author": "Irina Bolychevsky",
						"date": "2018-09-18#18 Sep 2018",
						"intro": "As the decentralisation movement grows, I consider the characteristics of decentralisation, what decentralisation is a tactic for, why and what work still needs to happen to re-decentralize the digital world.",
						"link": "https://medium.com/@shevski/how-decentralised-are-you-a6539eeb27ff",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "There’s more to decentralisation than blockchains and bitcoin",
					"wordpress_id": 609
				},
				{
					"acf": {
						"author": "Irina Bolychevsky",
						"date": "2018-08-18#18 Aug 2018",
						"intro": "As the decentralisation movement grows, I consider the characteristics of decentralisation, what decentralisation is a tactic for, why and what work still needs to happen to re-decentralize the digital world.",
						"link": "https://redecentralize.org/blog/2018/08/18/theres-more-to-decentralisation-than-blockchains-and-bitcoin.html",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "There’s more to decentralisation than blockchains and bitcoin",
					"wordpress_id": 653
				},
				{
					"acf": {
						"author": "David Cassel",
						"date": "2018-08-12#12 Aug 2018",
						"intro": "As August began, the non-profit Internet Archive convened the Decentralized Web Summit in San Francisco, promising appearances by “the creators and builders of the original Internet and World Wide Web, plus other developers of cutting-edge decentralized protocols and representatives of civil society, human rights and government from around the world.”",
						"link": "https://thenewstack.io/the-people-pushing-for-a-decentralized-web/",
						"voice_category": {
							"term_id": 10,
							"name": "Profile:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "The People Pushing for a Decentralized Web",
					"wordpress_id": 610
				},
				{
					"acf": {
						"author": "Brewster Kahle",
						"date": "2018-07-25#25 Jul 2018",
						"intro": "In preparation for the Decentralized Web Summit of 2018, Internet Archive founder, Brewster Kahle, wrote this rumination on the \\\"digital wave\\\" that is the Internet, leaving us forever altered in its wake. Here he and Frances Sawyer present a historic look at the different ways people have described the technical revolution through concepts, metaphors and imagery. Kahle writes, \\\"Maybe taken as a whole, or as a trajectory of portrayals, we might be able to see where the digital wave could lead—or should lead.\\\"",
						"link": "https://www.are.na/blog/reimagining-the-internet",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Are.na: Imagining the Internet: Explaining our Digital Transition",
					"wordpress_id": 789
				},
				{
					"acf": {
						"author": "Ola Kohut",
						"date": "2018-06-06#6 Jun 2018",
						"intro": "The time has come to take a step back and look at the big picture. Are efforts to decentralize the Web paying off, which aspects of decentralization are the most crucial as we move towards a mature Web 3.0, and on which goals can we all agree as we work towards improving the status quo?",
						"link": "https://medium.com/epicenterpodcast/decentralization-expectations-vs-reality-651ebe3b6b4c",
						"voice_category": {
							"term_id": 9,
							"name": "Flashback:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Decentralization: Expectations vs Reality",
					"wordpress_id": 611
				},
				{
					"acf": {
						"author": "Tom Simonite",
						"date": "2018-03-05#5 Mar 2018",
						"intro": "Proponents as varied as privacy activists and marquee venture capitalists talk about the decentralized internet as a kind of digital Garden of Eden that can restore the freedom and goodwill of the internet's early days. The argument goes that big tech companies have locked up our data and minds inside stockholder-serving platforms that crush competition and privacy.",
						"link": "https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "url",
						"image_url": "/images/baran_nets-FINAL.jpg",
						"image": null
					},
					"title": "The Decentralized Internet Is Here, With Some Glitches",
					"wordpress_id": 591
				},
				{
					"acf": {
						"author": "Ink and Switch",
						"date": "2018-02-28#28 Feb 2018",
						"intro": "Research and projects in DWeb and Beyond",
						"link": "https://www.inkandswitch.com/",
						"voice_category": {
							"term_id": 12,
							"name": "Guide:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Research and projects in DWeb and Beyond",
					"wordpress_id": 1153
				},
				{
					"acf": {
						"author": "Chris Dixon",
						"date": "2018-02-18#18 Feb 2018",
						"intro": "The internet is the ultimate software-based network, consisting of a relatively simple core layer connecting billions of fully programmable computers at the edge. Software is simply the encoding of human thought, and as such has an almost unbounded design space. ",
						"link": "https://onezero.medium.com/why-decentralization-matters-5e3f79f7638e",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Why Decentralization Matters",
					"wordpress_id": 632
				},
				{
					"acf": {
						"author": "Ruben Verborgh",
						"date": "2017-12-20#20 Dec 2017",
						"intro": "Decentralizing the Web means that people gain the ability to store their data wherever they want, while still getting the services they need. This requires major changes in the way we develop applications, as we migrate from a closed back-end database to the open Web as our data source.",
						"link": "https://ruben.verborgh.org/blog/2017/12/20/paradigm-shifts-for-the-decentralized-web/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Paradigm shifts for the decentralized Web",
					"wordpress_id": 633
				},
				{
					"acf": {
						"author": "Ruben Verborgh",
						"date": "2017-12-20#20 Dec 2017",
						"intro": "Ultimately, decentralization is about choice: we will choose where we store our data, who we give access to which parts of that data, which services we want on top of it, and how we pay for those. Nowadays, we are instead forced to accept package deals we cannot customize.",
						"link": "https://ruben.verborgh.org/blog/2017/12/20/paradigm-shifts-for-the-decentralized-web/",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "Paradigm shifts for the decentralized Web",
					"wordpress_id": 590
				},
				{
					"acf": {
						"author": "André Staltz",
						"date": "2017-12-18#18 Dec 2017",
						"intro": "I want to share with you our plan, which in short is: Build the mobile mesh Web that works with or without Internet access, to reach 4 billion people currently offline. To explain this plan, we need to realize that the Web can be independent from the Internet.",
						"link": "https://staltz.com/a-plan-to-rescue-the-web-from-the-internet.html",
						"voice_category": {
							"term_id": 8,
							"name": "Opinion:"
						},
						"thumbnail_type": "image",
						"image_url": null,
						"image": null
					},
					"title": "A plan to rescue the Web from the Internet",
					"wordpress_id": 589
				},
				{
					"acf": {
						"author": "Vitalik Buterin",
						"date": "2017-02-06#6 Feb 2017",
						"intro": "Thousands of hours of research, and billions of dollars of hashpower, have been spent for the sole purpose of attempting to achieve decentralization, and to protect and improve it, and when discussions get rivalrous it is extremely common for proponents of one protocol (or protocol extension) to claim that the opposing proposals are “centralized” as the ultimate knockdown argument. But there is often a lot of confusion as to what this word actually means.",
						"link": "https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274",
						"voice_category": {
							"term_id": 11,
							"name": "Analysis:"
						},
						"thumbnail_type": "url",
						"image_url": "",
						"image": null
					},
					"title": "The Meaning of Decentralization",
					"wordpress_id": 588
				}
			]
		},
		"allWordpressWpVoiceCategories": {
			"nodes": [{
					"acf": {
						"color": "#dcc6e0"
					},
					"wordpress_id": 11
				},
				{
					"acf": {
						"color": "#92c428"
					},
					"wordpress_id": 9
				},
				{
					"acf": {
						"color": "#ffd800"
					},
					"wordpress_id": 12
				},
				{
					"acf": {
						"color": "#4bc46f"
					},
					"wordpress_id": 19
				},
				{
					"acf": {
						"color": "#00e3e3"
					},
					"wordpress_id": 8
				},
				{
					"acf": {
						"color": "#FFB27A"
					},
					"wordpress_id": 10
				}
			]
		},
		"wordpressAcfOptions": {
			"options": {
				"voices_header": "Voices and ideas of<br />the decentralised web",
				"voices_intro": "If there is an article or video you believe we should mention here,<br />don’t wait - <a href=\\\"https://form.jotform.com/210467232320140\\\">submit a story</a>."
			}
		}
	}
}`)

  const voicesAll = data.data.allWordpressWpVoices.nodes
  const voiceCategories = data.data.allWordpressWpVoiceCategories.nodes
  const { options } = data.data.wordpressAcfOptions

  const loadVoices = function () {
    scrollService.saveScroll() // Save scroll position
    const newVoices = voicesAll.slice(0, VOICES_PER_PAGE * page)
    setVoices(newVoices)
    if (VOICES_PER_PAGE * page > voicesAll.length) setFinished(true)
    setPage(page + 1)
    masonryRestart()
  }

  const onVoicesDisplayed = () => {
    if (typeof window === `undefined`) return
    scrollService.restoreY()
    setLoading(false)
    window.dispatchEvent(voicesLoadedEvent)
  }

  useEffect(() => {
    loadVoices()
  }, [])

  const masonryOptions = {
    sm: {
      minWidth: 0,
      colsCount: 1,
      colsWidth: 100,
      gapsWidth: 0,
      unit: '%',
    },
    md: {
      minWidth: 768,
      colsCount: 2,
      colsWidth: 336,
      gapsWidth: 30,
      unit: 'px',
    },
    lg: {
      minWidth: 992,
      colsCount: 2,
      colsWidth: 375,
      gapsWidth: 24,
      unit: 'px',
    },
    xl: {
      minWidth: 1280,
      colsCount: 3,
      colsWidth: 322,
      gapsWidth: 30,
      unit: 'px',
    },
    xxl: {
      minWidth: 1450,
      colsCount: 3,
      colsWidth: 388,
      gapsWidth: 35,
      unit: 'px',
    },
  }

  let currentOptions = {}

  const masonrySetMinWidth = (obj, width, unit) => {
    const old_width = obj.style.minWidth
    if (parseInt(old_width) < parseInt(width)) {
      obj.style.minWidth = width + unit
    }
  }

  const masonrySetMinHeight = (obj, height) => {
    let old_height = parseInt(obj.style.minHeight)
    if (isNaN(old_height)) old_height = 0
    if (parseInt(old_height) < parseInt(height)) {
      obj.style.minHeight = `${height}px`
    }
  }

  const masonryGetCurrentOptions = () => {
    if (typeof window === `undefined`) return
    for (const key in masonryOptions) {
      const el = masonryOptions[key]
      if (el.minWidth < window.innerWidth) {
        currentOptions = el
      } else {
        break
      }
    }
  }

  const masonryInit = (masonryParent) => {
    if (masonryParent == null) return
    const { children } = masonryParent
    if (children.length > 0) {
      masonryGetCurrentOptions()
      masonryParent.style.minHeight = '0px'
      const cols_offset = []
      let index = 0
      let i = 0
      while (i < children.length) {
        index = i
        const el = children[i]
        if (typeof el === 'undefined') continue
        if (index < currentOptions.colsCount) {
          el.style.width = currentOptions.colsWidth + currentOptions.unit
          el.style.top = 'unset'
          el.style.left =
            index * (currentOptions.colsWidth + currentOptions.gapsWidth) +
            currentOptions.unit
          cols_offset[index] = el.offsetHeight
          masonrySetMinWidth(
            masonryParent,
            (index + 1) * currentOptions.colsWidth +
              index * currentOptions.gapsWidth,
            currentOptions.unit
          )
          masonrySetMinHeight(masonryParent, cols_offset[index])
        } else {
          const min = Math.min(...cols_offset)
          index = cols_offset.indexOf(min)
          el.style.width = currentOptions.colsWidth + currentOptions.unit
          el.style.top = `${cols_offset[index]}px`
          el.style.left =
            index * (currentOptions.colsWidth + currentOptions.gapsWidth) +
            currentOptions.unit
          cols_offset[index] = cols_offset[index] + el.offsetHeight
          masonrySetMinWidth(
            masonryParent,
            index * currentOptions.colsWidth +
              (index - 1) * currentOptions.gapsWidth,
            currentOptions.unit
          )
          masonrySetMinHeight(masonryParent, cols_offset[index])
        }
        i++
      }
    }
    onVoicesDisplayed()
  }

  const masonryRestart = () => {
    if (typeof window === `undefined`) return
    timeouts.forEach((timeout) => clearTimeout(timeout))
    const firstTimeout = setTimeout(() => {
      masonryInit(document.getElementById('masonry'))
      window.addEventListener('resize', () => {
        scrollService.saveScroll() // Save scroll position
        masonryInit(document.getElementById('masonry'))
      }) // pass "this" as "navbar" parameter inside the function
    }, RENDER_TIMEOUT)
    timeouts.push(firstTimeout)
  }

  return (
    <div className="voices" id="voices">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xl-8">
            <div
              className="header"
              dangerouslySetInnerHTML={{ __html: options.voices_header }}
            />
            <div
              className="header-notice voices__notice"
              dangerouslySetInnerHTML={{ __html: options.voices_intro }}
            />
          </div>
          <div className="col col-12">
            <div className="masonry" id="masonry" style={{ minHeight: 0 }}>
              {Object.entries(voices).map(([key, voice]) => {
                const filtered = voiceCategories.filter(
                  (cat) => cat.wordpress_id === voice.acf.voice_category.term_id
                )
                return (
                  <Voice
                    voice={voice}
                    color={
                      filtered.length > 0 ? filtered[0].acf.color : 'inherit'
                    }
                    key={`voice_${voice.wordpress_id}`}
                    i={key}
                  />
                )
              })}
            </div>
            <div className="voices__footer">
              <a
                className={`show-more voices__show-more ${
                  (loading || finished) && 'd-none'
                }`}
                onClick={loadVoices}
              >
                Load more
              </a>
              <div
                className={`voices__loader ${
                  (!loading || finished) && 'd-none'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
