import React from 'react'
import Layout from '../components/Layout'
import Principles from '../components/Principles'
import Footer from '../components/Footer'

const PrinciplesPage = () => {
  const content = 
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <Principles />
          <Footer />
        </div>
      </div>
    </div>

  return (
    <Layout content={content}></Layout>
  )
}

export default PrinciplesPage


