import React from 'react'

export default function PageBlockWideImage(props) {
  const { fields } = props

  const image = fields.image_url ? <img src={fields.image_url} alt="" /> : ''

  return <div className="page-block-wide-image">{image}</div>
}
