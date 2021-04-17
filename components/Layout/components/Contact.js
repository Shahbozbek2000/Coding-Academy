import React from 'react'

export  function Contact() {
    return (
        <div className="modal fade signUpModal theme-modal-box" role="dialog">
										<div className="modal-dialog">
											
											<div className="modal-content">
												<div className="modal-body">
													<h3>Login with Social Networks</h3>
													<ul className="clearfix">
														<li className="float-left"><a href="#"><i className="fa fa-facebook"
																	aria-hidden="true"></i> facebook</a></li>
														<li className="float-left"><a href="#"><i className="fa fa-google-plus"
																	aria-hidden="true"></i> Google</a></li>
														<li className="float-left"><a href="#"><i className="fa fa-twitter"
																	aria-hidden="true"></i> Twitter</a></li>
														<li className="float-left"><a href="#"><i className="fa fa-linkedin"
																	aria-hidden="true"></i> Linkedin</a></li>
													</ul>
													<form action="#">
														<h6><span>or</span></h6>
														<div className="wrapper">
															<input type="text" placeholder="Username or Email"/>
															<input type="password" placeholder="Password" />
															<ul className="clearfix">
																<li className="float-left">
																	<input type="checkbox" id="remember"/>
																	<label htmlFor="remember">Remember Me</label>
																</li>
																<li className="float-right"><a href="#" className="p-color">Lost Your
																		Password?</a></li>
															</ul>
															<button className="p-bg-color hvr-trim-two">Login</button>
														</div>
													</form>
												</div> 
											</div> 
										</div> 
									</div> 
    )
}
