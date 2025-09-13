import React, { useState } from "react";

function PortfolioSection() {
  const [Projects] = useState([
    {
      id: 1,
      title: "Titan Nepal",
      slug: "titan-nepal",
      category: ["Wordpress", "Ecommerce", "Website"],
      link: "https://ntn.com.np/",
      image: "/images/portfolio/item-1.png",
    },
    {
      id: 2,
      title: "SRK Charity",
      slug: "srk-charity",
      category: ["Wordpress", "Charity", "Website"],
      link: "https://srkcharity.org/",
      image: "/images/portfolio/item-2.png",
    },
    {
      id: 3,
      title: "Ecorp Bussiness",
      slug: "ecorp-bussiness",
      category: ["Website"],
      link: "https://ecorpbusiness.com/",
      image: "/images/portfolio/item-3.png",
    },
    {
      id: 4,
      title: "Ecorp India",
      slug: "ecorp-india",
      category: ["Website"],
      link: "https://ecorpbusiness.com/in/",
      image: "/images/portfolio/item-4.png",
    },
  ]);

  // Get unique categories for filter buttons
  const uniqueCategories = [
    "All",
    ...new Set(Projects.flatMap((project) => project.category)),
  ];

  // State for selected filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? Projects
      : Projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <>
      {/* <!-- portfolio --> */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title">My Works</h2>
            </div>
            
            <div className="col-12">
              <div
                className="btn-group btn-group-toggle flex-wrap justify-content-center d-flex"
                data-toggle="buttons"
              >
                {uniqueCategories.map((category, index) => (
                  <label
                    key={index}
                    className={`btn btn-sm btn-primary ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value={category.toLowerCase()}
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      hidden
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Project List */}
          <div className="row shuffle-wrapper">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="col-lg-4 col-6 mb-4 shuffle-item"
                >
                  <div className="position-relative rounded hover-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded w-100 d-block"
                    />
                    <div className="hover-overlay">
                      <div className="hover-content">
                        <a
                          className="btn btn-light btn-sm"
                          href={project.link || "#!"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No projects available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- /portfolio --> */}
    </>
  );
}

export default PortfolioSection;
