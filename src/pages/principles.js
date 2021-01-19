import React from 'react'
import Layout from '../components/Layout'
import Principles from '../components/Principles'
import Footer from '../components/Footer'

const PrinciplesPage = () => {
  const content = <>
      <Principles />
      <Footer />
    </>

  return (
    <Layout content={content}></Layout>
  )
}

export default PrinciplesPage


