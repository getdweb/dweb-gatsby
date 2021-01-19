import React from 'react'

export default function PageBlockOpening (props) {
    const fields = props.fields;

    const imageDesktop = fields.hero_image_desktop 
        ? <img 
            src={fields.hero_image_desktop.localFile.url} 
            className="page-block-opening__image-desktop" 
            alt="" /> 
        : "";
    const imageMobile = fields.hero_image_mobile 
        ? <img 
            src={fields.hero_image_mobile.localFile.url} 
            className="page-block-opening__image-mobile" 
            alt="" /> 
        : "";

    return (
        <div className="page-block-opening">
            {imageDesktop}
            {imageMobile}
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <h1 className="page-block-opening__title">{fields.title}</h1>
                        <div className="page-block-opening__text" dangerouslySetInnerHTML={{__html: fields.text}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}