import React from 'react'

export function Counter() {
    return (
        <div className="theme-counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div className="single-box">
                        <h2 className="number"><span className="timer" data-from="0" data-to="200"
                                data-speed="1000" data-refresh-interval="5">0</span>+</h2>
                        <p>Talabalar</p>
                    </div> 
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div className="single-box">
                        <h2 className="number"><span className="timer" data-from="0" data-to="20"
                                data-speed="1000" data-refresh-interval="5">0</span></h2>
                        <p>Guruhlar soni</p>
                    </div> 
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div className="single-box">
                        <h2 className="number"><span className="timer" data-from="0" data-to="10"
                                data-speed="1000" data-refresh-interval="5">0</span>M</h2>
                        <p>Dars soatlar</p>
                    </div> 
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div className="single-box border-fix">
                        <h2 className="number"><span className="timer" data-from="0" data-to="5"
                                data-speed="1000" data-refresh-interval="5">0</span></h2>
                        <p>O'qituvchilar</p>
                    </div>
                </div>
            </div> 
        </div> 
    </div> 
    )
}
