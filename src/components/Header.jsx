import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import ROUTE_URLS from '../config/routes';
import { Link } from 'react-router-dom';

const Header = () => {
    const { handleTriggerAction } = useAppContext();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 300) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="d-none d-lg-block">
                <div id="header-sticky" className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 ${isSticky ? 'header-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center header-space-two">
                            <div className="col-xxl-3 col-xl-3 col-lg-3">
                                <div className="tp-logo text-start">
                                    <Link to={ROUTE_URLS.HOME}><img src="/assets/img/logo/logo-ap.svg" alt='header_logo' /></Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="tp-main-menu text-center">
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
                            <div className="col-xxl-3 col-xl-3 col-lg-3">
                                <div className="tp-header-button text-end">
                                    <Link className="tp-btn" to={ROUTE_URLS.CONTACT}>Let’s Talk 👋</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="header-sticky-mobile" className={`tp-md-header-area header-transparent d-lg-none pt-30 ${isSticky ? 'header-sticky' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-6">
                            <div className="tp-logo">
                                <Link to={ROUTE_URLS.HOME}><img src="/assets/img/logo/AP_logo.png" alt='mobile-logo' /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="tp-header-right z-index-1 d-flex align-items-center justify-content-end">
                                <Link className="tp-btn d-none d-md-block" to={ROUTE_URLS.CONTACT}>Let’s Talk 👋</Link>
                                <button className="tp-menu-bar" type="button" onClick={handleTriggerAction}><i className="fal fa-bars" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header