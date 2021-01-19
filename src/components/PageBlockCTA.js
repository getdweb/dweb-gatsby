import React from 'react'
import PageButton from './PageButton'

export default function PageBlockCTA (props) {
    const fields = props.fields;

    return (
        <div className="page-block-cta page-block-border">
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="header">{fields.title}</div>
                        <div className="page-block-cta__intro" dangerouslySetInnerHTML={{__html: fields.text}}></div>
                        {/* {button} */}
                        <div className=" page-block-cta__buttons">
                            <PageButton fields={fields} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}