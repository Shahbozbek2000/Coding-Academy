import React from 'react'
import CountUp from 'react-countup'

export function AboutCounter() {
  return (
    <div>
      <div className="theme-counter no-border fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                  <CountUp className='timer' start={0} end={2744} duration={10} />+
                </h2>
                <p>Completed Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                  
                  <CountUp className='timer' start={0}
                  end={39} duration={10} />
                </h2>
                <p>Availble Country</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                
                  <CountUp 
                  className='timer' start={0} end={125}
                  duration={10} />
                  M
                </h2>
                <p>User Worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box border-fix">
                <h2 className="number">
                
                  <CountUp className='timer'
                  start={0} end={12} duration={12} />
                </h2>
                <p>Award Winner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
