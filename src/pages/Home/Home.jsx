import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import TestimonialSlider from './Components/TestimonialSlider';
import ProjectSection from './Components/ProjectSection';
import HeroSection from './Components/HeroSection';
import ServiceSection from './Components/ServiceSection';
import CtaSection from './Components/CtaSection';
import BlogSection from './Components/BlogSection';
import NewsSection from './Components/NewsSection';
import MobileMenu from './Components/MobileMenu';

const Home = () => {
    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
            callback: (box) => {
                if (box && box.className && typeof box.className === "string") {
                    try {
                        wow.resetAnimation(box);
                    } catch (e) {
                        console.error("WOW.js resetAnimation error:", e);
                    }
                }
            },
        });
        const originalResetAnimation = wow.resetAnimation;
        wow.resetAnimation = (target) => {
            if (target && target.className && typeof target.className === "string") {
                originalResetAnimation(target);
            }
        };
        wow.init();
    }, []);

    return (
        <>
            <MobileMenu />

            <main>
                <HeroSection />
                <ServiceSection />
                <ProjectSection />
                {/* <TestimonialSlider /> */}
                <CtaSection />
                {/* <BlogSection /> */}
                <NewsSection />
            </main>
        </>
    );
}

export default Home;
