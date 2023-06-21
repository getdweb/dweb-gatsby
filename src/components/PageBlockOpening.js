import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function PageBlockOpening(props) {
  const { fields } = props

  const imageDesktop = fields.hero_image_desktop_url ? (
    <img
      src={fields.hero_image_desktop_url}
      className="page-block-opening__image-desktop"
      alt=""
    />
  ) : (
    ''
  )
  const imageMobile = fields.hero_image_mobile_url ? (
    <img
      src={fields.hero_image_mobile_url}
      className="page-block-opening__image-mobile"
      alt=""
    />
  ) : (
    ''
  )

  const markdownText =
    fields.text_includes_raw_html == true ? (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => <a target="_blank" {...props} />,
        }}
      >
        {fields.text}
      </ReactMarkdown>
    ) : (
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => <a target="_blank" {...props} />,
        }}
      >
        {fields.text}
      </ReactMarkdown>
    )

  return (
    <div className="page-block-opening page-block-border">
      {imageDesktop}
      {imageMobile}
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-9">
            <h1 className="page-block-opening__title">{fields.title}</h1>
            <div className="page-block-opening__text">{markdownText}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
