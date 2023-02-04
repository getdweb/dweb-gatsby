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

function MasterPage(props) {
  const { data_array } = props.pageContext

  const content = (
    <>
      <div className="master-page-content">
        {data_array.map((block) => {
          if (Object.hasOwn(block, 'PageBlockOpening')) {
            return <PageBlockOpening fields={block.PageBlockOpening} />
          }
          if (Object.hasOwn(block, 'PageBlockHighlighted')) {
            return <PageBlockHighlighted fields={block.PageBlockHighlighted} />
          }
          if (Object.hasOwn(block, 'PageBlockFeature')) {
            return <PageBlockFeature fields={block.PageBlockFeature} />
          }
          if (Object.hasOwn(block, 'PageBlockContent')) {
            return <PageBlockContent fields={block.PageBlockContent} />
          }
          if (Object.hasOwn(block, 'PageBlockWideImage')) {
            return <PageBlockWideImage fields={block.PageBlockWideImage} />
          }
          if (Object.hasOwn(block, 'PageBlockButton')) {
            return <PageBlockButton fields={block.PageBlockButton} />
          }
          if (Object.hasOwn(block, 'PageBlockCTA')) {
            return <PageBlockCTA fields={block.PageBlockCTA} />
          }
          return <></>
        })}
      </div>
      <Footer />
    </>
  )

  return <Layout content={content} />
}

export default MasterPage
