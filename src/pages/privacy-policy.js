import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockContent from '../components/PageBlockContent'
import data_array from '../../static/page-data/privacy-policy.yaml'

function PrivacyPolicyPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockContent fields={data_array[0].PageBlockContent} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default PrivacyPolicyPage
