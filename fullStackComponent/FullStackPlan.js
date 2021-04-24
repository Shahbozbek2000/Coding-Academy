import React from 'react'

export default function FullStackPlan() {
    return (
        <div>
            
      <div className="pricing-plan-one">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 wow fadeInLeft">
            <div className="theme-title">
              <h6>Bizning narxlar</h6>
              <h2>O'zingizga mos keladigan to'lov planini tanlang</h2>
              <p>O'z joyingizni bron qilish</p>
            </div>
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#monthly">Oylik</a></li>
              <li><a data-toggle="tab" href="#yearly">To'liq kurs</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-xs-12 wow fadeInRight">
            <div className="tab-content">
              <div id="monthly" className="tab-pane fade in active">
                <div className="clearfix">
                  <div className="float-left left-side">
                    <span>549000</span>
                    <h6>Business</h6>
                    <a href="#">+</a>
                  </div>
                  <div className="right-side float-left">

                    <h4>Oylik to'lov</h4>
                
                  </div>
                </div>
              </div>
              <div id="yearly" className="tab-pane fade">
                <div className="clearfix">
                  <div className="float-left left-side">
                    <span>4000000</span>
                    <h6>Business</h6>
                    <a href="#">+</a>
                  </div>
                  <div className="right-side float-left">
                    <h4>To'liq kurs</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
