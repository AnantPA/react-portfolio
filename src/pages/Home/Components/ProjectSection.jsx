import React, { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";

const ProjectSection = () => {
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

    // Clean up MixItUp instance on component unmount
    return () => mixer.destroy();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter); // Update the active filter
  };

  const projectData = [
    {
      src: "assets/img/project/pro1.jpg",
      alt: "Payroll System",
      link: "https://payroll.vrishal.in/",
      categories: ["cat4"],
    },
    {
      src: "assets/img/project/pro2.jpg",
      alt: "Cashflow System",
      link: "https://cashflow-system-80e5d.web.app/",
      categories: ["cat4"],
    },
    {
      src: "assets/img/project/pro3.jpg",
      alt: "CatholicNetworker",
      link: "https://catholicnetworker.com/",
      categories: ["cat5"],
    },
    {
      src: "assets/img/project/pro4.jpg",
      alt: "Contigo U",
      link: 'https://contigou.com/',
      categories: ["cat2", "cat5"],
    },
    {
      src: "assets/img/project/pro5.jpg",
      alt: "Indiazona",
      link: "assets/img/project/pro5.jpg",
      categories: ["cat2", "cat3"],
    },
    {
      src: "assets/img/project/pro6.jpg",
      alt: "Om Outline",
      link: "https://omathomeapp.com/",
      categories: ["cat2", "cat5"],
    },
    {
      src: "assets/img/project/pro7.jpg",
      alt: "Padhaa-e",
      link: "https://padhaai-bc64f.web.app/",
      categories: ["cat2", "cat3"],
    },
    {
      src: "assets/img/project/pro8.jpg",
      alt: "Payroll System",
      link: "https://payroll.vrishal.in/",
      categories: ["cat4"],
    },
    {
      src: "assets/img/project/pro9.jpg",
      alt: "Project Management System(PMS)",
      link: "https://pms.vrishal.in/",
      categories: ["cat4"],
    },
    {
      src: "assets/img/project/pro10.jpg",
      link: "https://ai-trip-generater-web.vercel.app/",
      alt: "AI Tours",
      categories: ["cat4"],
    },
  ];

  //add project changes in the code
  // add protfolio

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

        {/* Filter Buttons */}
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

        {/* Project Grid */}
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
                  <img className="w-100" src={project.src} alt={project.alt} />
                </div>
                <div className="tp-project-icon-two">
                  <a className="popup-image" href={project.link}>
                    <i className="fas fa-long-arrow-up" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Optional sizer element for layout */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 my-sizer-element"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
