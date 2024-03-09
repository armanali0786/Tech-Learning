import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
    return (
        <>
            <footer id="footer" className="#7AB5B7">
                <div className="footer-newsletter bg-[#f3f5fa]">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input className='focus:outline-none' type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                                {/* <SubsButton/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>E-Tech</h3>
                                <p>
                                    Rajkot<br />
                                    Gujarat<br />
                                    India <br /><br />
                                    <strong>Phone:</strong> +91 731 9977 276<br />
                                    <strong>Email:</strong> armanali.shaikh77@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About Tech</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Teach From Us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <div className="social-links">
                                    <a href="#" className="tsocial-linkswitter"><FaTwitter className='ml-2'/></a>
                                    <a href="#" className="facebook"><FaFacebook className='ml-2'/></a>
                                    <a href="#" className="instagram"><FaInstagram className='ml-2'/></a>
                                    <a href="#" className="google-plus"><FaSkype className='ml-2'/></a>
                                    <a href="#" className="linkedin"><FaLinkedin className='ml-2'/></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>E-Tech</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">

                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
