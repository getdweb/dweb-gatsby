import React from 'react'

export default function PageBlockWideImage (props) {
    const {fields} = props;

    const image = fields.image 
        ? <img 
            src={fields.image.localFile.url}
            alt="" /> 
        : "";

    return (
        <div className="page-block-wide-image">
            {image}
        </div>
    );
}