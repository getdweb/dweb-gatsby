import React from 'react'
import PageBlockOpening from './PageBlockOpening'
import PageBlockHighlighted from './PageBlockHighlighted'
import PageBlockContent from './PageBlockContent'
import PageBlockWideImage from './PageBlockWideImage'
import PageBlockButton from './PageBlockButton'
import PageBlockCTA from './PageBlockCTA'
import PageBlockFeature from './PageBlockFeature'

function UnzippedPage(props) {
    const { data_array } = props;

    return (
        <div
            className="master-page-content"
        >
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
        </div>)
}

export default UnzippedPage
