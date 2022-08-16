import React from 'react'
import Layout from '../components/Layout'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

function FaqPage() {
  const content = 
    <div>
      <Faq />
      <Footer />
    </div>

  return (
    <Layout content={content} />
  )
}

export default FaqPage


