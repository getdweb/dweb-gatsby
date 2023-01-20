import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function PageBlockContent(props) {
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
    <div className="container page-block-content">
      <div className="row">
        <div className="col col-12 col-md-9" >
          {markdownText}
        </div>
      </div>
    </div>
  )
}
