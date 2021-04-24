import React from 'react'
import Link from 'next/link'

export  function FullStackService() {
    return (
        <div>
        <div className="service-version-one">
        <div className="container">
          <h2>Kareerangizni mustahkam bazalari</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-diamond tran3s"></i>
                <p>Service Offering</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Raqobatdosh bilim
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-round-chart tran3s"></i>
                <p>Business Services</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Jahon yetakchi kompaniyalari
                    <br />
                    foydalanadigan metodika
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-notepad tran3s"></i>
                <p>Technical Service</p>
                <h6>
                <Link href='/'> 
                  <a  className="tran3s">
                    Proffesional Rezumelar <br />
                    tayyorlash darslaris
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-drawing tran3s"></i>
                <p>Content Creation</p>
                <h6>
                <Link href='/'>
                  <a  className="tran3s">
                    Koreiara mentorlar ko’magi
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-computer tran3s"></i>
                <p>Design &amp; Devlopment</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Jahon ish bozoriga qadamlar
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-business tran3s"></i>
                <p>SEO &amp; SMM</p>
                <h6>
                <Link href='/'>
                  <a  className="tran3s">
                    Suhbatga tayyorgarlik
                  </a>
                </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> 
        </div>
    )
}
