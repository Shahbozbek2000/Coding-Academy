import React from 'react'
import RenderInBrowser from 'react-render-in-browser'

export  function FullStackHeader(props) {
    return (
      <RenderInBrowser chrome firefox safari only>
      <div id="theme-main-banner" className="banner-two">
      <div
        data-src={props.image}>
        <div className="camera_caption">
          <div className="container">
            <h5 className="wow fadeInUp animated">{props.name}</h5>
            <h1 className="wow fadeInUp animated props-name" data-wow-delay="0.2s">
            {props.title}
            </h1>
            <a href="/fullstack" className="tran3s hvr-trim wow fadeInUp
              animated p-bg-color button-one" data-wow-delay="0.3s">Batafsil</a>
          </div> 
        </div> 
      </div>
      <div
        data-src={props.image1}>
        <div className="camera_caption">
          <div className="container">
            <h5 className="wow fadeInUp animated">{props.name}</h5>
            <h1 className="wow fadeInUp animated props-name" data-wow-delay="0.2s">
              {props.title}
            </h1>
            <a href="/fullstack" className="tran3s hvr-trim wow fadeInUp
              animated p-bg-color button-one" data-wow-delay="0.3s">Batafsil</a>
          </div> 
        </div> 
      </div>
    </div> 
    </RenderInBrowser>
    )
}
