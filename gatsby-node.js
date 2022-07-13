const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const result = JSON.parse(`
  {
    "data": {
      "allWordpressPage": {
        "edges": [
          {
            "node": {
              "wordpress_id": 1084,
              "id": "94342057-534b-5576-9634-cfc6c257aec6",
              "slug": "dweb-camp-2022",
              "status": "publish",
              "title": "DWeb Camp 2022 is coming!"
            }
          },
          {
            "node": {
              "wordpress_id": 1047,
              "id": "70080a2b-28df-5041-8cd1-081b59ddda57",
              "slug": "dweb-webinar-series",
              "status": "publish",
              "title": "DWeb webinar series"
            }
          },
          {
            "node": {
              "wordpress_id": 868,
              "id": "90d159e1-6b38-5c5e-9f4e-693c810f4817",
              "slug": "using-the-dweb-brand",
              "status": "publish",
              "title": "DWeb brand guidelines"
            }
          },
          {
            "node": {
              "wordpress_id": 734,
              "id": "6a1f9d54-b081-5012-8d79-d90a2f57c7bf",
              "slug": "contact",
              "status": "publish",
              "title": "Contact"
            }
          },
          {
            "node": {
              "wordpress_id": 714,
              "id": "cc91fd58-5a45-554f-82ea-6f4bfa773ec4",
              "slug": "service-page",
              "status": "publish",
              "title": "Service page"
            }
          },
          {
            "node": {
              "wordpress_id": 665,
              "id": "14fabe06-71a9-5e61-85d8-a9a8fca679d3",
              "slug": "events-archive",
              "status": "publish",
              "title": "Events archive"
            }
          },
          {
            "node": {
              "wordpress_id": 660,
              "id": "af7b587c-60da-5828-9e49-9d2bc6676621",
              "slug": "website-team",
              "status": "publish",
              "title": "Website team"
            }
          },
          {
            "node": {
              "wordpress_id": 636,
              "id": "c5d941c3-da40-54b0-a94d-fb982253ad8d",
              "slug": "code-of-conduct",
              "status": "publish",
              "title": "Code of Conduct"
            }
          },
          {
            "node": {
              "wordpress_id": 551,
              "id": "352d8e74-a035-5c24-9a41-2634af3706ed",
              "slug": "join-the-comms-team",
              "status": "publish",
              "title": "Join the comms team"
            }
          },
          {
            "node": {
              "wordpress_id": 548,
              "id": "b17aa84c-8189-591e-bca6-6d71c0ee82e1",
              "slug": "resources",
              "status": "publish",
              "title": "Resources"
            }
          },
          {
            "node": {
              "wordpress_id": 544,
              "id": "b79f6b5e-cb97-5982-a569-9412eaaafdf4",
              "slug": "join-the-team",
              "status": "publish",
              "title": "Join the team"
            }
          },
          {
            "node": {
              "wordpress_id": 535,
              "id": "5ef563a1-3eb8-5f30-8533-07ebd6b31541",
              "slug": "start-a-dweb-node",
              "status": "publish",
              "title": "Start a DWeb Node"
            }
          },
          {
            "node": {
              "wordpress_id": 529,
              "id": "7b44b6c4-85e0-5e63-92d8-502d62a61c14",
              "slug": "origin-story",
              "status": "publish",
              "title": "Origin story"
            }
          },
          {
            "node": {
              "wordpress_id": 3,
              "id": "0a0dc0c4-514b-5263-88bc-54d7437881e7",
              "slug": "privacy-policy",
              "status": "publish",
              "title": "Privacy Policy"
            }
          }
        ]
      },
      "allWordpressAcfPages": {
        "nodes": [
          {
            "id": "0971c86b-ac52-580c-8abc-f852fad6eb49",
            "wordpress_id": 1084,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>SAVE THE DATE: <span style=\\\"font-weight: 400;\\\">August 24-28, 2022 at Camp Navarro, near Philo, California</span></p>\\n<p>Set in the beautiful redwoods near the Mendocino coast of California, DWeb Camp is a five-day retreat for dreamers and builders. For those who want to create a decentralized web that is more open, private, secure and fun. DWeb Camp is a place where diverse people can freely exchange ideas about the technologies, laws, markets and agreements we need to build a better digital future.</p>\\n<p>NOTE: We are also looking for volunteers. August 22-23 is the CAMP BUILD and August 28-29 is the TAKE DOWN.</p>\\n",
                    "title": "DWeb Camp 2022 is coming!",
                    "hero_image_desktop": {
                      "id": "39cefb72-664f-59cc-a2ba-b59dd8456ca8",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/DWebCamp2022-heroD.jpg"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "7dfaba36-fd69-5fe0-8d6c-b5b95a302a2e",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/DWebCamp2022-heroM.jpg"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "highlighted",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "Noah, after DWeb Camp 201",
                    "background_color": "FFCD03",
                    "quote": "“Synchronicity brought me to DWebCamp...there couldn’t have been a better place to be. The openness and infectious excitement of the community helped me to understand the bigger picture of DWeb….how the DWeb can help liberate individuals and communities to more fully unlock all the skills and resources just waiting to build a better world.\\\"",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Get ticket updates",
                    "button_link_direction": "external",
                    "button_link_url": "https://mailchi.mp/archive/dweb-updates",
                    "text": "DWeb Camp is a chance to make deep connections: to builders of Web 3.0, to the pioneers of the World Wide Web, to global communities calling for better technologies.",
                    "title": "Meet Builders and Dreamers",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/dreamers-02.jpg"
                      },
                      "id": "4eb8f58c-efda-5a0a-83cb-2c2f53228471"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Watch talks",
                    "button_link_direction": "external",
                    "button_link_url": "https://archive.org/details/dwebcamp2019",
                    "text": "DWeb Camp is a co-created event where we ask everyone to share their gifts. You can give a talk or lead a workshop. Volunteer to help build & take down the camp. Be a Space Steward and host a room. Be a Weaver and facilitate a small group. Host a policy salon. Create an artistic activation. Organize a game night. Come as a Global Fellow to build bridges between communities. \\r\\n\\r\\nThe only limitation is your imagination.",
                    "title": "What can you share?",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/share-and-learn.jpg"
                      },
                      "id": "c848c714-1720-5b4c-8137-46d4e6fb1483"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_wide_image",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Join the team",
                    "button_link_direction": "external",
                    "button_link_url": "https://getdweb.net/join-the-team",
                    "text": "It takes millions to build a movement and we aspire to harness that kind of energy and support around the world. We need talented organizers, writers, designers, and engineers to coordinate our collective efforts. Interested in being part of the team?  We have a list of positions we’re hoping to fill.",
                    "title": "Volunteer",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": {
                      "id": "5595e383-8f4e-56b3-aac5-de9a26472a85",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/DWebCamp-nature-scaled.jpg"
                      }
                    }
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<h1>Connect with nature</h1>\\n<p>WHAT TO EXPECT: Stay in a cabin, glamping tent, or bring your own RV or camping gear. We’ll have ample hacking space, workshops, small groups, talks and three farm-to-table meals served each day. Families are welcome to enjoy our private swimming hole, STEAM projects, archery range, climbing wall &amp; amazing hiking trails. DWeb Camp will be fun! While building a better web, we will also deepen our connection to the planet.</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Help us plan",
                    "button_link_direction": "external",
                    "button_link_url": "https://forms.gle/havb3LFZe22p9Fim8",
                    "text": "Come build bridges and community while you hack, hike, converse and create a better society together with us amidst the giant redwoods! You can help us prepare by filling out the questionnaire below.",
                    "title": "Join DWeb Camp",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/10/join-the-team-cta-dweb.jpeg"
                      },
                      "id": "df96ab70-7334-58fc-a511-e7e1ba1f1f0f"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<h1>Connect with nature</h1>\\n<p>As long as needed description here&#8230;</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "Sign up for the DWeb newsletter",
                    "button_link_direction": "external",
                    "button_link_url": "https://mailchi.mp/archive/dweb-updates",
                    "text": "We are finalizing the new dwebcamp.org website. Meanwhile, sign up for the DWeb newsletter and be the first to hear when DWeb Camp registration opens.",
                    "title": "Be the first to hear"
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "7da7943a-e512-5718-96ad-59164ffc3fc5",
            "wordpress_id": 1047,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>In this series of six workshops, “Imagining a Better Online World: Exploring the Decentralized Web,” we’ll explore the ways in which moving to decentralized technologies may enhance your privacy, empower you to control your own data, and resist censorship. Join us to hear from experts in the leading peer-to-peer technologies, from identity to data storage. We’ll see demonstrations of how decentralized tech is being used in publishing, data management and preserving cultural assets. Learn how the decentralized web might yet create systems that empower individuals by eliminating central points of control.</p>\\n<p>This series is a partnership between Internet Archive, <a href=\\\"https://getdweb.net/\\\">DWeb</a>, <a href=\\\"https://www.libraryfutures.net/\\\">Library Futures</a>, and presented by the <a href=\\\"https://metro.org/\\\">Metropolitan New York Library Council</a>.</p>\\n",
                    "title": "Imagining a Better Online World: Exploring the Decentralized Web",
                    "hero_image_desktop": {
                      "id": "53bac4df-6b01-5da6-b5d8-0cea29e93c05",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/01/DWeb-METRO-orgs-hero.jpg"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "812d7925-545d-5a2e-abb0-9b522f4bd559",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/01/DWeb-METRO-orgs-hero-M.jpg"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Watch the recording",
                    "button_link_direction": "external",
                    "button_link_url": "https://youtu.be/6OWBGrQNcDU",
                    "text": "Session 01  •  January 27, 2022\\r\\n<br>\\r\\n<br>What is the decentralized web, why is it important, and where is it along the path of development? ",
                    "title": "Decentralized Web: An Introduction",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/02/DWeb-session-01-guide.jpg"
                      },
                      "id": "8d1b6f7b-9f83-5899-b212-b77c2af7d23e"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Download guide",
                    "button_link_direction": "external",
                    "button_link_url": null,
                    "text": "Learn about the differences between centralized, distributed and decentralized organizations, and the differences between the decentralized web and Web 3.0.",
                    "title": "Get the Resource Guide"
                  },
                  "feature_block": {
                    "button_caption": "Watch the recording",
                    "button_link_direction": "external",
                    "button_link_url": "https://youtu.be/Bk87QTYwgHs",
                    "text": "Session 02  •  February 24, 2022\\r\\n<br>How do you create room for an ever-expanding collection and keep your materials safe? ",
                    "title": "Using decentralized storage",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/03/DWeb-session-02-guide.jpg"
                      },
                      "id": "35971f2f-31ab-5df8-b55e-0676ea85fda3"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Download the bundle",
                    "button_link_direction": "external",
                    "button_link_url": "https://dweb.link/ipfs/QmcPKj5pM1fzThHyYrzUX9Frcw2Sw4347bmASTwg5kCqxC?filename=DWeb-resource-guides-1-2.zip",
                    "text": "Every session has an accompanying Resource Guide with core ideas around the topic and two pages of links. The bundle below includes guides for the first two sessions: “Decentralized Web: An Introduction\\\" and \\\"Using Decentralized Storage to Keep Your Materials Safe\\\".",
                    "title": "Get the Resource Guide"
                  },
                  "feature_block": {
                    "button_caption": "Watch the recording",
                    "button_link_direction": "external",
                    "button_link_url": "https://www.youtube.com/watch?v=hRBKWxAon_Y",
                    "text": "Session 03  •  March 31, 2022\\r\\n<br>What if you could maintain control over your personal identity and share only what is needed?",
                    "title": "Decentralized Identity",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/04/DWeb-Resource-Guide-03-website.png"
                      },
                      "id": "701889b6-b9c4-546c-ab78-6b0f412886fe"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Download the bundle",
                    "button_link_direction": "external",
                    "button_link_url": "https://dweb.link/ipfs/QmcPKj5pM1fzThHyYrzUX9Frcw2Sw4347bmASTwg5kCqxC?filename=DWeb-resource-guides-1-2.zip",
                    "text": "Every session has an accompanying Resource Guide with core ideas around the topic and two pages of links. The bundle below includes guides for the first two sessions: “Decentralized Web: An Introduction\\\" and \\\"Using Decentralized Storage to Keep Your Materials Safe\\\".",
                    "title": "Get the Resource Guide"
                  },
                  "feature_block": {
                    "button_caption": "Watch the recording",
                    "button_link_direction": "external",
                    "button_link_url": "http://blog.archive.org/2022/05/13/goodbye-facebook-hello-decentralized-social-media/",
                    "text": "Session 04  •  April 28, 2022\\r\\n<br>Can Peer-to-Peer Lead to Less Toxic Online Platforms?",
                    "title": "Decentralized Social Media",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/05/DWeb-Resource-Guide-04-website.png"
                      },
                      "id": "6d787ea1-ff49-58d5-8518-fa32280f13e8"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Download the bundle",
                    "button_link_direction": "external",
                    "button_link_url": "https://dweb.link/ipfs/QmcPKj5pM1fzThHyYrzUX9Frcw2Sw4347bmASTwg5kCqxC?filename=DWeb-resource-guides-1-2.zip",
                    "text": "Every session has an accompanying Resource Guide with core ideas around the topic and two pages of links. The bundle below includes guides for the first two sessions: “Decentralized Web: An Introduction\\\" and \\\"Using Decentralized Storage to Keep Your Materials Safe\\\".",
                    "title": "Get the Resource Guide"
                  },
                  "feature_block": {
                    "button_caption": "Register",
                    "button_link_direction": "external",
                    "button_link_url": "https://us02web.zoom.us/webinar/register/WN_C6qo-wHBRfehbnTdP7GIqg",
                    "text": "Session 05  •  May 26, 2022\\r\\n<br>How are artists and nonprofits racking up seven-figure payouts for otherwise mundane pieces of media called NFTs? Why are they so despised?",
                    "title": "The Metaverse and the “Next Big Thing”",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2022/05/DWeb-METRO-session-05-Metaverse.png"
                      },
                      "id": "4e09b829-b1fd-54cf-b02d-69982a9a55d1"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "Download the bundle",
                    "button_link_direction": "external",
                    "button_link_url": "https://dweb.link/ipfs/QmNWff5gVVzvTz9S82Bz2SDwL7L9tiC5ow6VsRCYa5AHNf",
                    "text": "Every session has an accompanying Resource Guide with core ideas around the topic and two pages of links. The bundle below includes guides for the first four sessions: “Decentralized Web: An Introduction\\\", \\\"Using Decentralized Storage to Keep Your Materials Safe\\\", \\\"How Decentralized Identity Drives Data Privacy\\\" and \\\"Goodbye Facebook, Hello Decentralized Social Media?\\\".",
                    "title": "Get the Resource Guides"
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "88dda5e6-3690-5753-b35d-8acbea4779b9",
            "wordpress_id": 868,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p><span style=\\\"font-weight: 400;\\\">The DWeb visual world is built on three pillars:<br />\\n</span><span style=\\\"font-weight: 400;\\\">1 &#8211; The personality that defined the design direction,<br />\\n</span><span style=\\\"font-weight: 400;\\\">2 &#8211; A legacy that gave us the core components of the visual language, </span><span style=\\\"font-weight: 400;\\\">and<br />\\n3 &#8211; Scale that continues to keep us from designing something ultra-finished or choosing too narrow a style.</span></p>\\n<p>&nbsp;</p>\\n<p><span style=\\\"font-weight: 400;\\\">The DWeb brand reflects the personality of the community. It’s friendly and open-minded. It’s dynamic and vibrant.  It’s the feeling that we are part of a bigger puzzle. It’s a commitment to always put people over technology.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">We wanted to reflect those characteristics in our design to make the movement (and the community brand) more human and more welcoming, and attract those who share our values.</span></p>\\n",
                    "title": "Using the DWeb brand",
                    "hero_image_desktop": {
                      "id": "566ba261-c22d-55db-8bc5-f28c2c2a401b",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-master-top-line-black.png"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "566ba261-c22d-55db-8bc5-f28c2c2a401b",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-master-top-line-black.png"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_wide_image",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": {
                      "id": "fb7e04e6-2bf2-58f6-8cf3-7aa27cf68fd0",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-design-Nezhynska-visual-language-01-scaled.jpg"
                      }
                    }
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>Built for and by the community, we’ve built this as an open and adaptable brand. We want it to evolve as the decentralization movement grows.</p>\\n<p>Feel free to use all the available assets today, but we ask that you please follow the guidelines below. This will help the community build a consistent visual image worldwide.</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Download logos",
                    "button_link_direction": "external",
                    "button_link_url": "https://dweb.link/ipfs/QmekVddHZTdYRtwK8r4LnbjWwCimH946bMpYeS2N7X5iAE?filename=DWeb-logo-assets-2021.zip",
                    "text": "The varying size of dots depicts the many people building the decentralized Web. They are living and moving. Small dots can become bigger over time. Yet because we’re one community, the dots form to reveal the capital letter D.",
                    "title": "Our logo",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-main-logo-clearspace.png"
                      },
                      "id": "c693bb1f-011a-58f9-9cec-ebb83aa686f5"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>Just in case.</p>\\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Download logos",
                    "button_link_direction": "internal",
                    "button_link_url": null,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "title": "Primary logo",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<h3>Here are a few ways to treat the DWeb logo with respect:</h3>\\n<ol>\\n<li><span style=\\\"font-weight: 400;\\\">Allow enough clearspace on all sides of the logo. The minimum clear space equals the double distance between dots on the logo grid</span><span style=\\\"font-weight: 400;\\\">.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Place the logo on a non-busy area within an image. Use white/black versions of the logo when placing it on a photo background.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Use high contrast color combinations for logo dots and the background.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Use our logo and DWeb Principles graphics (see below) to show your support.</span></li>\\n</ol>\\n<h3>And here are a few logo crimes to avoid:</h3>\\n<ol>\\n<li><span style=\\\"font-weight: 400;\\\">Use outlined dots on the logo.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Place the color version of the logo on a busy or light area within a photo, making it hard to see</span><span style=\\\"font-weight: 400;\\\">.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Apply color on the rectangular label “Web” in the logo. It should always be in white outline (primary lookup on the dark background) or filled white/black on color backgrounds.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Modify the logo shape in an excessive way. For example, don&#8217;t add more dots, create a new letter, or replace dots with other shapes.</span></li>\\n</ol>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "border",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>Dos and don&#8217;ts lists.</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>\\n<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>\\n<li>Ut enim ad minim veniam, quis nostrud exercitation</li>\\n<li>ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\\n</ul>\\n<p>Dos and don&#8217;ts lists.</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>\\n<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>\\n<li>Ut enim ad minim veniam, quis nostrud exercitation</li>\\n<li>ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\\n</ul>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Download Node assets",
                    "button_link_direction": "internal",
                    "button_link_url": "/principles",
                    "text": "All the DWeb Nodes are different from each other and bring in their own local vibes into every meetup their host. Because of this, every Node has its own style under the overarching visual identity of DWeb.",
                    "title": "Node branding",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/06/prague-c2-800.png"
                      },
                      "id": "55fa881b-83aa-59ef-8c02-94470f1680ce"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"6i1e-0-0\\\">DWeb has three color palettes that balance the vibrance of the community with the beauty of code.</p>\\n<h3 class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"6i1e-0-0\\\">UI color palette</h3>\\n<p data-block=\\\"true\\\" data-editor=\\\"ful4s\\\" data-offset-key=\\\"6i1e-0-0\\\"><span style=\\\"font-weight: 400;\\\">We sought to make our content more legible for people with color blindness or lower contrast sensitivity. That’s why we use black (000003) and white as our main color palette, for both brand communication and user interface design</span>.</p>\\n<p><span data-offset-key=\\\"v4uv-1-0\\\"><span style=\\\"font-weight: 400;\\\">Those who joined us for DWeb Camp in 2019 may remember the warm sunny yellow color that we used for all our published materials. That yellow became the main color for user interface interactions. We call it</span> <span style=\\\"color: #ffcd03;\\\">the Camp Yellow (ffcd03)</span>.</span></p>\\n<h3>Logo colors</h3>\\n<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"ful4s\\\" data-offset-key=\\\"6cjgb-0-0\\\">\\n<div class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"6cjgb-0-0\\\"><span class=\\\"hardreadability\\\"><span data-offset-key=\\\"6cjgb-0-0\\\"><span style=\\\"font-weight: 400;\\\">The colors of the DWeb logo draw inspiration from the colorfulness of written code</span>: <span style=\\\"color: #bbe022;\\\">bbe022</span>, <span style=\\\"color: #ff4f2c;\\\">ff4f2c</span>, <span style=\\\"color: #00d6c6;\\\">00d6c6</span>, <span style=\\\"color: #fcc924;\\\">fcc924</span>, <span style=\\\"color: #e16ef9;\\\">e16ef9</span> and <span style=\\\"color: #00b3f1;\\\">00b3f1</span>. <span style=\\\"font-weight: 400;\\\">These colors are also used in the animated dots on the DWeb website</span>.</span></span></div>\\n<h3 data-offset-key=\\\"6cjgb-0-0\\\">Node color pairs</h3>\\n</div>\\n<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"ful4s\\\" data-offset-key=\\\"7nh65-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"7nh65-0-0\\\"><span data-offset-key=\\\"7nh65-1-0\\\"><span style=\\\"font-weight: 400;\\\">Each node has their own color too: one primary color (for labels and hashtags in UI), and one secondary color which we use for color overlays on the photography</span>.</span></p>\\n</div>\\n",
                    "title": "Colors",
                    "hero_image_desktop": {
                      "id": "a592287c-6d87-5a2f-bdc3-a6d3d23adc20",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-colors-hor-01.png"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "b00647ad-79eb-5f97-8bbe-cf0c096de756",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-colors-hor-alt.png"
                      }
                    }
                  },
                  "body_content": {
                    "text": "<p>Dos and don&#8217;ts lists.</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>\\n<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>\\n<li>Ut enim ad minim veniam, quis nostrud exercitation</li>\\n<li>ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\\n</ul>\\n<p>Dos and don&#8217;ts lists.</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>\\n<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>\\n<li>Ut enim ad minim veniam, quis nostrud exercitation</li>\\n<li>ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\\n</ul>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Start dithering photos",
                    "button_link_direction": "external",
                    "button_link_url": "https://ditherit.com/",
                    "text": "One of the core elements of the DWeb visual language is the Atkinson dithering effect that we apply to the majority of photos. We use black and white presets, adding a gradient map or a flat overlay on top of the processed image.",
                    "title": "Dithering effect",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/11/DWeb-dither-effect-2022update.png"
                      },
                      "id": "edc0672c-8299-596c-a268-237ddc0d5260"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"44rvm-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"44rvm-0-0\\\"><span class=\\\"hardreadability\\\"><span data-offset-key=\\\"44rvm-0-0\\\">We use Lab Mono for almost everything brand-related — from body text on this website to meet-up details on the event visuals</span></span><span data-offset-key=\\\"44rvm-1-0\\\">. Lab Mono is a monospace typeface designed by Martin Wecke. It is available in one style &#8211; Regular.</span></p>\\n</div>\\n<div class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"5a5k7-0-0\\\"><span data-offset-key=\\\"5a5k7-0-0\\\">Poppins Medium </span><span class=\\\"passivevoice\\\"><span data-offset-key=\\\"5a5k7-1-0\\\">is used</span></span><span data-offset-key=\\\"5a5k7-2-0\\\"> for display-type treatments — as a headline font (H1. H2 and H3) or for where our message should be loud and attention-grabbing. </span>Please, do not use any other styles but Medium for the DWeb brand-related design materials.</div>\\n<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"4bs8r-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"4bs8r-0-0\\\"><span data-offset-key=\\\"4bs8r-0-0\\\">Both typefaces are open-source. Download <a href=\\\"https://fonts.google.com/specimen/Poppins\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Poppins Medium on Google Fonts</a> and <a href=\\\"https://github.com/hatsumatsu/Lab-Mono/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Lab Mono on Github</a>.</span></p>\\n</div>\\n",
                    "title": "Typography",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"44rvm-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"44rvm-0-0\\\"><span data-offset-key=\\\"44rvm-1-0\\\"><span style=\\\"font-weight: 400;\\\">We use the font Lab Mono for almost everything brand-related — from body text on this website to meet-up details on the event graphics. Lab Mono is a monospace typeface designed by <a href=\\\"https://martinwecke.de/lab-mono/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Martin Wecke</a>. It is available in one style &#8211; Regular</span>.</span></p>\\n</div>\\n<div class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"5a5k7-0-0\\\"><span style=\\\"font-weight: 400;\\\">Poppins Medium is used for display-type treatments — so we use it as a headline font (H1, H2, and H3) or for where our message should be loud and attention-grabbing</span>. <span style=\\\"font-weight: 400;\\\">Please, do not use any other styles but Poppins Medium for the DWeb brand-related design materials.</span></div>\\n<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"4bs8r-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"4bs8r-0-0\\\"><span data-offset-key=\\\"4bs8r-0-0\\\">Both typefaces are open-source. Download <a href=\\\"https://fonts.google.com/specimen/Poppins\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Poppins Medium on Google Fonts</a> and <a href=\\\"https://github.com/hatsumatsu/Lab-Mono/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Lab Mono on Github</a>.</span></p>\\n</div>\\n",
                    "title": "Typography",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Join Figma team",
                    "button_link_direction": "external",
                    "button_link_url": "https://www.figma.com/@DWeb",
                    "text": "About assets. About having an account and requesting access. Potentially - a link to the micro guide.",
                    "title": "More design files"
                  },
                  "feature_block": {
                    "button_caption": "Download Node assets",
                    "button_link_direction": "internal",
                    "button_link_url": "/principles",
                    "text": "All the DWeb Nodes are different from each other and bring in their own local vibes into every meetup their host. Because of this, every Node has its own style under the overarching visual identity of DWeb.",
                    "title": "Node branding",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/06/perm-c1-800.png"
                      },
                      "id": "f7d2a2df-fccd-5175-b93b-aaf0c258c0fa"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"44rvm-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"44rvm-0-0\\\"><span data-offset-key=\\\"44rvm-1-0\\\"><span style=\\\"font-weight: 400;\\\">We use the font Lab Mono for almost everything brand-related — from body text on this website to meet-up details on the event graphics. Lab Mono is a monospace typeface designed by <a href=\\\"https://martinwecke.de/lab-mono/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Martin Wecke</a>. It is available in one style &#8211; Regular</span>.</span></p>\\n</div>\\n<div class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"5a5k7-0-0\\\"><span style=\\\"font-weight: 400;\\\">Poppins Medium is used for display-type treatments — so we use it as a headline font (H1, H2, and H3) or for where our message should be loud and attention-grabbing</span>. <span style=\\\"font-weight: 400;\\\">Please, do not use any other styles but Poppins Medium for the DWeb brand-related design materials.</span></div>\\n<div class=\\\"\\\" data-block=\\\"true\\\" data-editor=\\\"4i3p9\\\" data-offset-key=\\\"4bs8r-0-0\\\">\\n<p class=\\\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\\\" data-offset-key=\\\"4bs8r-0-0\\\"><span data-offset-key=\\\"4bs8r-0-0\\\">Both typefaces are open-source. Download <a href=\\\"https://fonts.google.com/specimen/Poppins\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Poppins Medium on Google Fonts</a> and <a href=\\\"https://github.com/hatsumatsu/Lab-Mono/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Lab Mono on Github</a>.</span></p>\\n</div>\\n",
                    "title": "Typography",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "Join Figma team",
                    "button_link_direction": "external",
                    "button_link_url": "https://www.figma.com/@DWeb",
                    "text": "About assets. About having an account and requesting access. Potentially - a link to the micro guide.",
                    "title": "More design files"
                  },
                  "feature_block": {
                    "button_caption": "Get DWeb Principles images",
                    "button_link_direction": "external",
                    "button_link_url": "https://getdweb.net/principles/",
                    "text": "About requesting the media kit. What to do and how to share.\\r\\nSomething else to add as a link.",
                    "title": "DWeb Principles",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-Principles-graphics-square-03.png"
                      },
                      "id": "ac8abf3b-6d7b-5a2e-90b3-ce43f87c3b23"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>About requesting the media kit. What to do and how to share.</p>\\n<p>Links to articles and posts.</p>\\n<p>Request url. (a link)</p>\\n",
                    "title": "DWeb principles media kit",
                    "hero_image_desktop": {
                      "id": "0f0ce3dc-cc7d-5cf1-a56d-02bea1d6e1e3",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-design-Nezhynska-branding-moodboard.jpg"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "0f0ce3dc-cc7d-5cf1-a56d-02bea1d6e1e3",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-design-Nezhynska-branding-moodboard.jpg"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "DWeb on Figma",
                    "button_link_direction": "external",
                    "button_link_url": "https://www.figma.com/@DWeb",
                    "text": "We will open-source the brand to the DWeb community in early 2022. If you want to contribute and be a part of the launch, message <a href=\\\"https://getdweb.net/website-team\\\">Iryna</a>. Or follow our team on Figma and get design-in-progress updates.",
                    "title": "More design files"
                  },
                  "feature_block": {
                    "button_caption": "Get DWeb Principles images",
                    "button_link_direction": "internal",
                    "button_link_url": "/principles",
                    "text": "About requesting the media kit. What to do and how to share.\\r\\nSomething else to add as a link.",
                    "title": "DWeb Principles",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/05/DWeb-Principles-graphics-square-03.png"
                      },
                      "id": "ac8abf3b-6d7b-5a2e-90b3-ce43f87c3b23"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "297c604e-c757-50a8-8d28-23eced78f722",
            "wordpress_id": 734,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>Write to us at <a href=\\\"mailto:dweb@archive.org\\\">dweb [at] archive.org</a></p>\\n<p><span data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">Follow DWeb on Twitter at </span><a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://twitter.com/GETDWeb\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"1\\\" data-reactroot=\\\"\\\">@GetDWeb</a>.<br />\\n<span data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">Read about the latest ideas and innovations on Medium on “</span><a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://medium.com/decentralized-web\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"1\\\" data-reactroot=\\\"\\\">Stories from the Decentralized Web</a><span data-token-index=\\\"2\\\" data-reactroot=\\\"\\\">”.</span></p>\\n<p><span data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">Meet other DWeb community members on <a href=\\\"https://matrix.to/#/!WBhcGXTDMlzyTPWoJv:matrix.org?via=matrix.org&amp;via=tomesh.net&amp;via=privacytools.io\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">our Matrix channel</a>.</span></p>\\n",
                    "title": "Let's connect",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Join mailing list",
                    "button_link_direction": "external",
                    "button_link_url": "https://mailchi.mp/archive/dweb-updates",
                    "text": "We send out occasional emails with the latest events and developments in the DWeb community.\\r\\n\\r\\nWe only send you the important stuff.\\r\\nSubscribe and stay up to date!",
                    "title": "Get community updates",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/DWeb-contact-newsletter-color03.png"
                      },
                      "id": "4c89e619-532e-516a-9c5f-8b3266b53747"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "8c4a1bd0-0224-59a0-8b8c-77778348b584",
            "wordpress_id": 714,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>abc</p>\\n",
                    "title": "abc",
                    "hero_image_desktop": {
                      "id": "996f93be-5f24-5997-a654-e5339c6a5902",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/11/dweb-camp-hero.jpg"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "996f93be-5f24-5997-a654-e5339c6a5902",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/11/dweb-camp-hero.jpg"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "highlighted",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "abc",
                    "background_color": "transparent",
                    "quote": "abc",
                    "background_image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/11/dweb-camp-hero.jpg"
                      }
                    }
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "abc",
                    "button_link_direction": "internal",
                    "button_link_url": "/#",
                    "text": "abc",
                    "title": "abc",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/11/dweb-camp-hero.jpg"
                      },
                      "id": "996f93be-5f24-5997-a654-e5339c6a5902"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>abc</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_wide_image",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": {
                      "id": "996f93be-5f24-5997-a654-e5339c6a5902",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2020/11/dweb-camp-hero.jpg"
                      }
                    }
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_button",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "abc",
                    "button_link_direction": "internal",
                    "button_link_url": "/#"
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "abc",
                    "button_link_direction": "external",
                    "button_link_url": "/#",
                    "text": "abc",
                    "title": "abc"
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "border",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "abc",
                    "button_link_direction": "external",
                    "button_link_url": "/#",
                    "text": "abc",
                    "title": "abc"
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "68757a88-7806-5b82-a649-8d86b1325afa",
            "wordpress_id": 665,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<h2>2020</h2>\\n<p>18 Nov<br />\\n<span style=\\\"color: #ea9f67;\\\">DWebArizona:</span><br />\\n<a href=\\\"https://www.meetup.com/Desert-Blockchain/events/274273030/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Decentralized Voting Innovation</a> / meetup</p>\\n<p>18 Nov<br />\\n<span style=\\\"color: #ea9f67;\\\">DWebArizona:<br />\\n</span> <a href=\\\"https://www.meetup.com/Desert-Blockchain/events/274273030/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Decentralized Voting Innovation</a> / meetup</p>\\n<p>14-15 Nov<br />\\n<span style=\\\"color: #9dbcb6;\\\">DWebShanghai:</span><br />\\n<a href=\\\"https://www.caa-ins.org/archives/6927/2\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">The Fifth Annual Conference of Network Society: The Web of Phronesis &#8211; West Lake Mesh Network Workshop</a> / hackathon</p>\\n<p>28 Oct<br />\\n<span style=\\\"color: #ea9f67;\\\">DWebArizona:</span><br />\\n<a href=\\\"https://www.meetup.com/Desert-Blockchain/events/sgztmqybcnblc/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Halloween, Blockchain &amp; IoT</a> / meetup</p>\\n<p>22 Sep<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/dweb-meetup-if-big-tech-is-toxic-how-do-we-build-something-better-tickets-120479309859#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">&#8220;If Big Tech is Toxic, How Do We build something Better?&#8221;</a> / meetup</p>\\n<p>29 Jul<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://blog.archive.org/2020/08/11/community-networks-adapt-to-new-realities-under-covid-a-dweb-meetup-recap/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">2020 Community Views Around the Globe</a> / meetup</p>\\n<p>24 Jun<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/dweb-meetup-2020the-state-of-the-decentralized-web-tickets-109884774318#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">The State of the Decentralized Web</a> / meetup</p>\\n<p>13 May<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/dweb-meet-up-virtual-decentralized-storage-comes-of-age-tickets-104783963656#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Decentralized Storage</a> / meetup</p>\\n<p>19 Feb<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-berlin/events/268295872/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Building a New decentralized Web</a> / panel + science fair</p>\\n<p>1-2 Feb<br />\\n<span style=\\\"color: #44c068;\\\">DWebPerm:</span><br />\\n<a href=\\\"http://www.permwinterschool.ru\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Perm Winter School on Digital Finance</a> / summit</p>\\n<p>21 Jan<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/dweb-sf-meet-up-january-tickets-88949818301#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Decentralized Social Media</a> / meetup</p>\\n<h2>2019</h2>\\n<p>29 Dec<br />\\n<span style=\\\"color: #9dbcb6;\\\">DWebShanghai:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-shanghai/events/267409112/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Applications and toolkits for the next-generation Internet</a> / meetup</p>\\n<p>20 Nov<br />\\n<span style=\\\"color: #1e72ff;\\\">DWebPrague:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-prague/events/263923023/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">IPFS#3: Developing apps with IPFS</a> / meetup</p>\\n<p>18 Nov<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\nDWebDesign #3 &#8211; <a href=\\\"https://jolocom.io/blog/open-source-design-resources/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Open source design and design for open source</a> / meetup</p>\\n<p>27 Oct<br />\\n<span style=\\\"color: #9dbcb6;\\\">DWebShanghai:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-shanghai/events/265627232/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Decentralization: Why and How?</a> / meetup</p>\\n<p>23 Oct<br />\\n<span style=\\\"color: #1e72ff;\\\">DWebPrague:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-prague/events/263909416/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">IPFS#2: Files in IPFS and hands-on workshop</a> / meetup</p>\\n<p>17 Oct<br />\\n<span style=\\\"color: #00b3f2;\\\">DWebAUS:</span><br />\\nCommunity Technology Q&amp;A Open Floor / meetup</p>\\n<p>1 Oct<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.meetup.com/dwebsf/events/265159571/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Let&#8217;s talk DWeb and DWeb Camp!</a> / meetup</p>\\n<p>28 Sep<br />\\n<span style=\\\"color: #9dbcb6;\\\">DWebShanghai:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-shanghai/events/265090085/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Node kick-off</a> / meetup</p>\\n<p>25 Sep<br />\\n<span style=\\\"color: #1e72ff;\\\">DWebPrague:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-prague/events/263670580/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">IPFS#1: Intro to IPFS &#8211; the future of (distributed) web</a> / meetup</p>\\n<p>19 Sep<br />\\n<span style=\\\"color: #00b3f2;\\\">DWebAUS:</span><br />\\nInaugural Event Community Technology Meet and Greet / meetup</p>\\n<p>16-18 Aug<br />\\n<span style=\\\"color: #44c068;\\\">DWebPerm:</span><br />\\n<a href=\\\"http://perm.school\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Perm Summer School on Blockchain &amp; Cryptomarkets</a> / summit</p>\\n",
                    "title": "Past DWeb Events",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Take a look at DWeb Camp",
                    "button_link_direction": "external",
                    "button_link_url": "https://dwebcamp.org/",
                    "text": "21-21 Jul\\r\\nIn 2019, more than 450 builders and dreamers from around the globe gathered on a farm on the coast of California for the first DWeb Camp. Together we built bridges and community, while hacking, hiking to the beach, conversing around campfires and building a better society beneath the stars!",
                    "title": "DWeb Camp 2019",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/DWeb-camp-for-archive.jpg"
                      },
                      "id": "1f8b07ab-a852-51df-b77b-3d50df2eb80e"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>26 Jun<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.meetup.com/dwebsf/events/262450799/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">DWeb Camp Hackathon</a></p>\\n<p>18 May<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-berlin/events/261267658/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Identity Stammtisch. Defining Identity for Things with Heather Vescent</a>  /  meetup</p>\\n<p>15 May<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\n<a href=\\\"https://twitter.com/GETJolocom/status/1128720391936053255\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">DWeb.Design#2 &#8211; Typonight</a>  /  mini conference</p>\\n<p>30 Apr<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/decentralized-web-sf-meet-upapril-tickets-60842622923#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">It&#8217;s all about Decentralized Identity &amp; Data!</a>  /  meetup</p>\\n<p>4 Apr<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\n<a href=\\\"https://www.meetup.com/dweb-berlin/events/259893537/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Your Decentralized Identity</a>  /  meetup</p>\\n<p>12 Mar<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/decentralized-web-sf-meet-upmarch-tickets-56515197477#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">March Science Fair</a></p>\\n<p>12 Feb<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/decentralized-web-sf-meet-upfebruary-tickets-55740780174#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">February meetup</a></p>\\n<p>11 Feb<br />\\n<span style=\\\"color: #8dd2c5;\\\">DWebBLN:</span><br />\\n<a href=\\\"https://jolocom.io/blog/visual-variety-vs-design-trends-vs-ui-standards-for-mvp-branding/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">DWeb.Design#1 &#8211; Embrace variety</a>  /  mini conference</p>\\n<p>8 Jan<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/decentralized-web-sf-meet-upjanuary-tickets-53988879191#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">January meetup</a></p>\\n<h2>2018</h2>\\n<p>11 Dec<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/decentralized-web-meet-up-tickets-52509395014#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">December meetup</a></p>\\n<p>10 Oct<br />\\n<span style=\\\"color: #ffff00;\\\">DWebSF:</span><br />\\n<a href=\\\"https://www.eventbrite.com/e/dweb-sf-meet-up-tickets-50801629040#\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Launch of DWeb SF</a>  /  meetup</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Watch videos",
                    "button_link_direction": "external",
                    "button_link_url": "https://www.decentralizedweb.net/videos/",
                    "text": "31 Jul - 3 Aug\\r\\n2018's Decentralized Web Summit – Global Visions / Working Code is a demonstration of how far we have come. With scores of prototypes and apps now built with decentralized protocols, it was time to collaborate, communicate and engage the communities who need these tools the most.",
                    "title": "DWeb Summit 2018",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/DWebSummit2018-xs.jpg"
                      },
                      "id": "24336714-1755-5338-9d29-52d9508c1f50"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Watch videos",
                    "button_link_direction": "external",
                    "button_link_url": "https://2016.decentralizedweb.net/",
                    "text": "7-9 Jun\\r\\nAn early group of builders, archivists, policymakers, and journalists gathered for the first Decentralized Web Summit within the columns of the Internet Archive headquarters in San Francisco, home to one of the world’s largest digital libraries. Its founder, Brewster Kahle, issued a challenge to these early developers: let's use decentralized technologies to “Lock the Web Open,” this time for good.",
                    "title": "DWeb Summit 2018",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/DWebSummit2016.jpg"
                      },
                      "id": "0b6b9cb8-785a-5f61-91af-03df3d3d3c62"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "da073a0f-a403-5d3f-b8ab-b45d2a1c028d",
            "wordpress_id": 660,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>Wendy Hanamura  /  project coordinator<br />\\nWendy coordinated the content, design, budget, tech and nodes for the website.<br />\\n<a href=\\\"https://twitter.com/whanamura\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">twitter</a>  ‧  <a href=\\\"https://blog.archive.org/author/wendy/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">blog</a>  ‧  <a href=\\\"https://decentralizedweb.net/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">past events</a></p>\\n<p>Iryna Nezhynska  /  designer and website lead<br />\\nIra provided the creative direction for the DWeb visual design and coordinated website development.<br />\\n<a href=\\\"https://nezhynska.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">nezhynska.com</a>  ‧  <a href=\\\"https://twitter.com/iranezhynska\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">twitter</a>  ‧  <a href=\\\"https://jolocom.io/blog/from-medium-to-jolocom-logbook-in-five-steps/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">blog</a></p>\\n<p>Mai Ishikawa Sutton  /  content editor &amp; DWeb principles steward<br />\\nMai produced and edited website content and co-led development of DWeb principles.<br />\\n<a href=\\\"https://twitter.com/maira\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">twitter</a>  ‧  <a href=\\\"https://maisutton.net/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">maisutton.net</a>  ‧   <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://compost.digital/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">COMPOST</a></p>\\n<p>John Patrick Ryan /  DWeb principles steward /<br />\\nJohn co-led development of DWeb principles.<br />\\n<a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://twitter.com/johnconorryan\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">twitter</a>  ‧  <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://www.johnconorryan.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"2\\\" data-reactroot=\\\"\\\">johnconorryan.com</a>  ‧  <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://johnconorryan.medium.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"4\\\" data-reactroot=\\\"\\\">blog posts</a></p>\\n<p>Mina Nagy Zaki /  software developer<br />\\nMina helps with the website hosting and server setup.<br />\\n<a href=\\\"https://github.com/mnzaki\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">github</a></p>\\n<p>Gerben /  Decentralized tech team &amp; <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"http://redecentralize.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"1\\\" data-reactroot=\\\"\\\">Redecentralize.org</a> editor<br />\\nGerben contributes by making the website decentralized across Hypercore &amp; IPFS.<br />\\n<a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://twitter.com/johnconorryan\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"0\\\" data-reactroot=\\\"\\\">twitter</a>  ‧  <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://www.johnconorryan.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"2\\\" data-reactroot=\\\"\\\">johnconorryan.com</a>  ‧  <a class=\\\"notion-link-token notion-enable-hover\\\" href=\\\"https://johnconorryan.medium.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" data-token-index=\\\"4\\\" data-reactroot=\\\"\\\">blog posts</a></p>\\n",
                    "title": "The website team",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Join the team",
                    "button_link_direction": "internal",
                    "button_link_url": "/join-the-team",
                    "text": "It takes millions to build a movement and we aspire to harness that kind of energy and support around the world. We need talented organizers, writers, designers, and engineers to coordinate our collective efforts. Interested in being part of the team?  We have a list of positions we’re hoping to fill. Or tell us how you’d like to get involved by emailing us a dweb [at] archive.org.",
                    "title": "Volunteer",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/DWeb-contact-newsletter-color03.png"
                      },
                      "id": "4c89e619-532e-516a-9c5f-8b3266b53747"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "e930e008-445f-5cb2-aee7-3629e3b6eed8",
            "wordpress_id": 636,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<h2>Overview​</h2>\\n<p>The Decentralized Web network hosts events that bring together a community of professionals from around the world. It is a space inclusive of persons of all backgrounds, orientations and identities. Dialogue, mutual respect and sharing are at the foundation of the Decentralized Web community and we expect all participants to follow these values. These guidelines help us establish collective trust and engage in productive deliberation.</p>\\n<p>Your safety and comfort are our priority. If you have questions or concerns at any point before, during or after the conference, contact us at ethics@archive.org or during the event contact one of the event hosts.</p>\\n<p>These guidelines apply to all spaces, real and virtual, during all DWeb events, as well as during set-up and tear down.</p>\\n<h2>Expected Behavior</h2>\\n<h3>01. Respect</h3>\\n<p>All participants and event staff should strive to treat each other with dignity and respect, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, and religion.</p>\\n<p>Respect the privacy–both physical and digital–of others.</p>\\n<ol>\\n<li>If you want to take a picture, make sure you have consent from the participants. Wearing a yellow lanyard signifies people who have asked not to be photographed.</li>\\n<li>Follow the Chatham House Rule when mentioned:<br />\\n“When a meeting, or part thereof, is held under the Chatham House Rule, participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.”</li>\\n</ol>\\n<h3>02. Collaboration</h3>\\n<p>Be open to new ideas and learning from others–we are stronger when we share.</p>\\n<p>In moments of strong disagreement, we ask participants to &#8220;agree to disagree,&#8221; stay focused on the goals of the session or discussion, and move on to address shared needs and shared opportunities.</p>\\n<p>We encourage all present to make it a point where possible to talk to strangers and those you know less well, as they are hopefully friends you have not yet met.</p>\\n<h3>03. Inclusion</h3>\\n<p>When in doubt, mingle! We all have different perspectives that can help each other in worthwhile and unexpected ways.</p>\\n<p>In this spirit, avoid jargon, acronyms and complicated phrasing whenever possible.</p>\\n<p>Everyone at Decentralized Web events should feel included and it is to everyone’s advantage to be mindful and productively engaged with people from a variety of cultural contexts, communities and regions.</p>\\n<p>Follow the &#8220;Rule of 1&#8221; and the &#8220;Rule of n&#8221;: When you speak, make 1 point and then let others speak, and when in a group of &#8220;n&#8221; people, speak &#8220;1/nth&#8221; of the time.</p>\\n<h3>04. Communication</h3>\\n<p>When listening to input and comments of others, start by assuming the most benign interpretation and the best intention of the speaker. If a comment is phased in a way that might be misinterpreted, ask for clarification of the statement or intent. If the comment is discomforting (or hostile), please reach out to an event organizer.</p>\\n<p>Whether in panels or in informal conversation, be mindful not to interrupt others. Listen actively and others will return in kind.</p>\\n<p>Avoid grandstanding whenever possible and allow others to participate. The more concise and relatable your point is, the greater impact it will have on other participants.</p>\\n<h2>Unacceptable Behavior</h2>\\n<p>We will not tolerate predatory behavior or disregard for other persons, either personally or professionally, from or towards anyone—be it speakers, staff or participants.</p>\\n<p>We will not tolerate harassment in any form.</p>\\n<p>If you are being harassed, you notice that someone else is being harassed, or have any other concerns, please contact an event organizer or use prudence and attempt to mitigate the action yourself. Do not resort to physical contact except in self defense.</p>\\n<p>Those who violate our code of conduct may be warned, sanctioned, or expelled at the discretion of the organizers with no refund.</p>\\n<h2>Raising Issues at a DWeb Event</h2>\\n<p>If you believe you‘re experiencing practices at the DWeb event that do not meet our Code of Conduct guidelines, or if you feel you are being harassed in any way, please immediately contact the event organizer and our DWeb Code of Conduct Team. Email: ethics@archive.org</p>\\n<p>The DWeb organizers reserve the right to refuse admission to anyone violating these policies, and/or take further action including expulsion from the event.</p>\\n<p>This document borrows from:<br />\\nhttps://2016.decentralizedweb.net/conduct/<br />\\nhttps://www.mozilla.org/en-US/about/governance/policies/participation/</p>\\n<blockquote class=\\\"wp-embedded-content\\\" data-secret=\\\"D2wYeF5lxj\\\"><p><a href=\\\"https://www.rightscon.org/code-of-conduct/\\\">Code of Conduct</a></p></blockquote>\\n<p><iframe class=\\\"wp-embedded-content\\\" sandbox=\\\"allow-scripts\\\" security=\\\"restricted\\\" style=\\\"position: absolute; clip: rect(1px, 1px, 1px, 1px);\\\" title=\\\"&#8220;Code of Conduct&#8221; &#8212; RightsCon Summit Series\\\" src=\\\"https://www.rightscon.org/code-of-conduct/embed/#?secret=D2wYeF5lxj\\\" data-secret=\\\"D2wYeF5lxj\\\" width=\\\"600\\\" height=\\\"338\\\" frameborder=\\\"0\\\" marginwidth=\\\"0\\\" marginheight=\\\"0\\\" scrolling=\\\"no\\\"></iframe><br />\\nhttps://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy<br />\\nhttps://facilitation.aspirationtech.org/index.php?title=Participants:Guidelines<br />\\nhttps://foundation.wikimedia.org/wiki/Friendly_space_policy</p>\\n<blockquote class=\\\"wp-embedded-content\\\" data-secret=\\\"qSBzWFmbff\\\"><p><a href=\\\"https://whatever.scalzi.com/2013/07/02/my-new-convention-harassment-policy/\\\">My New Convention Harassment Policy</a></p></blockquote>\\n<p><iframe class=\\\"wp-embedded-content\\\" sandbox=\\\"allow-scripts\\\" security=\\\"restricted\\\" style=\\\"position: absolute; clip: rect(1px, 1px, 1px, 1px);\\\" title=\\\"&#8220;My New Convention Harassment Policy&#8221; &#8212; Whatever\\\" src=\\\"https://whatever.scalzi.com/2013/07/02/my-new-convention-harassment-policy/embed/#?secret=qSBzWFmbff\\\" data-secret=\\\"qSBzWFmbff\\\" width=\\\"600\\\" height=\\\"338\\\" frameborder=\\\"0\\\" marginwidth=\\\"0\\\" marginheight=\\\"0\\\" scrolling=\\\"no\\\"></iframe></p>\\n<blockquote class=\\\"wp-embedded-content\\\" data-secret=\\\"lZGOOau781\\\"><p><a href=\\\"https://www.diglib.org/about/code-of-conduct/\\\">DLF Code of Conduct</a></p></blockquote>\\n<p><iframe class=\\\"wp-embedded-content\\\" sandbox=\\\"allow-scripts\\\" security=\\\"restricted\\\" style=\\\"position: absolute; clip: rect(1px, 1px, 1px, 1px);\\\" title=\\\"&#8220;DLF Code of Conduct&#8221; &#8212; DLF\\\" src=\\\"https://www.diglib.org/about/code-of-conduct/embed/#?secret=lZGOOau781\\\" data-secret=\\\"lZGOOau781\\\" width=\\\"600\\\" height=\\\"338\\\" frameborder=\\\"0\\\" marginwidth=\\\"0\\\" marginheight=\\\"0\\\" scrolling=\\\"no\\\"></iframe><br />\\nhttps://confcodeofconduct.com/<br />\\nhttps://www.drupal.org/dcoc</p>\\n",
                    "title": "DWeb Events Code of Conduct",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "26638ed0-380c-5deb-8d83-faec860f93e8",
            "wordpress_id": 551,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p>We would like DWeb ideas and &#8230; reach everyone &#8230;copy goes here that to be seen and heard we need more people to the comms team&#8230;</p>\\n<p>if you think we should be present elsewhere too in order to reach more people, and if you are willing to help, email us &#8230;</p>\\n<p>or</p>\\n<p>Help us make the DWeb voice stronger and more consistent in the existing channels&#8230; &gt;&gt; link to volunteering roles.</p>\\n",
                    "title": "Help DWeb ideas spead",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "f35ddb0a-a88d-5f61-ad68-9dfdea0e66dc",
            "wordpress_id": 548,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p><span style=\\\"font-weight: 400;\\\">There is much work to be done to build a decentralized web. We are committed to sharing knowledge and resources to enable anyone to jump in and get involved. Here is an ever-growing list of resources to help you along the way. If you have a resource to share, please email us at dweb (at) archive.org.</span></p>\\n<h2>Starting out</h2>\\n<p><a href=\\\"https://simplysecure.org/blog/wireframing-intro\\\">Illustrated Quick-start intro to wireframing</a><span style=\\\"font-weight: 400;\\\"><br />\\nThis 90-minute boot camp by Simply Secure will help you consider the user experience before you build any website or tool.</span></p>\\n<p><a href=\\\"https://decentralizedweb.net/videos/workshop-distributed-web-of-care-trailer/\\\">Workshop Trailer: Distributed Web of Care</a> by <span style=\\\"font-weight: 400;\\\">Artist, Taeyoon Choi<strong> &#8211; </strong>who simulates the P-2-P nature of the Decentralized Web in this interactive exercise</span></p>\\n<p><a href=\\\"https://decentralizedweb.net/videos/workshop-internet-as-a-city-workshop-trailer/\\\">Workshop Trailer</a><span style=\\\"font-weight: 400;\\\"> &amp; </span><a href=\\\"https://decentralizedweb.net/internet-as-a-city/\\\">Internet as a City Workshop</a> by Agnes Cameron &amp; Gary Zhang<br />\\n<span style=\\\"font-weight: 400;\\\">In this hands-on workshop, you&#8217;ll examine decentralized forms of networking through the lenses of cities, urbanism, and architecture. </span></p>\\n<p><a href=\\\"https://decentralizedweb.net/videos/workshop-prototyping-a-decentralized-web-with-browser-exensions-trailer/\\\">Workshop Trailer</a> &amp; <a href=\\\"https://decentralizedweb.net/prototyping-the-decentralized-web-with-browser-extensions/\\\">Workshop Prototyping the Decentralized Web with Browser Extensions</a> by Omayeli Arenyeka &amp; Andres Cuervo<br />\\n<span style=\\\"font-weight: 400;\\\">This workshop explores building browser extensions as an exercise in speculating about a better web. It allows non-technical people to play with data ownership and other core concepts in the DWeb.</span></p>\\n<p><a href=\\\"https://decentralizedweb.net/videos/workshop-p2p2p2p-trailer/\\\"><span style=\\\"font-weight: 400;\\\">Workshop Trailer</span></a><span style=\\\"font-weight: 400;\\\"> and </span><a href=\\\"https://decentralizedweb.net/p2p2p2p-workshop/\\\">P2P2P2Pp Workshop</a> by Kyle Mock and Laurel Schwulst<br />\\n<span style=\\\"font-weight: 400;\\\">Using Beaker Browser, the leaders take you through the steps of building a P2P website</span></p>\\n<p><a href=\\\"https://bloomnetwork.org/introduction-to-the-decentralized-web-may-2020/\\\"><span style=\\\"font-weight: 400;\\\">Introduction to the Decentralized Web</span></a><span style=\\\"font-weight: 400;\\\"> by Christina Bowen &amp; John Light<br />\\n</span><span style=\\\"font-weight: 400;\\\">In Bloom’s monthly meetup, DWeb leaders explain the basics, from “what is DAT and Holochain?” to how do you govern in the DWeb?</span></p>\\n<h2>DWeb design</h2>\\n<p><a href=\\\"https://decentpatterns.xyz/\\\">Decentralization, off the shelf</a><br />\\nA library of resources, assets, and patterns to support the design and development of better user-facing applications that are backed by decentralized architecture.</p>\\n<p><a href=\\\"https://simplysecure.org/knowledge-base/\\\"><span style=\\\"font-weight: 400;\\\">Simply Secure’s Knowledge Base</span></a><span style=\\\"font-weight: 400;\\\"><br />\\nBest practices for designers, developers, or researchers hoping to build trustworthy and privacy-protecting technology.</span></p>\\n<p><a href=\\\"https://simplysecure.org/blog/decentral-patterns\\\"><span style=\\\"font-weight: 400;\\\">Design Patterns for Decentralized Systems</span></a><span style=\\\"font-weight: 400;\\\"><br />\\nWhat are the high-level patterns (in interfaces, workflows &amp; writings) in decentralized and federated systems?</span></p>\\n<h2>Get hands on!</h2>\\n<p><a href=\\\"https://dweb-camp-2019.github.io/meshnet/\\\">Meshnet at DWeb Camp 2019</a><br />\\nThis website documents the design, build, and stewardship of the participatory mesh network at <a href=\\\"http://dwebcamp.org\\\">DWeb Camp 2019</a>. <span style=\\\"font-weight: 400;\\\">It includes hardware inventories, design plans, and photographs. Invaluable to anyone hoping to build their own community-created mesh network.</span></p>\\n<p><a href=\\\"https://www.youtube.com/watch?v=F0FCI8GxO5I\\\">Cryptoeconomics: An Introduction</a> by Karl Floersch, Ethereum Foundation<span style=\\\"font-weight: 400;\\\"><br />\\n</span><span style=\\\"font-weight: 400;\\\">This is a 20-minute introductory video to a more in-depth online course that Karl designed for the masses.</span></p>\\n<p><a href=\\\"https://cryptoeconomics.study/\\\">Cryptoeconomics.study</a><span style=\\\"font-weight: 400;\\\"><br />\\nA free, open-source course on the fundamentals of Blockchain protocols with fast-paced lectures, coding assignments, and a community forum for questions and support.</span></p>\\n<h2><b>Videos</b></h2>\\n<p><a href=\\\"https://decentralizedweb.net/videos/\\\">Talks, Panels &amp; Workshops</a><span style=\\\"font-weight: 400;\\\"> from the </span><a href=\\\"https://decentralizedweb.net/\\\"><span style=\\\"font-weight: 400;\\\">Decentralized Web Summit 2018: Global Visions/Working Code</span></a></p>\\n<p><span style=\\\"font-weight: 400;\\\"><a href=\\\"https://2016.decentralizedweb.net/\\\">Talks, Panels, Lightning Rounds</a> from the </span><a href=\\\"https://2016.decentralizedweb.net/\\\"><span style=\\\"font-weight: 400;\\\">Decentralized Web Summit 2016: Locking the Web Open</span></a></p>\\n<p><a href=\\\"https://dwebcamp.org/videos/\\\"><span style=\\\"font-weight: 400;\\\">Lightning Talks</span></a><span style=\\\"font-weight: 400;\\\"> from </span><a href=\\\"https://dwebcamp.org/\\\"><span style=\\\"font-weight: 400;\\\">DWeb Camp 2019</span></a></p>\\n<h2>Regulation papers</h2>\\n<p><a href=\\\"http://thinkblocktank.org/publications/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">EU Token Regulation Paper</a> that aims to analyze the EU legal and regulatory framework applicable to token sales in Europe.</p>\\n<p><a href=\\\"https://inatba.org/reports/inatba-identity-working-group-paper/\\\">Position Paper on Decentralised Identity</a> by INATBA Identity Working Group.</p>\\n<h2><b>Maps of the Ecosystem</b></h2>\\n<p><a href=\\\"https://kumu.io/DigLife/decentralized-tech\\\">Mapping Decentralized Tech</a><span style=\\\"font-weight: 400;\\\"> (2018)<br />\\n</span><span style=\\\"font-weight: 400;\\\">Using a technology called Kumu.io, Christina Bowen and Robert Best invite Decentralized Tech projects and protocols  to put themselves on the map, along with the network of projects they are working with.</span></p>\\n",
                    "title": "Our growing list of DWeb Resources",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "fe19b005-3ccd-536b-a4ba-ebb29a558ec3",
            "wordpress_id": 544,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p><span style=\\\"font-weight: 400;\\\">Want to get involved in building the DWeb movement? We need people with many skills and interests. If one of these roles is not a perfect fit, please suggest a way you might get involved by writing to us at dweb [at] archive.org</span></p>\\n",
                    "title": "DWeb Volunteer needs",
                    "hero_image_desktop": {
                      "id": "5126d974-83e8-5b12-bb89-ac6286b7920c",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/01/Volunteering-hero-WT-1280.png"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "82b27529-130f-5308-b532-77fb1636fa7d",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/01/Volunteering-hero-WT-mob.png"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<h2>Website team</h2>\\n<h3>Content managers</h3>\\n<p>Upload new events from our nodes, select and upload new articles and videos, to keep our website up-to-date with a constant flow of new content (2-3 hours/month)</p>\\n<h3>Volunteer coordinator</h3>\\n<p>When members pop up through email or in person, you’ll be the one to reach back out to them, hear what they are interested in doing, and connect the volunteer with the opportunities. This position requires a “human resource” orientation and great people skills. (1-2 hours/month)</p>\\n<h3>Node coordinator</h3>\\n<p>When someone applies to start a new node, you’ll be the first person to reach back out, talk to them about their motivation and vision, and walk them through the on-boarding process. We have an on-boarding kit with graphics and assets that you’ll share, and help get them going in Meetup.com and our website. (1-2 hours/month; varies depending on demand)</p>\\n<h3>Frontend developer</h3>\\n<p>We are looking for someone that can polish this website with delightful micro-interactions and lightweight transitions, making it fast to load and perfectly displayed from browser to browser. You will collaborate with our designer and other developers, and of course, you can go absolutely bananas with your creativity. Drop a line at iryna [at] jolocom.io if you would like to know more about this role.</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<h2>Events team</h2>\\n<h3>Event producers</h3>\\n<p>Help manage the flow of attendees, answer questions, staff the Zoom back end, and plan for each monthly meetup. (2-3 hours/month)</p>\\n<h3>Videographer/ live stream coordinator</h3>\\n<p>In person events require a solid live streaming option for people around the world to attend. We’re looking for someone to take this on for DWeb Camp and perhaps a few other live events. (Varies, but intensive during DWeb Camp)</p>\\n<h3>Archivists</h3>\\n<p>After each main event, you’ll be gathering the assets for long-term preservation on Archive.org and other decentralized storage options. Photos, videos, writings, code should be archived with good metadata for the future. (2-3 hours/month)</p>\\n<h3>Gather.town developer</h3>\\n<p>Most months, the DWeb Community hangs out in our custom site on Gather.town. We can make it as customized and comfortable as we want. Help us make this DWeb environment fun, with sounds, libraries, artwork: the landscape is wide open. You do not need to be highly technical to play this role. (1-2 hours/month; varies)</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "cta_button",
                  "cta_button": {
                    "button_caption": "Yes, count me in!",
                    "button_link_direction": "external",
                    "button_link_url": "mailto:dweb@archive.org",
                    "text": "Did you find a role that sounds like it is you? Or do you have other superpowers that will help the DWeb movement? \\r\\nGet onboard!",
                    "title": "Use your skills to make a difference."
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "c8e2bc30-8056-5c8c-acc4-931633cb3dcb",
            "wordpress_id": 535,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p><span style=\\\"font-weight: 400;\\\">No DWeb node in your area? </span><span style=\\\"font-weight: 400;\\\">Maybe you should start one. </span></p>\\n<p><span style=\\\"font-weight: 400;\\\">Local DWeb groups are run by passionate volunteer leaders whose goals align with our principles. It’s a chance to gather like-minded people locally, to explore, collaborate, create opportunities to participate and share knowledge about the Decentralized Web and its principles. Read more about what it takes to run a DWeb Node <a href=\\\"http://getdweb.net/faq\\\">here</a>.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">Here are some of the conditions you should consider when applying:</span></p>\\n<ul>\\n<li style=\\\"font-weight: 400;\\\" aria-level=\\\"1\\\"><span style=\\\"font-weight: 400;\\\">Geographic location — Where are you based and in what area would you like to build a DWeb community? Typically it would be at the city level but it’s possible it could cover a larger region.</span></li>\\n<li style=\\\"font-weight: 400;\\\" aria-level=\\\"1\\\"><span style=\\\"font-weight: 400;\\\">Purpose — Nodes are for establishing a local hub for conversations and networking around DWeb projects. They serve to educate, share knowledge, and connect people of diverse backgrounds interested in building a better web. They are not for companies to promote their products. Please consider who else in your area would be involved in this node.</span></li>\\n</ul>\\n<h2><span style=\\\"font-weight: 400;\\\">Want to get started? </span></h2>\\n<p><span style=\\\"font-weight: 400;\\\">Get in touch with us to start a new Node by emailing </span><a href=\\\"mailto:dweb@archive.org\\\">dweb [at] archive.org</a><span style=\\\"font-weight: 400;\\\">. Please include the following information:<br />\\n</span></p>\\n<ol>\\n<li><span style=\\\"font-weight: 400;\\\">Name</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Email</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Affiliation: org, company, university</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Location</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Website</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Names of other potential Node Stewards</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Please describe your DWeb project.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Have you been involved in other DWeb events hosted by the Archive? If yes, please describe your experiences.</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Why do you want to start a Node in your area?</span></li>\\n<li><span style=\\\"font-weight: 400;\\\">Anything else we should know?</span></li>\\n</ol>\\n",
                    "title": "Apply to start a DWeb Node",
                    "hero_image_desktop": {
                      "id": "143b6925-8951-5f79-8a18-923109a5e688",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/start-a-node-hero-02.png"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "57255331-57a3-505a-82d9-e2e076912acf",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/02/start-a-node-mob-02.png"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                },
                {
                  "block_type": "feature_block",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "Explore events",
                    "button_link_direction": "internal",
                    "button_link_url": "/#events",
                    "text": "Attend an event, join a local node and help DWeb leaders grow the global community.",
                    "title": "Other ways to get involved?",
                    "image": {
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/01/DWebDesign3-BLN-eileen.jpeg"
                      },
                      "id": "1e5b3b42-a7c3-51e7-aba5-4da4f93757fc"
                    }
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "c9c10642-b310-5736-af96-5c08375767e9",
            "wordpress_id": 529,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "opening",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "<p><span style=\\\"font-weight: 400;\\\">&#8230;in 2014, when Joachim Lohkamp brought an intrepid group of technologists from Europe to host the first unconference about decentralization &#8211; GETDecentralized that attracted about fifty participants to a red Victorian Bed and Breakfast in San Francisco. For one participant, computer scientist, Brewster Kahle, <a href=\\\"https://archive.org/details/getdconference-brewsterkahle\\\">the discussions planted a seed</a>.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">In 2015, Brewster Kahle, the founder of the nonprofit Internet Archive, was asked to present a “</span><a href=\\\"https://blog.archive.org/2015/02/11/locking-the-web-open-a-call-for-a-distributed-web/\\\"><span style=\\\"font-weight: 400;\\\">moonshot for the Internet</span></a><span style=\\\"font-weight: 400;\\\">” to five major US philanthropies. “We need to lock the Web open for good,” Kahle told them. “We need to bake our values into the code: security, privacy, reliability.” He challenged builders to create a new, distributed Web.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">Soon, early Decentralized Web pioneers started to answer that call. In June 2016, the Internet Archive hosted the first </span><a href=\\\"https://2016.decentralizedweb.net/\\\"><span style=\\\"font-weight: 400;\\\">Decentralized Web Summit</span></a><span style=\\\"font-weight: 400;\\\">, including a </span><a href=\\\"https://2016.decentralizedweb.net/builders-day/\\\"><span style=\\\"font-weight: 400;\\\">Builders Day</span></a><span style=\\\"font-weight: 400;\\\"> that brought together 80 early leaders and thinkers of decentralized tech. Some 350 participants came to the classic temple that houses the Internet Archive to explore the different “layers of the stack” that would need to be decentralized to fulfill an expansive vision. </span></p>\\n<p><span style=\\\"font-weight: 400;\\\">At that gathering, Juan Benet demonstrated the first fully decentralized web site.  Karissa McKelvey showed the world the first browser-based implementation of the DAT protocol. There was a sense, participants say, of the beginning of something revolutionary and new.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">In 2018, the </span><a href=\\\"https://decentralizedweb.net/\\\"><span style=\\\"font-weight: 400;\\\">Decentralized Web Summit—Global Vision/ Working Code</span></a><span style=\\\"font-weight: 400;\\\">  attracted more than 1000 participants from around the world. The central premise: that tech alone will not save us&#8211;we will need the laws, business models and values to all align behind decentralization if this new movement is to succeed. In just two years, developers were demonstrating  prototypes and working code.  </span><a href=\\\"https://decentralizedweb.net/videos/\\\"><span style=\\\"font-weight: 400;\\\">Panels, lightning talks, global fellows events, governance workshops and art </span></a><span style=\\\"font-weight: 400;\\\">inspired by decentralization burst from two dozen spaces in the historic US Mint building in San Francisco. As cryptocurrencies were beginning to fuel these fledgling organizations, how appropriate that this group gathered in a place where the majority of the nation’s gold was once stored.</span></p>\\n<p><span style=\\\"font-weight: 400;\\\">In 2019, the Decentralized Web became known as the “DWeb,” and organizers decided to create an altogether new experience, </span><a href=\\\"https://dwebcamp.org/\\\"><span style=\\\"font-weight: 400;\\\">DWeb Camp</span></a><span style=\\\"font-weight: 400;\\\">. Set on a remote farm off the coast of California, the camp drew 450 builders and dreamers reimagining our relationship to technology and the planet. A co-created event, DWeb Camp inspired organizers from Berlin to Shanghai, Austin to Prague to step forward and  form local “nodes” of those curious about decentralized tech. These groups around the globe continue to meet, write and share knowledge. </span></p>\\n<p><span style=\\\"font-weight: 400;\\\">The goal, however, remains the same as it was in 2014: to create a better web— the web we want, the web we deserve. A Decentralized Web.</span></p>\\n",
                    "title": "DWeb story begins...",
                    "hero_image_desktop": {
                      "id": "bfd02911-23ef-58f4-a5a4-6ce9f4fcb45c",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/01/DWeb-about-page-1280xs.png"
                      }
                    },
                    "hero_image_mobile": {
                      "id": "8a4e9b55-750d-5a7f-ae57-ae839ee9c589",
                      "localFile": {
                        "url": "https://getdweb.net/wp-content/uploads/2021/01/DWeb-about-page-mob.jpg"
                      }
                    }
                  },
                  "body_content": {
                    "text": ""
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          },
          {
            "id": "b4320bf3-27cb-53f9-8770-f21fd934a049",
            "wordpress_id": 3,
            "acf": {
              "page_blocks": [
                {
                  "block_type": "body_content",
                  "cta_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": ""
                  },
                  "feature_block": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": "",
                    "text": "",
                    "title": "",
                    "image": null
                  },
                  "highlighted_statement_content": {
                    "author": "",
                    "background_color": "transparent",
                    "quote": "",
                    "background_image": null
                  },
                  "opening_section_content": {
                    "text": "",
                    "title": "",
                    "hero_image_desktop": null,
                    "hero_image_mobile": null
                  },
                  "body_content": {
                    "text": "<p>As a project of the Internet Archive, this website follows its <a href=\\\"https://archive.org/about/terms.php\\\">Terms of Use, Privacy Policy, and Copyright Policy</a>.</p>\\n"
                  },
                  "body_wide_image": {
                    "image": null
                  },
                  "body_button": {
                    "button_caption": "",
                    "button_link_direction": "",
                    "button_link_url": ""
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
  `)
    // Then...
    // if (result.errors) {
    //   result.errors.forEach(e => console.error(e.toString()))
    //   return Promise.reject(result.errors)
    // }

    const pageTemplate = path.resolve(`./src/templates/page.js`)

    // Only publish pages with a `status === 'publish'` in production. This
    // excludes drafts, future posts, etc. They will appear in development,
    // but not in a production build.

    const allAcfPages = result.data.allWordpressAcfPages.nodes

    const acfPages = [];
    _.each(allAcfPages, (acfPage) => {
      acfPages[acfPage.wordpress_id] = acfPage
    });

    const allPages = result.data.allWordpressPage.edges

    const pages =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPages)
        : allPages

    // Call `createPage()` once per WordPress page
    _.each(pages, ({ node: page }) => {
      createPage({
        path: `/${page.slug}/`,
        component: pageTemplate,
        context: {
          page: acfPages[page.wordpress_id],
        },
      })
    })

    // Then...
    const indexTemplate = path.resolve(`./src/templates/index.js`)

    createPage({
      path: `/`,
      component: indexTemplate,
      context: {},
    })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
