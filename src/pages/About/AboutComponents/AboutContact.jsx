import React from 'react'

const AboutContact = () => {
    return (
        <>
            <div className="am-contact-area pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="am-contact-info p-relative">
                                <div>
                                    <h4 className="am-contact-title">Direct Message me!</h4>
                                </div>
                                <div className="am-border-shape">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form text-center">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="input">
                                                <input type="text" placeholder="Enter your Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input">
                                                <input type="email" placeholder="Enter you mail" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="textarea">
                                                <textarea placeholder="Enter your Message" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <input className="tp-btn-lg-yellow" type="submit" defaultValue="Send Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutContact