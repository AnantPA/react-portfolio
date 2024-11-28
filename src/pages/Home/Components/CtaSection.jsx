import React from 'react'

const CtaSection = () => {
    return (
        <div className="tp-cta-area black-bg p-relative fix">
            <div className="creative-shape-img-2">
                <img src="assets/img/creative/creative-circle-img.png" alt />
            </div>
            <div className="project-shape-img">
                <img src="assets/img/project/project-zoom-img.png" alt />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div
                            className="tp-cta-section-title-box pl-60 pt-180 z-index wow tpfadeUp"
                            data-wow-duration=".3s"
                            data-wow-delay=".6s"
                        >
                            <h5 className="tp-subtitle">What I Do</h5>
                            <h2 className="tp-title tp-white-text pb-10">
                                Building modern, scalable web applications
                            </h2>
                            <p className="tp-description pb-20">
                                I specialize in creating responsive user interfaces, building secure APIs, and managing databases to deliver seamless, full-stack web solutions.
                            </p>
                            <a className="tp-btn-border" href="/assets/Anant_CV.pdf" download>
                                Download CV <i className="far fa-download" />
                            </a>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
                        <div className="tp-cta-img-item z-index-1 pt-115 pl-10">
                            <img src="assets/img/cta/cta-1.png" alt />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-cta-bottom-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                                    <div className="tp-cta-social-info">
                                        <a className="tp-btn-white-lg" href="#"><img className="mr-15" src="assets/img/cta/1.png" alt /> 8k
                                            Followers
                                            </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                                    <div className="tp-cta-social-info">
                                        <a className="tp-btn-white-lg" href="#"><img className="mr-15" src="assets/img/cta/2.png" alt /> 12k
                                            Followers</a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                                    <div className="tp-cta-social-info">
                                        <a className="tp-btn-white-lg" href="#"><img className="mr-15" src="assets/img/cta/3.png" alt /> 65k
                                            Followers</a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                                    <div className="tp-cta-social-info">
                                        <a className="tp-btn-white-lg" href="#"><img className="mr-15" src="assets/img/cta/4.png" alt />1.5
                                            M Followers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection