import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockContent from '../components/PageBlockContent'
import data_array from '../../static/page-data/events-archive.yaml'

function EventsArchivePage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
                <PageBlockFeature fields={data_array[1].PageBlockFeature} />
                <PageBlockContent fields={data_array[2].PageBlockContent} />
                <PageBlockFeature fields={data_array[3].PageBlockFeature} />
                <PageBlockFeature fields={data_array[4].PageBlockFeature} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default EventsArchivePage
