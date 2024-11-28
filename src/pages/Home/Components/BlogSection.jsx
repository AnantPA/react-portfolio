import React from 'react'

const BlogSection = () => {
    return (
        <div className="tp-blog-area pt-125 pb-90 grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-blog-section-box text-center mb-50">
                            <h5 className="tp-subtitle">Blog &amp; Article</h5>
                            <h2 className="tp-title">Recent blog post</h2>
                        </div>
                    </div>
                </div>
                <div className="tp-blog-space">
                    <div className="row gx-120">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12 tp-blog-border mb-30 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                            <div className="tp-blog-box ">
                                <div className="tp-blog-item blog-grey-color">
                                    <div className="tp-blog-img fix mb-35">
                                        <a href="#"><img className="w-100" src="assets/img/blog/blog-3.jpg" alt /></a>
                                    </div>
                                    <div className="tp-blog-meta d-flex justify-content-between mb-30">
                                        <a href="#">Tutorilas</a>
                                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                                    </div>
                                    <div className="tp-blog-info">
                                        <h3 className="tp-blog-title"><a href="blog-details.html">When and how to use Freelancers In Your Organization</a></h3>
                                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                                            products
                                            with blazing-fast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-30 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
                            <div className="tp-blog-box">
                                <div className="tp-blog-item blog-grey-color">
                                    <div className="tp-blog-img fix mb-35">
                                        <a href="#"><img className="w-100" src="assets/img/blog/blog-4.png" alt /></a>
                                    </div>
                                    <div className="tp-blog-meta d-flex justify-content-between mb-30">
                                        <a href="#">Business</a>
                                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                                    </div>
                                    <div className="tp-blog-info">
                                        <h3 className="tp-blog-title"><a href="blog-details.html">A complete guide to mobile app marketing </a></h3>
                                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                                            products
                                            with blazing-fast</p>
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

export default BlogSection