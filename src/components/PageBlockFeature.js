import React from 'react'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'

export default function PageBlockFeature(props) {
  const { fields } = props

  const button =
    fields.button_link_direction === 'internal' ? (
      <Link to={fields.button_link_url} className="btn building-block__btn">
        {fields.button_caption}
      </Link>
    ) : (
      <a
        href={fields.button_link_url}
        target="_blank"
        className="btn building-block__btn"
        rel="noreferrer"
      >
        {fields.button_caption}
      </a>
    )

  return (
    <div className="building-block page-block-feature page-block-border">
      <div
        className="building-block__right"
        style={{ backgroundImage: `url(${fields.image_url})` }}
      />
      <div className="building-block__left">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header building-block__header">
                {fields.title}
              </div>
              <div className="building-block__text">
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => <a target="_blank" {...props} />,
                  }}
                >
                  {fields.text}
                </ReactMarkdown>
              </div>
              {button}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
