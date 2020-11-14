import React from 'react'
import Layout from '../components/Layout'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const FaqPage = () => {
  const content = 
    <div>
      <Faq />
      <Footer />
    </div>

  return (
    <Layout content={content}></Layout>
  )
}

export default FaqPage


