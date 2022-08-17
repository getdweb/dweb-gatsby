import React from 'react'
import PropTypes from 'prop-types'

export function HTMLContent({ content, className }) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

function Content({ content, className }) {
  return <div className={className}>{content}</div>
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
