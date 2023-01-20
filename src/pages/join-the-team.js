import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockCTA from '../components/PageBlockCTA'
import data_array from '../../static/page-data/join-the-team.yaml'

function JoinTheTeamPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
                <PageBlockContent fields={data_array[1].PageBlockContent} />
                <PageBlockContent fields={data_array[2].PageBlockContent} />
                <PageBlockCTA fields={data_array[3].PageBlockCTA} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default JoinTheTeamPage
