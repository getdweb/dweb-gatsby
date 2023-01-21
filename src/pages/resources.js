import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockUnzipper from '../components/PageBlockUnzipper'
import data_array from '../../static/page-data/resources.yaml'

function ResourcesPage() {
    const content = (
        <div>
            <PageBlockUnzipper data_array={data_array} />
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default ResourcesPage
