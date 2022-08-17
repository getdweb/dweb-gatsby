import React from 'react'
import Layout from '../components/Layout'
import Principles from '../components/Principles'
import Footer from '../components/Footer'

function PrinciplesPage() {
  const content = (
    <>
      <Principles />
      <Footer />
    </>
  )

  return <Layout content={content} />
}

export default PrinciplesPage
