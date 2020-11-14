import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Network from '../components/Network'
import Events from '../components/Events'
import Voices from '../components/Voices'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const Index = () => {
  // const context = props.pageContext;
  const content = 
  <div>
    <Hero />
    <AboutUs />
    <Network />
    <Events />
    <Voices />
    <Partners />
    <Footer />
  </div>

  return (
    <Layout content={content}></Layout>
  )
}

export default Index

