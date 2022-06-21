import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FaqQuestion from './FaqQuestion'
import md5 from '../services/md5-service'

export function FaqQ(props) {
  const [open, setOpen] = useState(false)

  return (
    <a className="faq-pair__question" onClick={() => setOpen(!open)}>
      {props.children}
    </a>
  )
}

export function FaqA(props) {
  return (
    <div className="faq-pair__answer">
      <ol>{props.children}</ol>
    </div>
  )
}
