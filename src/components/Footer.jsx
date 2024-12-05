import React from 'react'
import ROUTE_URLS from '../config/routes'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-relative">
            <div className="tp-footer-area pt-120 p-relative">
                <div className="tp-footer-shape-one">
                    <img src="assets/img/creative/creative-hand.png" alt />
                </div>
                <div className="tp-footer-shape-two">
                    <img src="assets/img/service/service-1.png" alt />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                            <div className="footer-widget-info text-center">
                                <h2 className="tp-footer-title pb-15">Let’s collaborate on your next project</h2>
                                <p>
                                    I specialize in building modern, responsive, and scalable web applications
                                    using MongoDB, Express, React, and Node.js. Let's create something amazing together!
                                </p>
                                <Link className="tp-btn mb-50" to={ROUTE_URLS.CONTACT}>Contact us</Link>
                                <p className="right-receved">© 2024 Anant Portfolio, All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tp-copyright-bottom wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                                <div className="tp-copyright-logo-box text-md-center text-center text-lg-start mb-30">
                                    <div className="tp-copyright-logo">
                                        <Link to={ROUTE_URLS.HOME}><img src="/assets/img/logo/footer_logo.png" alt /></Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-cpoyright-menu text-md-start text-center text-lg-center mb-30">
                                    <a href="#">Case Studies</a>
                                    <a href="#">Pricing Plan</a>
                                </div>
                            </div> */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                                    <a href="https://www.linkedin.com/in/anant-patel-a06901333" target='_blank'><i className="fab fa-linkedin-in" /></a>
                                    {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
                                    {/* <a href="#"><i className="fab fa-instagram" /></a> */}
                                    {/* <a href="#"><i className="fab fa-youtube" /></a> */}
                                    <a href="https://github.com/AnantPA" target='_blank'><i className="fab fa-github" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer