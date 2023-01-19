import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function PageBlockContent(props) {
  const { fields } = props

  return (
    <div className="container page-block-content">
      <div className="row">
        <div className="col col-12 col-md-9" >
          <ReactMarkdown components={{
            a: ({ node, ...props }) => <a target="_blank" {...props} />
          }}>
            {fields.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
