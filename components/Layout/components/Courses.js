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
                   
                  <div className="opacity tran4s">
                    <a
                      data-fancybox="project"
                      href="images/portfolio/1.jpg"
                      className="tran3s"
                      title="We’ve done
															lot’s of work, Let’s Check"
                    ></a>
                  </div>
                </div>
              </div>
            
            
              <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-2.jfif" alt="" />
                  <div className="opacity tran4s">
                    <a
                      data-fancybox="project"
                      href="images/portfolio/2.jpg"
                      className="tran3s"
                      title="We’ve done lot’s of work, Let’s Check"
                    ></a>
                  </div>
                </div>
              </div>
          
              <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-5.jpg" alt="" />
                  <div className="opacity tran4s">
                    <a
                      data-fancybox="project"
                      href="images/portfolio/3.jpg"
                      className="tran3s"
                      title="We’ve done
															lot’s of work, Let’s Check"
                    ></a>
                  </div>
                </div>
              </div>
           
           
              <div className="item">
                <div className="image">
                  <img src="images/carousel/carousel-3.jpg" alt="" />
                  <div className="opacity tran4s">
                    <a
                      data-fancybox="project"
                      href="images/portfolio/4.jpg"
                      className="tran3s"
                      title="We’ve done
															lot’s of work, Let’s Check"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
