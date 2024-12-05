import React, { useEffect, useRef, useState } from "react";
import PagesBreadcrumb from "../../components/OtherPages/PagesBreadcrumb";
import mixitup from "mixitup";

const PortfolioList = () => {

    const containerRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const mixer = mixitup(containerRef.current, {
            selectors: {
                target: ".mix",
            },
            animation: {
                duration: 700,
            },
        });

        return () => mixer.destroy();
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter
    };

    const projectData = [
        {
            src: "assets/img/project/pro1.jpg",
            alt: "Payroll System",
            categories: ["cat4"],
        },
        {
            src: "assets/img/project/pro2.jpg",
            alt: "Cashflow System",
            categories: ["cat4"],
        },
        {
            src: "assets/img/project/pro3.jpg",
            alt: "CatholicNetworker",
            categories: ["cat5"],
        },
        {
            src: "assets/img/project/pro4.jpg",
            alt: "Contigo U",
            categories: ["cat2", "cat5"],
        },
        {
            src: "assets/img/project/pro5.jpg",
            alt: "Indiazona",
            categories: ["cat2", "cat3"],
        },
        {
            src: "assets/img/project/pro6.jpg",
            alt: "Om Outline",
            categories: ["cat2", "cat5"],
        },
        {
            src: "assets/img/project/pro7.jpg",
            alt: "Padhaa-e",
            categories: ["cat2", "cat3"],
        },
        {
            src: "assets/img/project/pro8.jpg",
            alt: "Payroll System",
            categories: ["cat4"],
        },
        {
            src: "assets/img/project/pro9.jpg",
            alt: "Project Management System(PMS)",
            categories: ["cat4"],
        },
    ];

    return (
        <>
            <PagesBreadcrumb
                title="My Portfolio"
                metaTitle="A showcase of my projects, skills, and achievements."
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
                                <button
                                    className={activeFilter === "all" ? "active" : ""}
                                    onClick={() => handleFilterClick("all")}
                                    data-filter="all"
                                >
                                    <span>All</span>
                                </button>
                                <button
                                    className={activeFilter === "cat2" ? "active" : ""}
                                    onClick={() => handleFilterClick("cat2")}
                                    data-filter=".cat2"
                                >
                                    <span>Landing Page</span>
                                </button>
                                <button
                                    className={activeFilter === "cat3" ? "active" : ""}
                                    onClick={() => handleFilterClick("cat3")}
                                    data-filter=".cat3"
                                >
                                    <span>Ecommerce</span>
                                </button>
                                <button
                                    className={activeFilter === "cat4" ? "active" : ""}
                                    onClick={() => handleFilterClick("cat4")}
                                    data-filter=".cat4"
                                >
                                    <span>SaaS</span>
                                </button>
                                <button
                                    className={activeFilter === "cat5" ? "active" : ""}
                                    onClick={() => handleFilterClick("cat5")}
                                    data-filter=".cat5"
                                >
                                    <span>Others</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={containerRef} className="row grid gx-45">
                        {projectData.map((project, index) => (
                            <div
                                key={index}
                                className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 mix ${project.categories.join(
                                    " "
                                )}`}
                            >
                                <div className="tp-project-item-two p-relative mb-45">
                                    <div className="project-one fix">
                                        <img
                                            className="w-100"
                                            src={project.src}
                                            alt={project.alt}
                                        />
                                    </div>
                                    <div className="tp-project-icon-two">
                                        <a
                                            className="popup-image"
                                            href={project.src}
                                        >
                                            <i className="fas fa-long-arrow-up" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 my-sizer-element"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioList;
