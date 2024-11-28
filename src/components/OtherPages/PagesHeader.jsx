import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTE_URLS from '../../config/routes';

const PagesHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop >= 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="d-none d-lg-block">
                <div id="header-sticky"
                    className={`tp-header-area-two tp-header-bg header-transparent header-transparent-two ${isSticky ? 'header-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3">
                                <div className="tp-logo text-start">
                                    <Link to={ROUTE_URLS.HOME}><img src="assets/img/logo/AP_logo.png" alt /></Link>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-6">
                                <div className="tp-main-menu tp-menu-black tp-bs-menu tp-bp-menu text-center">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><Link to={ROUTE_URLS.HOME}>Home</Link></li>
                                            <li><Link to={ROUTE_URLS.PORT_LIST}>Portfolio</Link></li>
                                            <li><Link to={ROUTE_URLS.ABOUT}>About</Link></li>
                                            <li><Link to={ROUTE_URLS.CONTACT}>Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-3 col-lg-3">
                                {/* <div className="tp-header-left d-flex align-items-center justify-content-end ">
                                    <ul className="d-none d-xxl-block">
                                        <li><a className="#" href="login.html"><i className="far fa-user fa-user" /> Login</a></li>
                                        <li><a className="#" href="#">EN<i className="fal fa-arrow-down arrow-down" /></a>
                                            <ul>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Arabic</a></li>
                                                <li><a href="#">Spanish</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="tp-header-yellow-button">
                                        <a className="tp-btn-white" href="about.html">How it Works</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <div id="header-sticky-mobile"
                className={`tp-md-header-area d-md-block d-lg-none pt-30 pb-30 ${isSticky ? 'header-sticky' : ''}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-6">
                            <div className="tp-logo">
                                <a href="index.html"><img src="assets/img/logo/logo-blue.png" alt /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="tp-header-right z-index-1 d-flex align-items-center justify-content-end">
                                <a className="tp-btn-yellow d-none d-md-block" href="#">How it Works</a>
                                <button className="tp-menu-bar"><i className="fal fa-bars" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagesHeader