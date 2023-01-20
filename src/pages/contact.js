import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import data_array from '../../static/page-data/Contact.yaml'

function data_arrayPage() {
  const content = (
    <div>
      <PageBlockOpening fields={data_array[0].PageBlockOpening} />
      <PageBlockFeature fields={data_array[1].PageBlockFeature} />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default data_arrayPage
