import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockHighlighted from '../components/PageBlockHighlighted'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockWideImage from '../components/PageBlockWideImage'
import PageBlockButton from '../components/PageBlockButton'
import PageBlockCTA from '../components/PageBlockCTA'
import PageBlockFeature from '../components/PageBlockFeature'

const MasterPage = (props) => {
  const data_array = props.pageContext.data_array;

  const content = <>
      <div className="master-page-content" >
        {
          data_array.map(block => {
            if (Object.hasOwn(block, "PageBlockOpening")) {
              return <PageBlockOpening fields={block["PageBlockOpening"]} />;
            } else if (Object.hasOwn(block, "PageBlockHighlighted")) {
              return <PageBlockHighlighted fields={block["PageBlockHighlighted"]} />;
            } else if (Object.hasOwn(block, "PageBlockFeature")) {
              return <PageBlockFeature fields={block["PageBlockFeature"]} />;
            } else if (Object.hasOwn(block, "PageBlockContent")) {
              return <PageBlockContent fields={block["PageBlockContent"]} />;
            } else if (Object.hasOwn(block, "PageBlockWideImage")) {
              return <PageBlockWideImage fields={block["PageBlockWideImage"]} />;
            } else if (Object.hasOwn(block, "PageBlockButton")) {
              return <PageBlockButton fields={block["PageBlockButton"]} />;
            } else if (Object.hasOwn(block, "PageBlockCTA")) {
              return <PageBlockCTA fields={block["PageBlockCTA"]} />;
            } else {
              return <></>;
            }

          })
        }
      </div>
      <Footer />
    </>

  return (
    <Layout content={content} />
  )
}

export default MasterPage
