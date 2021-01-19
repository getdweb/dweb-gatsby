import React from 'react'

export default function PageBlockHighlighted (props) {
    const fields = props.fields;

    const author = fields.author !== "" ? <div className="page-block-highlighted__author">{fields.author}</div> : "";

    const parentStyle = {background: fields.background_color};
    let bgImageStyle = {};
    if (fields.background_image){
        bgImageStyle = {backgroundImage: "url('"+fields.background_image.localFile.url+"')"};
    }

    return (
        <div className="page-block-highlighted page-block-border" style={parentStyle}>
            <div className="page-block-highlighted__bgimage" style={bgImageStyle}></div>
            <div className="page-block-highlighted__quote">{fields.quote}</div>
            {author}
        </div>
    );
}