import React from 'react'
import PageButton from './PageButton'

export default function PageBlockButton(props) {
  return (
    <div className="page-block-button">
      <PageButton fields={props.fields} />
    </div>
  )
}
