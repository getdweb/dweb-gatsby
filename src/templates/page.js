import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBlockOpening from '../components/PageBlockOpening'
import PageBlockHighlighted from '../components/PageBlockHighlighted'
import PageBlockContent from '../components/PageBlockContent'
import PageBlockWideImage from '../components/PageBlockWideImage'
import PageBlockButton from '../components/PageBlockButton'
import PageBlockBorder from '../components/PageBlockBorder'
import PageBlockCTA from '../components/PageBlockCTA'
import PageBlockFeature from '../components/PageBlockFeature'

const MasterPage = (props) => {
  const page = props.pageContext.page;

  let blockKey = 0;

  const content = <>
      <div
        className="master-page-content"
        >
        {
          page.acf.page_blocks.map(block => {
            blockKey++;
            switch(block.block_type){
              case "opening":
                return <PageBlockOpening key={"page_block_" + blockKey} fields={block.opening_section_content} />;
              case "highlighted":
                return <PageBlockHighlighted key={"page_block_" + blockKey} fields={block.highlighted_statement_content} />;
              case "feature_block":
                return <PageBlockFeature key={"page_block_" + blockKey} fields={block.feature_block} />;
              case "body_content":
                return <PageBlockContent key={"page_block_" + blockKey} fields={block.body_content} />;
              case "body_wide_image":
                return <PageBlockWideImage key={"page_block_" + blockKey} fields={block.body_wide_image} />;
              case "body_button":
                return <PageBlockButton key={"page_block_" + blockKey} fields={block.body_button} />;
              case "cta_button":
                return <PageBlockCTA key={"page_block_" + blockKey} fields={block.cta_button} />;
              case "border":
                return <PageBlockBorder key={"page_block_" + blockKey} />;
              default:
                return <></>;
            }
          })
        }
      </div>
      <Footer />
    </>

  return (
    <Layout content={content}>
      
    </Layout>
  )
}

export default MasterPage

