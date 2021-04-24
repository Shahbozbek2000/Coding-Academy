import React from 'react'

export default function FullStackMentors(props) {
    return (
        <div>
        <div className="our-team-styleOne">
        <div className="container">
          <div className="title">
            <h2>Mentorlar bilan tanishing</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src={props.image}
                    alt="Programming"
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <h6>{props.name}</h6>
                <p>{props.job}</p>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src={props.image2}
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h6>{props.name2}</h6>
                <p>{props.job2}</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 hidden-sm">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src={props.image3}
                    style={{ height: "350px", objectFit: "cover" }}
                    alt="Programming"
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h6>{props.name3}</h6>
                <p>{props.job3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
