import React from 'react'

export default function Pricing() {
  return (
    <>
                 <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Pricing</h2>
                        <h5>Accelerate growth — for you or your organization.</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="box">
                                <h3>Personal Plan</h3>
                                <h4><sup>$</sup>0<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Access to 1000+ top courses</li>
                                    <li><i className="bx bx-check"></i> Certification prep</li>
                                    <li><i className="bx bx-check"></i> Goal-focused recommendations</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>AI-powered coding exercises</span></li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="box featured">
                                <h3>Team Plan</h3>
                                <h4><sup>$</sup>29<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Access to 11,000+ top courses</li>
                                    <li><i className="bx bx-check"></i>Certification prep</li>
                                    <li><i className="bx bx-check"></i>AI-powered coding exercises</li>
                                    <li><i className="bx bx-check"></i>Analytics and adoption reports</li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <h3>Enterprise Plan</h3>
                                <h4><sup>$</sup>49<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Access to 25,000+ top courses</li>
                                    <li><i className="bx bx-check"></i> Certification prep</li>
                                    <li><i className="bx bx-check"></i> Goal-focused recommendations</li>
                                    <li><i className="bx bx-check"></i> Advanced analytics and insights</li>
                                    <li><i className="bx bx-check"></i> Dedicated customer success team</li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>

                    </div>

                </div>
    </>
  )
}
