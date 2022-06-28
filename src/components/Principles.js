import React, {useState} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export default function Principles() {

  const data = JSON.parse(`{
  "data": {
    "wordpressAcfOptions": {
      "options": {
        "principles_header": "DWeb Principles",
        "principles_intro": "<p>PURPOSE AND ORIGIN</p>\\n<p>These principles define the values of a decentralized web based on enabling agency of all peoples. It is the basis for behavioral norms and mutual accountability.</p>\\n<p>These principles originate from members of the DWeb Community \\u2014 those involved with and convened by the Internet Archive\\u2019s work on the decentralized web. These stand alongside other sets of principles that share or expand upon these values, in recognition that our efforts to build a more just and equitable world are interdependent.</p>\\n",
        "principles_bottom_text": "<p>STEWARDS:<br />\\nMai Ishikawa Sutton<br />\\nJohn Ryan</p>\\n<p>CONTRIBUTORS:<br />\\nAdam Uhlir<br />\\nAllen \u201cGunner\u201d Gunn<br />\\nAndi Wong<br />\\nAya Miyaguchi<br />\\nBenedict Lau<br />\\nBrandon Wallace<br />\\nBrewster Kahle<br />\\nCynthia El Khoury<br />\\nDawn Walker<br />\\nGerben<br />\\nJay Carpenter<br />\\nJay Graber<br />\\nJoachim Lohkamp<br />\\nKarissa McKelvey<br />\\nKelsey Breseman<br />\\nMark Seery<br />\\nNathan Schneider<br />\\nNicol\u00e1s Pace<br />\\nWendy Hanamura<br />\\nYisi Liu</p>\\n<p>SUPPORTERS:<strong><br />\\n</strong>Aimee Fenech<br />\\nAlbert Ni<br />\\nAlejandro Mayoral Ba\u00f1os<br />\\nAlicia Urquidi D\u00edaz<br />\\nAna Jamborcic<br />\\nAndy Tudhope<br />\\nBrooke Kuhlmann<br />\\nCeline Nguyen<br />\\nchee rabbits<br />\\nChristina Bowen<br />\\nCode Red<br />\\nDaniel Chan<br />\\nDaniel Helm<br />\\nDennis Kibbe<br />\\nDiana Greer<br />\\nDivya Siddarth<br />\\nEse Ojo<br />\\nEther<br />\\nGolda Velez<br />\\nGyuri Lajos<br />\\nHeather Murschel<br />\\nHeather Shall<br />\\nJames Young<br />\\nJerome Lindberg<br />\\nJo\u00e3o Monge Ferreira<br />\\nJodi Blanton<br />\\nJohannes Ernst<br />\\nJohn A. Kunze<br />\\nJoy Zhang<br />\\nJuan Jos\u00e9 Ventre Tab\u00e1rez<br />\\nJulieta Keldjian Etchessarry<br />\\nKai Wagner<br />\\nKnyckolas Sutherland<br />\\nLotus Leaf<br />\\nLudwig Schuster<br />\\nMerlin van Lawick<br />\\nMichael McCallister<br />\\nMiguel Abambres<br />\\nNaomi Joy Smith<br />\\nNathan Montone<br />\\nPaul Frazee<br />\\nPaul Lindner<br />\\nPaul Trevithick<br />\\nPaulo Sales<br />\\nRabble aka Evan Henshaw-Plath<br />\\nRhonda Pemberton<br />\\nRich Jensen<br />\\nRiley Wong<br />\\nRobert Best<br />\\nRobert Mao<br />\\nRobi Roy<br />\\nRoland Osborne<br />\\nSandro Hawke<br />\\nScott Moore<br />\\nSean MacMannis<br />\\nSteffen Fritz<br />\\nSteven McKie<br />\\nTom\u00e1s Susemihl<br />\\nToni Santos<br />\\nVera Gillies<br />\\nYangbo Du<br />\\nYann Mauchamp<br />\\nZack Walsh</p>\\n<p>If you would like to add your name as a supporter, <a href=\\\"https://form.jotform.com/210466965675165\\\">please fill out this form</a>.</p>\\n",
        "principles": [
          {
            "description": "<ol>\\n<li aria-level=\\\"1\\\">We stand for technology that enables the primacy of people as beneficiaries of the technology, by upholding their security, privacy and self-determination.</li>\\n<li aria-level=\\\"1\\\">We urge coexistence and interoperability, and discourage walled gardens.</li>\\n<li aria-level=\\\"1\\\">We value open source code as a fundamental building block of an open and inclusive Web.</li>\\n<li aria-level=\\\"1\\\">We aim for peer-to-peer relationships, rather than hierarchical control and power imbalance.</li>\\n<li aria-level=\\\"1\\\">Our technologies must minimize surveillance and manipulation of people\\u2019s behavior, and optimize for social benefits and empower individuals to determine how and why their data is used.</li>\\n<li aria-level=\\\"1\\\">We believe that multiple technical means will be more effective than a single technical solution to achieve ethical and people-centric outcomes.</li>\\n</ol>\\n",
            "title": "01. Technology for Human Agency"
          },
          {
            "description": "<ol>\\n<li aria-level=\\\"1\\\">We believe that decentralized technologies will be most beneficial to society when the rewards and recognition of their success, monetary or otherwise, are distributed among those who contributed to that success.</li>\\n<li aria-level=\\\"1\\\">If that is infeasible, proportionate benefit should flow to the community at large.</li>\\n<li aria-level=\\\"1\\\">High concentration of organizational control is antithetical to the decentralized web.</li>\\n</ol>\\n",
            "title": "02. Distributed Benefits"
          },
          {
            "description": "<ol>\\n<li aria-level=\\\"1\\\">We support and encourage clear codes of conduct to ensure respectful behavior and accountability.</li>\\n<li aria-level=\\\"1\\\">We expect participants to remain mindful of, and take responsibility for, their speech and behavior, by acting out of respect for others and respecting physical and emotional boundaries.</li>\\n<li aria-level=\\\"1\\\">We stand for open and transparent organizational practices, motivations, and governance, in a manner that actively pursues equity, mutual trust, and respect.</li>\\n</ol>\\n",
            "title": "03. Mutual Respect"
          },
          {
            "description": "<ol>\\n<li aria-level=\\\"1\\\">The objective of building a decentralized web is to protect human rights and empower people, especially those who experience systemic inequity and prejudice.</li>\\n<li aria-level=\\\"1\\\">We stand for people having agency over their own data and relationships, rights to free expression, privacy, and knowledge, as these are essential to human empowerment and dignity.</li>\\n<li aria-level=\\\"1\\\">We condemn the use of distributed tools for activities antithetical to human rights, such as human trafficking; sexual, mental, or physical abuse; and arms trading.</li>\\n<li aria-level=\\\"1\\\">We encourage building with harm-reduction in mind, and support the adoption of mechanisms that mitigate the potential for abuse, and consideration of those \\u2018not at the table\\u2019 \\u2014 not connected, not users, and the disadvantaged.</li>\\n<li aria-level=\\\"1\\\">We encourage the development of tools and applications in many languages and forms, with a high degree of accessibility.</li>\\n</ol>\\n",
            "title": "04. Humanity"
          },
          {
            "description": "<ol>\\n<li aria-level=\\\"1\\\">We believe projects should aim to minimize ecological harm and avoid technologies that worsen environmental health.</li>\\n<li aria-level=\\\"1\\\">We value systems that work towards reducing energy consumption and device resource requirements, while increasing device lifespan by allowing repair, recycling, and recovery.</li>\\n</ol>\\n",
            "title": "05. Ecological Awareness"
          },
          {
            "description": "<p><a href=\\\"https://www.gida-global.org/care\\\">CARE Principles for Indigenous Data Governance</a></p>\\n<p><a href=\\\"https://www.humanetech.com/policy-principles\\\">Center for Humane Technology\\u2019s Policy Principles</a></p>\\n<p><a href=\\\"https://contractfortheweb.org/\\\">Contract for the Web</a></p>\\n<p><a href=\\\"https://decentpatterns.xyz/report/\\\">Decentralization Off The Shelf</a></p>\\n<p><a href=\\\"https://designjustice.org/read-the-principles\\\">Design Justice Principles</a></p>\\n<p><a href=\\\"http://detroitdjc.org/principles/\\\">Detroit Digital Justice Coalition Principles</a></p>\\n<p><a href=\\\"https://archive.org/details/governingthecommons\\\">Elinor Ostrom\\u2019s Principles for Governing the Commons</a></p>\\n<p><a href=\\\"https://ethicalsource.dev/principles/\\\">The Ethical Source Principles</a></p>\\n<p><a href=\\\"https://www.manifestno.com/\\\">Feminist Data Manifest-No</a></p>\\n<p><a href=\\\"https://feministinternet.org/en/principles\\\">Feminist Principles of the Internet</a></p>\\n<p><a href=\\\"https://www.rfc-editor.org/rfc/rfc8280.html\\\">Internet Research Task Force Research into Human Rights Protocol Considerations</a></p>\\n<p><a href=\\\"https://www.plan-systems.org/plan-technology-components/#design-principles\\\">PLAN Systems Technology Design Principles</a></p>\\n<p><a href=\\\"https://shared-digital.eu/\\\">A Shared Digital Europe</a></p>\\n<p><a href=\\\"https://www.un.org/en/about-us/universal-declaration-of-human-rights\\\">United Nations Universal Declaration of Human Rights</a></p>\\n",
            "title": "Related Principles"
          }
        ]
      }
    }
  }
}`)

  const options = data.data.wordpressAcfOptions.options;

  return (
    <div className="container faq">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <div className="header">{options.principles_header}</div>
          <div className="header-notice" dangerouslySetInnerHTML={{__html: options.principles_intro}}></div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-xs-12">
          <div className="faq-sections">
            {options.principles.map((principle) => {
              const pair = {
                question: principle.title, 
                answer:   principle.description
              }
              return (
                <FaqQuestion pair={pair} key={md5(pair.question)} />
              );
            })}
          </div>
          <div className="faq-notice" dangerouslySetInnerHTML={{__html: options.principles_bottom_text}}></div>
        </div>
      </div>
    </div>
  )
}