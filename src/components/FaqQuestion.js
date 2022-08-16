import React, {useState} from 'react'

export default function Faq(props) {

  const [open, setOpen] = useState(false);

  const {pair} = props;

  return (
    <div
      className={`faq-pair ${  open ? "open " : ""}`}
      >
      <a
        className="faq-pair__question"
        onClick={ () => setOpen(!open)}
      >{pair.question}</a>
      <div className="faq-pair__answer" dangerouslySetInnerHTML={{ __html: pair.answer }} />
    </div>
  );
}