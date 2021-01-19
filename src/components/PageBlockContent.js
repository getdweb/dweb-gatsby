import React from 'react'

export default function PageBlockContent (props) {
    const fields = props.fields;

    return (
        <div className="container page-block-content">
            <div className="row">
                <div className="col col-12 col-md-9" dangerouslySetInnerHTML={{__html: fields.text}}></div>
            </div>
        </div>
    );
}