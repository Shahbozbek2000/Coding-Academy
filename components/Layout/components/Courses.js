import React from "react"
import Image from 'next/image'

export function Courses() {
  return (
    <div className="our-portfolio">
      <div className="container">
        <div className="theme-title">
          <h2>Bizning trenddagi kurslarimiz</h2>
        </div>
      </div>
 <div className="wrapper">
        <div className="row">
          <div className="portfolio-slider">
            <div className="item">
                <div className="image">
                  <img src='/images/carousel/carousel-1.webp' alt='programming' />
                </div>
              </div>
           <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-2.jfif" alt="" />
                </div>
              </div>
          
              <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-5.jpg" alt="" />
               </div>
              </div>
              <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-3.jpg" alt="" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
