import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import contact from '../../static/page-data/Contact.yaml'

function ContactPage() {
  const content = (
    <div>
      <PageBlockOpening
        fields={contact[0].PageBlockOpening}
      />
      <PageBlockFeature
        fields={contact[1].PageBlockFeature} />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default ContactPage
