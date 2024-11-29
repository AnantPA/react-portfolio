import React from 'react'

const HeroSection = () => {
    return (
        <div className="tp-hero-area-two">
            <div className="tp-hero-bg-circle p-relative">
                <div className="tp-hero-light-shape-one">
                    <img src="/assets/img/hero/hero-light-1.png" alt="" />
                </div>
                <div className="tp-hero-light-shape-two">
                    <img src="/assets/img/hero/hero-light-2.png" alt="" />
                </div>
                <div className="tp-hero-light-shape-three z-index-1">
                    <img src="/assets/img/hero/Spiral.png" alt="" />
                </div>
                <div className="tp-hero-light-shape-four z-index-1">
                    <img src="/assets/img/hero/hero-light-2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="tp-hero-content-box text-center">
                                <h3
                                    className="tp-hero-title wow fadeInUp"
                                    data-wow-duration="0.3s"
                                    data-wow-delay="0.6s"
                                >
                                    Hi 👋 I am Anant, a passionate
                                    <span className="tp-highlight mx-2">
                                        <svg
                                            width={244}
                                            height={8}
                                            viewBox="0 0 244 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 0L244 8H0V0Z" fill="#FFDC60" />
                                        </svg>
                                        <i className="tp-theme-color">MERN Stack Developer</i>
                                    </span>
                                </h3>
                                <div
                                    className="tp-hero-img mt-20 mb-80 wow fadeInUp"
                                    data-wow-duration="0.5s"
                                    data-wow-delay="0.8s"
                                >
                                    <img src="/assets/img/hero/pc_work.png" alt="" />
                                </div>
                                <div
                                    className="tp-hero-social-link wow fadeInUp"
                                    data-wow-duration="0.7s"
                                    data-wow-delay="1s"
                                >
                                    <a className="tp-btn-white-brand" href="https://github.com/AnantPA" target='_blank'>
                                        <img
                                            className="mr-15"
                                            src="/assets/img/logo/git-logo.png"
                                            alt="github-icon"
                                        />
                                        GitHub <i className="fal fa-long-arrow-right" />
                                    </a>
                                    <a className="tp-btn-white-brand" href="https://www.linkedin.com/in/anant-patel-a06901333" target='_blank'>
                                        <img
                                            className="mr-15"
                                            src="/assets/img/logo/linkdin-logo.png"
                                            alt="linked-in-icon"
                                        />
                                        Linkdin <i className="fal fa-long-arrow-right" />
                                    </a>
                                    <a className="tp-btn-white-brand" href="mailto:anantpatel8901@gmail.com" target='_blank'>
                                        <img
                                            className="mr-15"
                                            src="/assets/img/hero/hero-icon-3.png"
                                            alt="gmail-icon"
                                        />
                                        Gmail <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection