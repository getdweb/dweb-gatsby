import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import data_array from '../../static/page-data/origin-story.yaml'

function OriginStoryPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default OriginStoryPage