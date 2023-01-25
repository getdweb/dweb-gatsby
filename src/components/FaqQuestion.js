import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Faq(props) {
  const [open, setOpen] = useState(false)

  const { pair } = props

  return (
    <div className={`faq-pair ${open ? 'open ' : ''}`}>
      <a className="faq-pair__question" onClick={() => setOpen(!open)}>
        {pair.question}
      </a>
      <div
        className="faq-pair__answer"
      >
        <ReactMarkdown components={{
          a: ({ node, ...props }) => <a target="_blank" {...props} />
        }}>{pair.answer}</ReactMarkdown>
      </div>
    </div>
  )
}
