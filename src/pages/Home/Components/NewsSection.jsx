import React from 'react'
import ROUTE_URLS from '../../../config/routes'
import { Link } from 'react-router-dom'

const NewsSection = () => {
    return (
        <>
            <div className="tp-news-area black-bg fix">
                <div className="container">
                    <div className="row align-items-end flex-wrap-reverse flex-md-wrap">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tp-newsletter-left-img pt-60 p-relative wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                                <div className="z-index"> <img src="assets/img/news/news-2.png" alt /></div>
                                <div className="news-shape-img">
                                    <img src="assets/img/creative/creative-circle-img.png" alt />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tp-news-letter-section-box-two pt-135 pb-145 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                                <h5 className="tp-subtitle">Got an Idea?</h5>
                                <h2 className="tp-title tp-white-text pb-10">Let’s bring it to life with MERN Stack expertise</h2>
                                <Link className="tp-btn-border" to={ROUTE_URLS.CONTACT}>Schedule a Meeting</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-news-letter-area">
                <div className="tp-suscribe-newslatter theme-bg pt-60 pb-60" data-background="assets/img/news/shape-3.png">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="tp-newsletter-title">
                                    <h3 className="tp-news-title">Stay Updated</h3>
                                    <p>Subscribe for updates on modern web development, MERN Stack tips, and project insights.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="tp-news-button p-relative">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your mail" />
                                        <button className="tp-submit-button tp-btn-yellow" type="submit">Subscribe <i className="far fa-arrow-right" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSection