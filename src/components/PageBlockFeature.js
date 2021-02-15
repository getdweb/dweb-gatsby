import React from 'react'
import {Link} from 'gatsby'

export default function PageBlockFeature (props) {
    const fields = props.fields;

    const button = fields.button_link_direction === 'internal'
        ? <Link to={fields.button_link_url} className="btn building-block__btn">{fields.button_caption}</Link>
        : <a href={fields.button_link_url} target="_blank" className="btn building-block__btn">{fields.button_caption}</a>
    
    return (
        <div className="building-block page-block-feature page-block-border">
            <div className="building-block__right" style={{backgroundImage: 'url(' + fields.image.localFile.url + ')'}}>
            </div>
            <div className="building-block__left">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header building-block__header">{fields.title}</div>
                            <div className="building-block__text" dangerouslySetInnerHTML={{__html: fields.text}}></div>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}