import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Network from '../components/Network'
import Events from '../components/Events'
import Voices from '../components/Voices'
import Footer from '../components/Footer'

const Index = () => {
  // const context = props.pageContext;
  const content = 
  <div>
    <Hero />
    <div className="container">
      <div className="row">
        <div className="col col-12 col-xs-12">
          <Network />
          <Voices />
          <Events />
          <Footer />
        </div>
      </div>
    </div>
  </div>

  return (
    <Layout content={content}></Layout>
  )
}

export default Index

