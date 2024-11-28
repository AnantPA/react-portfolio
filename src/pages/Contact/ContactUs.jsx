import React from 'react'
import PagesMobileMenu from '../../components/OtherPages/PagesMobileMenu'
import PagesBreadcrumb from '../../components/OtherPages/PagesBreadcrumb'
import ROUTE_URLS from '../../config/routes'

const ContactUs = () => {
    return (
        <>
            <PagesMobileMenu />
            <main>
                <PagesBreadcrumb
                    title='Contact Us'
                    metaTitle='We’d love to hear from you! Get in touch with us using the form below or reach out via email or phone.'
                    link={ROUTE_URLS.CONTACT}
                />
                <div className="tp-contact-area pt-135 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="tp-contct-wrapper contact-space-40">
                                    <div className="tp-contact-thumb mb-60">
                                        <img src="/assets/img/contact/contact-1.jpg" alt="Contact Thumbnail" />
                                    </div>
                                    <div className="tp-contact-info mb-40">
                                        <h4 className="contact-title">Mail Address</h4>
                                        <span>
                                            <a href="mailto:anantpatel8901@gmail.com">anantpatel8901@gmail.com</a>
                                        </span>
                                    </div>
                                    <div className="tp-contact-info mb-40">
                                        <h4 className="contact-title">Phone Number</h4>
                                        <span>
                                            <a href="tel:+919601498833">+91 9601498833</a>
                                        </span>
                                    </div>
                                    <div className="tp-contact-info">
                                        <h4 className="contact-title">Address</h4>
                                        <span>
                                            <a href="https://maps.app.goo.gl/BjMLgNU5n8nKCr7C9" target="_blank">
                                                Adajan, Gujarat, India
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="tpcontact">
                                    <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                                    <div className="tpcontact__form tpcontact__form-3">
                                        <form id="contact-form" action="https://example.com/submit-form" method="POST">
                                            <input name="name" type="text" placeholder="Enter your Name" required />
                                            <input name="email" type="email" placeholder="Enter your Email" required />
                                            <textarea name="message" placeholder="Enter your Message" rows="5" required></textarea>
                                            <button type="submit" className="tp-btn-yellow">Send Message</button>
                                        </form>
                                    </div>
                                    <p className="ajax-response" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default ContactUs