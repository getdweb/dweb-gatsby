import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockUnzipper from '../components/PageBlockUnzipper'
import data_array from '../../static/page-data/dweb-camp-2022.yaml'

function DWebCamp2022Page() {
  const content = (
    <div>
      <PageBlockUnzipper data_array={data_array} />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default DWebCamp2022Page
