import React, { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";

const ProjectSection = () => {
    const [filterKey, setFilterKey] = useState("*");
    const gridRef = useRef(null);

    useEffect(() => {
        const iso = new Isotope(gridRef.current, {
            itemSelector: ".grid-item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s",
        });

        // Apply the filter when filterKey changes
        iso.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });

        return () => iso.destroy();
    }, [filterKey]);

    const handleFilterChange = (filter) => {
        setFilterKey(filter);
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
        <div className="tp-project-area pt-120 pb-120 p-relative">
            <div className="tp-project-shape-one">
                <img src="assets/img/project/project-shape-2.png" alt="" />
            </div>
            <div className="tp-project-shape-two">
                <img src="assets/img/project/project-shape-3.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="project-section-box-two text-center pb-20">
                            <h5 className="tp-subtitle">Complete Project</h5>
                            <h2 className="tp-title">Creative work.</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-80">
                    <div className="col-10 p-0 text-center">
                        <div className="tp-project-tab-button masonary-menu">
                            <button
                                className={filterKey === "*" ? "active" : ""}
                                onClick={() => handleFilterChange("*")}
                            >
                                <span>All</span>
                            </button>
                            <button
                                className={filterKey === "cat2" ? "active" : ""}
                                onClick={() => handleFilterChange("cat2")}
                            >
                                <span>Landing Page</span>
                            </button>
                            <button
                                className={filterKey === "cat3" ? "active" : ""}
                                onClick={() => handleFilterChange("cat3")}
                            >
                                <span>Ecommerce</span>
                            </button>
                            <button
                                className={filterKey === "cat4" ? "active" : ""}
                                onClick={() => handleFilterChange("cat4")}
                            >
                                <span>SaaS</span>
                            </button>
                            <button
                                className={filterKey === "cat5" ? "active" : ""}
                                onClick={() => handleFilterChange("cat5")}
                            >
                                <span>Others</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={gridRef} className="row grid gx-45">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item ${project.categories.join(
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
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
