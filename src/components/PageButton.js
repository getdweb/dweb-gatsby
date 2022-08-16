import React from 'react'
import {Link} from 'gatsby'

export default function PageButton (props) {
    const {fields} = props;

    const button = fields.button_link_direction === 'internal'
        ? <Link to={fields.button_link_url} className="btn">{fields.button_caption}</Link>
        : <a href={fields.button_link_url} target="_blank" className="btn" rel="noreferrer">{fields.button_caption}</a>

    return (
        <>{button}</>
    );
}