import React from 'react';

const ScrollToTopIcon = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className="scroll-top scroll-to-target"
            onClick={handleScrollToTop}
            data-target="html"
        >
            <i className="far fa-angle-double-up" />
        </button>
    );
};

export default ScrollToTopIcon;
