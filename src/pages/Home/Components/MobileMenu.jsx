import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/AppContext';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const { triggerAction } = useAppContext();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (triggerAction) {
            setMenuOpen(true);
        }
    }, [triggerAction]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="tp-offcanvas-area">
                <div className={`tpoffcanvas ${menuOpen ? 'opened' : ''}`}>
                    <div className="tpoffcanvas__logo">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-white.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn" onClick={toggleMenu}>
                            <i className="fal fa-times-hexagon" />
                        </button>
                    </div>
                    <div className="tpoffcanvas__content d-none d-sm-block">
                        <p>We deploy world-class Creative<br />on demand.</p>
                    </div>
                    {/* <div className="mobile-menu">
                        {isMobile && menuOpen && (
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        )}
                    </div> */}
                    <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}><span><span><span /></span></span></a><nav className="mean-nav">
                        <ul style={{ display: 'none' }}>
                            <li className="has-dropdown"><a href="index.html">Home<i className="fal fa-angle-down" /></a>
                                <ul className="submenu text-start" style={{ display: 'none' }}>
                                    <li><a href="index.html">Creative Agency</a></li>
                                    <li><a href="index-2.html">Personal Portfolio</a></li>
                                    <li><a href="index-3.html">Startup Business</a></li>
                                    <li><a href="index-4.html">Digital Agency</a></li>
                                    <li><a href="index-5.html">Business Advisor</a></li>
                                    <li><a href="index-6.html">IT Service Agency</a></li>
                                    <li><a href="index-7.html">Corporate Agency</a></li>
                                    <li><a href="index-8.html">Fashion Blog 01</a></li>
                                    <li><a href="index-9.html">Fashion Blog 02</a></li>
                                </ul>
                                <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                            <li className="has-dropdown "><a href="portfolio.html">Portfolio<i className="fal fa-angle-down" /></a>
                                <ul className="submenu text-start" style={{ display: 'none' }}>
                                    <li><a href="portfolio.html">Portfolio Full Width</a></li>
                                    <li><a href="portfolio-2.html">Portfolio Filter 01</a></li>
                                    <li><a href="portfolio-3.html">Portfolio Filter 02</a></li>
                                    <li><a href="portfolio-mesonary.html">Portfolio Masonry</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                </ul>
                                <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                            <li className="has-dropdown has-mega-menu "><a href="#">Pages<i className="fal fa-angle-down" /></a>
                                <ul className="submenu text-start" style={{ display: 'none' }}>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="about-me.html">About Me</a></li>
                                    <li><a href="job.html">Job</a></li>
                                    <li><a href="job-details.html">Job Details</a></li>
                                    <li><a href="product.html">Product</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                    <li><a href="service-1.html">Service 01</a></li>
                                    <li><a href="service-2.html">Service 02</a></li>
                                    <li><a href="service-3.html">Service 03</a></li>
                                    <li><a href="service-4.html">Service 04</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="testimonial.html">Testimonial</a></li>
                                    <li><a href="price.html">Price</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="registration.html">Register</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                                <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                            <li className="has-dropdown "><a href="blog.html">Blog<i className="fal fa-angle-down" /></a>
                                <ul className="submenu text-start" style={{ display: 'none' }}>
                                    <li><a href="blog.html">Blog Sidebar</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                    <li><a href="blog-grid-1.html">Post Style 01</a></li>
                                    <li><a href="blog-grid-2.html">Post Style 02</a></li>
                                    <li><a href="blog-grid-3.html">Post Style 03</a></li>
                                </ul>
                                <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                            <li className="mean-last"><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav></div>
                    </div>

                    <div className="tpoffcanvas__contact">
                        <span>Contact us</span>
                        <ul>
                            <li><i className="fas fa-star" /> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank" rel="noreferrer">Melbone st, Australia, Ny 12099</a></li>
                            <li><i className="fas fa-star" /> <a href="tel:8180012345678">+81 800 123 456 78</a></li>
                            <li><i className="fas fa-star" /> <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="tpoffcanvas__input d-none d-sm-block">
                        <p>Get Update</p>
                        <form className="p-relative" action="#">
                            <input type="text" placeholder="Enter mail" />
                            <button type="submit"><i className="fas fa-paper-plane" /></button>
                        </form>
                    </div>
                    <div className="tpoffcanvas__instagram d-none d-sm-block">
                        <p>Check Instagram Post</p>
                        <div className="tp-insta">
                            <div className="row">
                                <div className="col-3 col-sm-3"><a href="#"><img src="/assets/img/offcanvas/insta-1.jpg" alt="Instagram 1" /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="/assets/img/offcanvas/insta-2.jpg" alt="Instagram 2" /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="/assets/img/offcanvas/insta-4.jpg" alt="Instagram 3" /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="/assets/img/offcanvas/insta-4.jpg" alt="Instagram 4" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} />
        </>
    );
};

export default MobileMenu;
