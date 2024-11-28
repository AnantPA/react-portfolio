// TestimonialSlider.js
import React, { useRef, useEffect } from "react";
import Swiper from "swiper"; // Import Swiper core
import 'swiper/css';
import 'swiper/css/pagination';  // Ensure pagination styles are included
import 'swiper/css/navigation';

const TestimonialSlider = () => {
    const swiperContainerRef = useRef(null); // Create a ref for the swiper container
    const paginationRef = useRef(null); // Create a ref for the pagination container

    useEffect(() => {
        if (swiperContainerRef.current) {
            // Initialize Swiper only if it hasn't been initialized already
            new Swiper(swiperContainerRef.current, {
                spaceBetween: 50,  // Adjust space between slides
                slidesPerView: 1,  // Display one slide at a time
                loop: true,        // Enable looping
                pagination: {
                    el: paginationRef.current,  // Use the pagination ref here
                    clickable: true,  // Make pagination dots clickable
                    type: 'bullets',  // Ensure the pagination is set to bullets
                },
                autoplay: {
                    delay: 2500,      // Autoplay every 2.5 seconds
                    disableOnInteraction: false, // Keep autoplay running even after interaction
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }, []);

    return (
        <div className="testimonial-area grey-bg pt-125 pb-120 fix p-relative">
            <div className="d-none">
                {/* Testimonial shapes */}
                <div className="testimonial-shape-1">
                    <img src="assets/img/testimonial/testi-info-icon-1.html" alt="" />
                </div>
                <div className="testimonial-shape-2">
                    <img src="assets/img/testimonial/testi-info-icon-2.html" alt="" />
                </div>
                {/* More shapes */}
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10 col-12">
                        <div className="tp-testimonial-section-box-two text-center pb-20">
                            <h5 className="tp-subtitle">Testimonial</h5>
                            <h2 className="tp-title">Client feedback</h2>
                        </div>

                        <div className="tp-testimonial-slider-two mb-50">
                            <div className="swiper-container testimonial-slider-two" ref={swiperContainerRef}>
                                <div className="swiper-wrapper">
                                    {/* Testimonial Slide 1 */}
                                    <div className="swiper-slide">
                                        <div className="tp-testimonial-item-two text-center">
                                            <div className="tp-testimonial-info">
                                                <img src="assets/img/testimonial/testi-7.png" alt="" />
                                                <h4>Alextina Diterson</h4>
                                                <span>CEO of (Orix)
                                                    <i className="fas fa-star fa-stars-1"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <p>
                                                    Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional. He is honest, decent, and reliable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial Slide 2 */}
                                    <div className="swiper-slide">
                                        <div className="tp-testimonial-item-two text-center">
                                            <div className="tp-testimonial-info">
                                                <img src="assets/img/testimonial/testi-7.png" alt="" />
                                                <h4>Alextina Diterson</h4>
                                                <span>CEO of (Orix)
                                                    <i className="fas fa-star fa-stars-1"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <p>
                                                    Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional. He is honest, decent, and reliable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add more slides as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Pagination */}
            <div className="testimonial-slider-dots swiper-pagination" ref={paginationRef}></div>
        </div>
    );
};

export default TestimonialSlider;
