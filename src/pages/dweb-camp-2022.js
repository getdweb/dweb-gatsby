import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockHighlighted from '../components/PageBlockHighlighted'
import PageBlockWideImage from '../components/PageBlockWideImage'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockCTA from '../components/PageBlockCTA'
import data_array from '../../static/page-data/dweb-camp-2022.yaml'

function data_arrayPage() {
  const content = (
    <div>
      <PageBlockOpening fields={data_array[0].PageBlockOpening} />
      <PageBlockHighlighted fields={data_array[1].PageBlockHighlighted} />
      <PageBlockFeature fields={data_array[2].PageBlockFeature} />
      <PageBlockFeature fields={data_array[3].PageBlockFeature} />
      <PageBlockWideImage fields={data_array[4].PageBlockWideImage} />
      <PageBlockContent fields={data_array[5].PageBlockContent} />
      <PageBlockFeature fields={data_array[6].PageBlockFeature} />
      <PageBlockCTA fields={data_array[7].PageBlockCTA} />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default data_arrayPage
