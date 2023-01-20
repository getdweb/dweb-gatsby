import React from 'react'
import PageButton from './PageButton'
import ReactMarkdown from 'react-markdown'

export default function PageBlockCTA(props) {
  const { fields } = props

  const markdownText = fields.text_includes_raw_html == true ? (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
      a: ({ node, ...props }) => <a target="_blank" {...props} />
    }}>
      {fields.text}
    </ReactMarkdown>
  ) : (
    <ReactMarkdown components={{
      a: ({ node, ...props }) => <a target="_blank" {...props} />
    }}>
      {fields.text}
    </ReactMarkdown>)

  return (
    <div className="page-block-cta page-block-border">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="header">{fields.title}</div>
            <div className="page-block-cta__intro" >
              {markdownText}
            </div>
            <div className=" page-block-cta__buttons">
              <PageButton fields={fields} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
