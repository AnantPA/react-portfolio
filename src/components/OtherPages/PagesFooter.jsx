import React from 'react'
import ROUTE_URLS from '../../config/routes'
import { Link } from 'react-router-dom'

const PagesFooter = () => {
    return (
        <>
            <footer>
                <div className="tp-footer-area black-bg pt-130 pb-30">
                    <div className="container">
                        <div className="row">
                            {/* About Section */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget">
                                    <div className="tp-footer-widget__logo mb-30">
                                        <a href="/"><img src="assets/img/logo/footer_logo.png" alt="Logo" /></a>
                                    </div>
                                    <div className="tp-footer-widget__text mb-30">
                                        <p>
                                            Hi, I'm a passionate developer dedicated to building
                                            innovative solutions and crafting exceptional user experiences.
                                        </p>
                                    </div>
                                    <div className="tp-footer-widget__social-link">
                                        <a href="https://github.com"><i className="fab fa-github" /></a>
                                        <a href="https://linkedin.com"><i className="fab fa-linkedin" /></a>
                                        <a href="https://twitter.com"><i className="fab fa-twitter" /></a>
                                        <a href="https://instagram.com"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>

                            {/* Useful Links */}
                            <div className="col-xl-3 col-lg-2 col-md-6 d-flex justify-content-lg-center">
                                <div className="tp-footer-widget">
                                    <div className="tp-footer-widget__title pb-15">
                                        <h3 className="footer-title">Quick Links</h3>
                                    </div>
                                    <div className="tp-footer-widget__list">
                                        <ul>
                                            <li><Link to={ROUTE_URLS.ABOUT}>About Me</Link></li>
                                            <li><Link to={ROUTE_URLS.PORT_LIST}>Portfolio</Link></li>
                                            <li><Link to={ROUTE_URLS.CONTACT}>Contact</Link></li>
                                            {/* <li><Link to="/blog">Blog</Link></li> */}
                                            {/* <li><Link to="/resume">Resume</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Explore Section */}
                            <div className="col-xl-3 col-lg-2 col-md-6">
                                <div className="tp-footer-widget pl-20">
                                    <div className="tp-footer-widget__title pb-15">
                                        <h3 className="footer-title">Explore</h3>
                                    </div>
                                    <div className="tp-footer-widget__list">
                                        <ul>
                                            <li><Link to={ROUTE_URLS.PORT_LIST}>Projects</Link></li>
                                            <li><Link to={ROUTE_URLS.ABOUT}>Skills</Link></li>
                                            {/* <li><a href="/testimonials">Testimonials</a></li>
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="/events">Events</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Section */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget">
                                    <div className="tp-footer-widget__title pb-15">
                                        <h3 className="footer-title">Stay Connected</h3>
                                    </div>
                                    <div className="tp-footer-widget__text mb-55">
                                        <p>Subscribe to get updates about my latest projects and blog posts.</p>
                                    </div>
                                    <div className="tp-footer-widget__input">
                                        <form action="#">
                                            <input type="text" placeholder="Enter Email" />
                                            <button type="submit"><i className="fas fa-paper-plane" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="tp-copyright-area">
                        <div className="container">
                            <div className="copyright-border pt-40">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-12">
                                        <div className="tp-copyright-left text-lg-start text-start text-md-center">
                                            <p>© 2024 Anant. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-12">
                                        <div className="tp-copyright-right text-start text-md-center text-lg-end">
                                            <a href="/privacy-policy">Privacy Policy</a>
                                            <a href="/terms">Terms of Service</a>
                                            <a href="/contact">Get in Touch</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default PagesFooter