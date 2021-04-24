

export function LanguageCounter() {
    return (
        <div>
        <div className="theme-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                  <span
                    className="timer"
                    data-from="0"
                    data-to="2730"
                    data-speed="1000"
                    data-refresh-interval="5"
                  >
                    0
                  </span>
                  +
                </h2>
                <p>Completed Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                  <span
                    className="timer"
                    data-from="0"
                    data-to="39"
                    data-speed="1000"
                    data-refresh-interval="5"
                  >
                    0
                  </span>
                </h2>
                <p>Availble Country</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box">
                <h2 className="number">
                  <span
                    className="timer"
                    data-from="0"
                    data-to="125"
                    data-speed="1000"
                    data-refresh-interval="5"
                  >
                    0
                  </span>
                  M
                </h2>
                <p>User Worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="single-box border-fix">
                <h2 className="number">
                  <span
                    className="timer"
                    data-from="0"
                    data-to="12"
                    data-speed="1000"
                    data-refresh-interval="5"
                  >
                    0
                  </span>
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
