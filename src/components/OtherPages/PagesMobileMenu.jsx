import React from 'react'

const PagesMobileMenu = () => {
    return (
        <>
            <div className="tp-offcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__logo">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-white.png" alt />
                        </a>
                    </div>
                    <div className="tpoffcanvas__close-btn">
                        <a className="close-btn" href="javascript:void(0)"><i className="fal fa-times-hexagon" /></a>
                    </div>
                    <div className="tpoffcanvas__content d-none d-sm-block">
                        <p>We deploy world-class Creative <br /> on demand.</p>
                    </div>
                    <div className="mobile-menu">
                    </div>
                    <div className="tpoffcanvas__contact">
                        <span>Contact us</span>
                        <ul>
                            <li><i className="fas fa-star" /> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank">Melbone
                                st, Australia, Ny 12099</a></li>
                            <li><i className="fas fa-star" /> <a href="tel:8180012345678">+81 800 123 456 78</a></li>
                            <li><i className="fas fa-star" /> <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="tpoffcanvas__input d-none d-sm-block">
                        <p>Get UPdate</p>
                        <form className="p-relative" action="#">
                            <input type="text" placeholder="Enter mail" />
                            <button type="submit"><i className="fas fa-paper-plane" /></button>
                        </form>
                    </div>
                    <div className="tpoffcanvas__instagram d-none d-sm-block">
                        <p>Check Instagram POst</p>
                        <div className="tp-insta">
                            <div className="row">
                                <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-1.jpg" alt /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-2.jpg" alt /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-4.jpg" alt /></a></div>
                                <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-4.jpg" alt /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body-overlay" />

        </>
    )
}

export default PagesMobileMenu