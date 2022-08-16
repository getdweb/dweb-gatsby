import React from 'react'

import Layout from '../components/Layout'
import GetInvolvedHero from '../components/GetInvolvedHero'
import GetInvolvedQuote from '../components/GetInvolvedQuote'
import BuildingBlocks from '../components/BuildingBlocks'
import QuotesSlider from '../components/QuotesSlider'
import Partners from '../components/Partners'
import Footer from '../components/Footer'


function GetInvolvedPage() {
  
  const content = 
    <div>
      <GetInvolvedHero />
      <GetInvolvedQuote />
      <BuildingBlocks />
      <QuotesSlider />
      <Partners />
      <Footer />
    </div>

  return (
    <Layout content={content} />
  )
}

export default GetInvolvedPage


