import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockContent from '../components/PageBlockContent'
import data_array from '../../static/page-data/website-team.yaml'

function WebsiteTeamPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
                <PageBlockFeature fields={data_array[1].PageBlockFeature} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default WebsiteTeamPage
