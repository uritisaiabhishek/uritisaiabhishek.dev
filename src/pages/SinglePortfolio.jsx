import React from 'react'
import PageBanner from '../components/PageBanner'
import data from '../data.json';
import { useParams } from 'react-router-dom';
import getCategoryName from '../utils/getCategoryName';

function SinglePortfolio({props}) {
    const { projectName } = useParams();
    const project  = data.projects.filter(x => x.slug === projectName)[0];
    return (
        <>
            <PageBanner pagename={project.title} />
            
            {/* Start Work Detail */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="work-detail">
                                <h4 className="title mb-3">Introduction of Project :</h4>
                                {project.description}
                                {
                                    project.featuredImage && 
                                    <img src={project.featuredImage} alt={project.title} className='img-fluid' />
                                }
                                {
                                    project.testimonial && (
                                        <blockquote className="blockquote text-center mt-4 mb-0 p-md-4">
                                            <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                                            <p className="text-muted mb-0 h5 fw-normal fst-italic">{project.testimonial}</p>
                                            <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                                        </blockquote> 
                                    )
                                }
                            </div>
                        </div>{/*end col*/}

                        <div className="col-lg-4 col-md-6 order-1 order-md-2">
                            <div className="sticky-bar work-detail p-4 rounded shadow">
                                <h4 className="title pb-3 border-bottom">Project Info :</h4>

                                <ul className="list-unstyled mb-0">
                                    {
                                        project.client && (
                                            <li className="mt-3">
                                                <b>Client :</b>
                                                <span>{project.client}</span>
                                            </li>
                                        )
                                    }
                                    {
                                        project.category && (
                                            <li className="mt-3">
                                                <b>Category :</b>
                                                <span>{getCategoryName(project.category)}</span>
                                            </li>
                                        )
                                    }
                                    {
                                        project.startDate && (
                                            <li className="mt-3">
                                                <b>Start Date :</b>
                                                <span>{project.startDate}</span>
                                            </li>
                                        )
                                    }
                                    {
                                        project.endDate && (
                                            <li className="mt-3">
                                                <b>Start Date :</b>
                                                <span>{project.endDate}</span>
                                            </li>
                                        )
                                    }
                                    {
                                        project.url && (
                                            <li className="mt-3">
                                                <b>Website :</b>
                                                <a href={project.url} target='_blank'>{project.url}</a>
                                            </li>
                                        )
                                    }
                                    {
                                        project.location && (
                                            <li className="mt-3">
                                                <b>Location :</b>
                                                <span>{project.location}</span>
                                            </li>
                                        )
                                    }
                                </ul>   
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}
            </section>{/*end section*/}
            {/* End Work Detail */}
        </>
    )
}

export default SinglePortfolio