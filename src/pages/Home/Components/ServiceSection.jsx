import React from 'react';

const ServiceSection = () => {
    return (
        <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-service-section-box-two text-center">
                            <h5 className="tp-subtitle pb-10">What I Do</h5>
                            <h2 className="tp-title tp-white-text pb-35">My Service Area</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-12">
                    {/* Front-End Development */}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                        <div className="tp-sv-item-two tp-sv-blue-color mb-30">
                            <div className="tp-sv-img mb-40">
                                <img src="/assets/img/service/pc_icon.png" alt="Front-End Development" />
                            </div>
                            <div className="tp-sv-content-tow">
                                <h3 className="tp-sv-product-design">Front-End Development</h3>
                                <p>I craft responsive, dynamic user interfaces using React.js and modern design systems, ensuring seamless user experiences.</p>
                            </div>
                            <div className="tp-sv-icon-two">
                                <a href="service-details.html"><i className="fas fa-long-arrow-up" /></a>
                            </div>
                        </div>
                    </div>
                    {/* Back-End Development */}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                        <div className="tp-sv-item-two tp-sv-sky-color mb-30">
                            <div className="tp-sv-img mb-40">
                                <img src="/assets/img/service/api.png" alt="Back-End Development" />
                            </div>
                            <div className="tp-sv-content-tow">
                                <h3 className="tp-sv-product-design">Back-End Development</h3>
                                <p>Using Node.js and Express, I build scalable, secure, and efficient server-side applications tailored to your needs.</p>
                            </div>
                            <div className="tp-sv-icon-two">
                                <a href="service-details.html"><i className="fas fa-long-arrow-up" /></a>
                            </div>
                        </div>
                    </div>
                    {/* Database Management */}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                        <div className="tp-sv-item-two tp-sv-pink-color mb-30">
                            <div className="tp-sv-img mb-40">
                                <img src="/assets/img/service/database.png" alt="Database Management" />
                            </div>
                            <div className="tp-sv-content-tow">
                                <h3 className="tp-sv-product-design">Database Management</h3>
                                <p>With MongoDB, I design and manage databases, ensuring optimal performance and secure data storage solutions.</p>
                            </div>
                            <div className="tp-sv-icon-two">
                                <a href="service-details.html"><i className="fas fa-long-arrow-up" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
