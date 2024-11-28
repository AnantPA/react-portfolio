import React from 'react'
import ROUTE_URLS from '../../config/routes'
import { Link } from 'react-router-dom'

const PagesBreadcrumb = ({ title, metaTitle, link }) => {
    return (
        <>
            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" data-background="/assets/img/breadcrum/ab-1.1.jpg">
                <div className="ac-about-shape-img z-index-1">
                    <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">{title}</h3>
                                <p className="breadcrumb__subtitle">{metaTitle}</p>
                                <Link to={link} className="tp-btn-white-border"> Let's Collaborate <i className="far fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PagesBreadcrumb