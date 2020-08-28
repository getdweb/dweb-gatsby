import React from 'react'
import Layout from '../components/Layout'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const FaqPage = () => {
  const content = 
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <Faq />
          <Footer />
        </div>
      </div>
    </div>

  return (
    <Layout content={content}></Layout>
  )
}

export default FaqPage


