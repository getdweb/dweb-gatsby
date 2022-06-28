import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Partners() {

  const data = JSON.parse(`{
  "data": {
    "wordpressAcfOptions": {
      "options": {
        "partners_header": "Sponsor the DWeb",
        "partners_intro": "<p>DWeb is a project of the nonprofit Gatherings for Good.</p>\\n<p>All DWeb events are co-created and powered by a global community of volunteer designers, developers, organizers and thought leaders.</p>\\n",
        "partners_left_button_caption": "Become a global sponsor",
        "partners_left_button_link": "/wp-content/uploads/2021/02/DWeb-Become-a-global-Sponsor.pdf",
        "partners_right_button_caption": "",
        "partners_right_button_link": "/#",
        "partners_sponsors": [
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Internet-Archive-logo.png"
              },
              "id": "266e5151-cdab-5dcb-bb93-2cba148068ac"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Ethereum-Foundation-logo.png"
              },
              "id": "868efdf9-0f95-532f-a87f-827e34bb0be7"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Ford-Foundation-logo.png"
              },
              "id": "a8433875-31f9-532c-b576-26d5f1cfc019"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Blue-Systems-logo.png"
              },
              "id": "958a0f1b-3523-5111-977a-e9ee88abf07a"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Holo-logo.png"
              },
              "id": "98ebaa69-3a32-5699-a940-9ea72dbb3750"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Hyperledger-logo.png"
              },
              "id": "5fabed45-1e8e-59a9-8c00-cde524b97894"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Jolocom-logo.png"
              },
              "id": "3ee019e3-0e79-58bd-9590-f24d2b5b6fad"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Web3Foundation-logo.png"
              },
              "id": "929a60b3-8d8f-5e96-b5fd-0304f1a3f239"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/MaidSafe-logo.png"
              },
              "id": "e3fe81da-b103-51a9-a256-0e1146db438b"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/OmniseGo-logo.png"
              },
              "id": "66d1a89b-fd44-5332-a834-2aac8eab62ef"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Orchid-logo.png"
              },
              "id": "2eda26b1-0378-5283-bf9e-1ef00cc8b6ef"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Protocol-Labs-logo.png"
              },
              "id": "1ace752d-1893-5ff1-b663-a1448c4bbfa1"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2020/12/Sloan-Foundation-logo.png"
              },
              "id": "89f88b97-391c-5200-942d-335f21d40e26"
            }
          },
          {
            "logo": {
              "localFile": {
                "url": "https://getdweb.net/wp-content/uploads/2021/08/Stacks-logo.jpg"
              },
              "id": "ebf3bc45-3d75-5b05-8a46-d42a189c3c91"
            }
          }
        ],
        "partners_sponsors_text": "We are grateful for the generous support of sponsors:"
      }
    }
  }
}`)

  const options = data.data.wordpressAcfOptions.options;
  let i = 0;

  const leftButton = <Link to={options.partners_left_button_link} className="btn">{options.partners_left_button_caption}</Link>;
  const rightButton = options.partners_right_button_caption != "" ? <Link to={options.partners_right_button_link} className="btn">{options.partners_right_button_caption}</Link> : "";

  return (
    <div className="partners" id="partners">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header">{options.partners_header}</div>
            <div className="partners__intro" dangerouslySetInnerHTML={{__html: options.partners_intro}}></div>
            <div className="partners__buttons">
              {leftButton}
              {rightButton}
            </div>
            <div className="partners__middletext">{options.partners_sponsors_text}</div>
          </div>
        </div>
      </div>
      <div className="logos">
        {options.partners_sponsors.map((sponsor) => {
          i++;
          const sponsorLogoUrl = sponsor.logo.localFile !== null ? sponsor.logo.localFile.url : "";
          return (
            <div 
              className="logos__item" 
              key={sponsor.logo.id + i}
              style={{backgroundImage: `url(${sponsorLogoUrl})`}}>
            </div>
          );
        })}
      </div>
    </div>
  )
}