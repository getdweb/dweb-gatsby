import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockHighlighted from '../components/PageBlockHighlighted'
import PageBlockWideImage from '../components/PageBlockWideImage'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockCTA from '../components/PageBlockCTA'
import dwebcamp2022 from '../../static/page-data/dweb-camp-2022.yaml'

function DWebCamp2022Page() {
  const content = (
    <div>
      <PageBlockOpening fields={dwebcamp2022[0].PageBlockOpening} />
      <PageBlockHighlighted fields={dwebcamp2022[1].PageBlockHighlighted} />
      <PageBlockFeature fields={dwebcamp2022[2].PageBlockFeature} />
      <PageBlockFeature fields={dwebcamp2022[3].PageBlockFeature} />
      <PageBlockWideImage fields={dwebcamp2022[4].PageBlockWideImage} />
      <PageBlockContent fields={dwebcamp2022[5].PageBlockContent} />
      <PageBlockFeature fields={dwebcamp2022[6].PageBlockFeature} />
      <PageBlockCTA fields={dwebcamp2022[7].PageBlockCTA} />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default DWebCamp2022Page
