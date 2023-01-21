import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockCTA from '../components/PageBlockCTA'
import data_array from '../../static/page-data/dwebdesign.yaml'

function DWebDesignPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
                <PageBlockFeature fields={data_array[1].PageBlockFeature} />
                <PageBlockFeature fields={data_array[2].PageBlockFeature} />
                <PageBlockFeature fields={data_array[3].PageBlockFeature} />
                <PageBlockFeature fields={data_array[4].PageBlockFeature} />
                <PageBlockContent fields={data_array[5].PageBlockContent} />
                <PageBlockCTA fields={data_array[6].PageBlockCTA} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default DWebDesignPage
