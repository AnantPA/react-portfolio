import React from 'react'

const AboutDetails = () => {
    return (
        <>
            {/* <div className="am-about-me-area pt-110 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 col-12">
                            <div className="ac-ab-img fix">
                                <img src="assets/img/about/about-8.1.jpg" alt />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-12">
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 col-md-6">
                                    <div className="amaboutinfo">
                                        <div className="amaboutinfo__client-info">
                                            <h4>Ritarexa Ditarmen</h4>
                                            <span>UI/UX Designer</span>
                                            <p>Phasellus in libero et nunc malesuada tincidu Morbi auctor tristique semper. Nunc
                                                condimentum dapibus felis</p>
                                        </div>
                                        <div className="amaboutinfo__experience">
                                            <p><b>Expertise:</b> Genetic Specialist</p>
                                            <p><b>Experience:</b> 5 Years</p>
                                            <p><a href="mailto:webmail.info@gmail.com"><b>E-mail:</b> webmail.info@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-6">
                                    <div className="amaboutsocial text-start text-md-end">
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="#" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text"><span>Facebook</span></div>
                                                    <div className="tp-si__icon"><i className="fab fa-facebook-f" /></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="#" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text tp-si-color-1"><span>Pintarest</span></div>
                                                    <div className="tp-si__icon tp-si-color-1"><i className="fab fa-pinterest-p" /></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="#" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text  tp-si-color-2"><span>Behance</span></div>
                                                    <div className="tp-si__icon  tp-si-color-2"><i className="fab fa-behance" /></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="#" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text  tp-si-color-3"><span>Twitter</span></div>
                                                    <div className="tp-si__icon  tp-si-color-3"><i className="fab fa-twitter" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="#" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text  tp-si-color-4"><span>Youtube</span></div>
                                                    <div className="tp-si__icon  tp-si-color-4"><i className="fab fa-youtube" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="am-about-me-area pt-110 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Profile Image */}
                        <div className="col-xl-5 col-lg-5 col-12">
                            <div className="ac-ab-img fix">
                                <img src="assets/img/about/about-8.1.jpg" alt />
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="col-xl-7 col-lg-7 col-12">
                            <div className="row">
                                {/* Personal Information */}
                                <div className="col-xl-7 col-lg-8 col-md-6">
                                    <div className="amaboutinfo">
                                        <div className="amaboutinfo__client-info">
                                            <h4>Anant Patel</h4>
                                            <span>MERN Stack Developer</span>
                                            <p>
                                                I am a passionate developer skilled in creating scalable web applications using MongoDB,
                                                Express.js, React.js, and Node.js. I aim to deliver efficient and dynamic solutions for
                                                businesses and users alike.
                                            </p>
                                        </div>
                                        <div className="amaboutinfo__experience">
                                            <p><b>Expertise:</b> Full-Stack Development</p>
                                            <p><b>Experience:</b> 2+ Years</p>
                                            <p><a href="mailto:anantpatel8901@gmail.com"><b>E-mail:</b> anantpatel8901@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div className="col-xl-5 col-lg-4 col-md-6">
                                    <div className="amaboutsocial text-start text-md-end">
                                        {/* Facebook */}
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="https://facebook.com/johndoe" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text"><span>Facebook</span></div>
                                                    <div className="tp-si__icon"><i className="fab fa-facebook-f" /></div>
                                                </div>
                                            </a>
                                        </div>

                                        {/* LinkedIn */}
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="https://linkedin.com/in/johndoe" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text tp-si-color-1"><span>LinkedIn</span></div>
                                                    <div className="tp-si__icon tp-si-color-1"><i className="fab fa-linkedin-in" /></div>
                                                </div>
                                            </a>
                                        </div>

                                        {/* GitHub */}
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="https://github.com/johndoe" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text tp-si-color-2"><span>GitHub</span></div>
                                                    <div className="tp-si__icon tp-si-color-2"><i className="fab fa-github" /></div>
                                                </div>
                                            </a>
                                        </div>

                                        {/* Twitter */}
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="https://twitter.com/johndoe" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text tp-si-color-3"><span>Twitter</span></div>
                                                    <div className="tp-si__icon tp-si-color-3"><i className="fab fa-twitter" /></div>
                                                </div>
                                            </a>
                                        </div>

                                        {/* YouTube */}
                                        <div className="amaboutsocial__icon mb-30">
                                            <a href="https://youtube.com/johndoe" className="si-btn-link">
                                                <div className="tp-si-wrapper d-flex justify-content-end">
                                                    <div className="tp-si__text tp-si-color-4"><span>YouTube</span></div>
                                                    <div className="tp-si__icon tp-si-color-4"><i className="fab fa-youtube" /></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutDetails