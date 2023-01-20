import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockFeature from '../components/PageBlockFeature'
import PageBlockWideImage from '../components/PageBlockWideImage'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockCTA from '../components/PageBlockCTA'
import data_array from '../../static/page-data/using-the-dweb-brand.yaml'

function UsingTheDWebBrandPage() {
    const content = (
        <div>
            <div className="master-page-content">
                <PageBlockOpening fields={data_array[0].PageBlockOpening} />
                <PageBlockWideImage fields={data_array[1].PageBlockWideImage} />
                <PageBlockContent fields={data_array[2].PageBlockContent} />
                <PageBlockFeature fields={data_array[3].PageBlockFeature} />
                <PageBlockContent fields={data_array[4].PageBlockContent} />
                <PageBlockOpening fields={data_array[5].PageBlockOpening} />
                <PageBlockFeature fields={data_array[6].PageBlockFeature} />
                <PageBlockOpening fields={data_array[7].PageBlockOpening} />
                <PageBlockFeature fields={data_array[8].PageBlockFeature} />
                <PageBlockFeature fields={data_array[9].PageBlockFeature} />
                <PageBlockCTA fields={data_array[10].PageBlockCTA} />
            </div>
            <Footer />
        </div>
    )

    return <Layout content={content} />
}

export default UsingTheDWebBrandPage
