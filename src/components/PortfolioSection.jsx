import React, { useState } from 'react'
import data from '../data.json';
import getCategoryName from '../utils/getCategoryName';
import Portfoliocard from './Portfoliocard';

function PortfolioSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Generate unique category IDs and names
    const uniqueCategoryIds = ['All', ...new Set(data.projects.map((x) => x.category))];


    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All'
        ? data.projects
        : data.projects.filter(project => project.category === selectedCategory);

  return (
    <>
    
    
            {/* Start */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 mb-4 filters-group-wrap">
                            <div className="filters-group">
                                <ul className="container-filter filter-border list-inline mb-0 filter-options text-center">
                                    {uniqueCategoryIds.map((categoryID, index) => (
                                        <li
                                            key={index}
                                            className={`list-inline-item text-uppercase position-relative ${selectedCategory === categoryID ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(categoryID)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {getCategoryName(categoryID)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}

                    <div id="grid" className="row">
                        {filteredProjects.map((project) => (
                            <Portfoliocard key={project.id} details={project} />
                        ))}
                    </div>{/*end row*/}

                </div>{/*end container*/}
            </section>{/*end section*/}
            {/* End */}
    </>
  )
}

export default PortfolioSection