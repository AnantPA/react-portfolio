import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/AppContext';
import ROUTE_URLS from '../../../config/routes';
import { Link } from 'react-router-dom';

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
        } else {
            setMenuOpen(false);
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
                            <img src="assets/img/logo/sidebar-logo-ap.svg" alt="Logo" />
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
                    <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}><span><span><span /></span></span></a><nav className="mean-nav">
                        <ul style={{ display: 'none' }}>
                            <li className="has-dropdown">
                                <Link to={ROUTE_URLS.HOME}>Home<i className="fal fa-angle-down" /></Link>
                            </li>
                            <li className="has-dropdown ">
                                <Link to={ROUTE_URLS.PORT_LIST}>Portfolio<i className="fal fa-angle-down" /></Link>
                            </li>
                            <li className="has-dropdown has-mega-menu ">
                                <Link to={ROUTE_URLS.ABOUT}>About<i className="fal fa-angle-down" /></Link>
                            </li>
                            <li className="mean-last"><Link to={ROUTE_URLS.CONTACT}>Contact</Link></li>
                        </ul>
                    </nav></div>
                    </div>

                    <div className="tpoffcanvas__contact">
                        <span>Contact </span>
                        <ul>
                            <li><i className="fas fa-star" /> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank" rel="noreferrer">Adajan, Surat</a></li>
                            <li><i className="fas fa-star" /> <a href="tel:919601498833">+91 9601498833</a></li>
                            <li><i className="fas fa-star" /> <a href="mailto:anantpatel8901@gmail.com">anantpatel8901@gmail.com</a></li>
                        </ul>
                    </div>
                    {/* <div className="tpoffcanvas__input d-none d-sm-block">
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
                    </div> */}
                </div>
            </div>
            <div className={`body-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} />
        </>
    );
};

export default MobileMenu;
