import React from 'react'
import PagesBreadcrumb from '../../components/OtherPages/PagesBreadcrumb'

const PortfolioList = () => {

    return (
        <>
            <PagesBreadcrumb
                title='My Portfolio'
                metaTitle='A showcase of my projects, skills, and achievements.'
            />
            <div className="tp-project-area pt-120 pb-120 p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-section-box-two text-center">
                                <h5 className="tp-subtitle">Complete Project</h5>
                                <h2 className="tp-title">Creative work.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-80">
                        <div className="col-10 p-0 text-center">
                            <div className="tp-project-tab-button masonary-menu">
                                <button className="active" data-filter="*"><span>Website</span></button>
                                <button data-filter=".cat2"><span>Landing Page</span></button>
                                <button data-filter=".cat3"><span>ios App</span></button>
                                <button data-filter=".cat4"><span>Landing Page</span></button>
                                <button data-filter=".cat5"><span>Branding Design</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row grid gx-45">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat1 cat3">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-11.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-11.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat5 cat4">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-10.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-10.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat5 cat2">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-14.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-14.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat1 cat3 cat4">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-13.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-13.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat2 cat5">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-12.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-12.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat2 cat4">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-15.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-15.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat2 cat65 cat3">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-16.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-16.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  grid-item cat1 cat2">
                            <div className="tp-project-item-two p-relative mb-45 fix">
                                <div className="portfolio-thumb fix">
                                    <img className=" w-100" src="assets/img/portfolio/port-17.jpg" alt />
                                </div>
                                <div className="tp-portfolio-content-box">
                                    <h3 className="portfolio-animation-title"><a href="portfolio-details.html">Hosting Website</a></h3>
                                    <span>Ui/Ux Design</span>
                                </div>
                                <div className="portfolio-animation-icon">
                                    <a className="popup-image" href="assets/img/portfolio/port-17.jpg">
                                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-project-button text-center mt-25">
                                <a className="tp-btn-yellow" href="#">Lode more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioList