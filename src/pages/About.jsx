import React from 'react'
import PageBanner from '../components/PageBanner'
import SocialShare from '../components/Socialmedia'
import data from '../data.json';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function About() {

    // Function to extract and format the year range
    const formatYearRange = (fromDate, toDate) => {
        const fromYear = new Date(fromDate).getFullYear();
        const toYear = toDate 
            ? new Date(toDate).getFullYear() 
            : "Present"; // Use current year if toDate is null
        return `${fromYear} - ${toYear}`;
    };

  return (
    <>
    
        <PageBanner pagename="About Me" featuredImage={"./assets/background.jpg"} />

        {/* Candidate Detail Start */}
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="card job-profile shadow border-0">
                            <div className="text-center py-5 border-bottom rounded-top">
                                <img src="assets/face.JPG" className="avatar object-fit-cover avatar-medium mx-auto rounded-circle shadow d-block" alt="" />
                                <h5 className="mt-3 mb-0">Uriti Sai Abhishek</h5>
                                <p className="text-muted mb-0">Front End Developer</p>
                            </div>                               
                            <div className="card-body">
                                <h5 className="card-title">Personal Details :</h5>
                                                                    
                                <ul className="list-unstyled">
                                    <li className="h6"><i className="uil uil-envelope text-warning me-3"></i><span className="text-muted">Email :</span> contact@uritisaiabhishek.dev</li>
                                    <li className="h6"><i className="uil uil-calender icon-sm text-warning me-3"></i><span className="text-muted">D.O.B. :</span> 12th Oct, 1996</li>
                                    <li className="h6"><i className="uil uil-home icon-sm text-warning me-3"></i><span className="text-muted">Address :</span> Madhurawada</li>
                                    <li className="h6"><i className="uil uil-map-pin icon-sm text-warning me-3"></i><span className="text-muted">City :</span> Visakhapatnam</li>
                                    <li className="h6"><i className="uil uil-globe icon-sm text-warning me-3"></i><span className="text-muted">Country :</span> India</li>
                                    <li className="h6"><i className="uil uil-server icon-sm text-warning me-3"></i><span className="text-muted">Postal Code :</span> 530041</li>                                    
                                    <li>
                                        <SocialShare />
                                    </li>
                                </ul>
                                <div className="d-grid">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#Contactme" className="btn btn-primary"><i className="uil uil-envelope align-middle"></i> Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}

                    <div className="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="ms-lg-4">
                            <h4>About us :</h4>
                            <p className="text-muted">Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <p className="text-muted mb-0">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>
                            
                            {/* Skills Start */}
                            <h4 className="mt-lg-5 mt-4">Skills :</h4>

                            {data.skills.map(skill => (
                                <React.Fragment key={skill.id}>
                                    <div className="progress-box mt-4">
                                        <h6 className="title text-muted">{skill.name}</h6>
                                        <div className="progress">
                                            <div 
                                                className="progress-bar position-relative bg-primary" 
                                                style={{ width: `${skill.proficiency}%` }}
                                            >
                                                <div className="progress-value d-block text-muted h6">{skill.proficiency}%</div>
                                            </div>
                                        </div>
                                    </div>{/*end process box*/}
                                </React.Fragment>
                            ))}
                            {/* Skills End */}

                            {/* Experience Start */}
                            <h4 className="mt-lg-5 mt-4">Experience :</h4>
                            <div className="row">
                                {data.experience.sort((a, b) => b.id - a.id).map(exp=>(
                                    <div className="col-lg-12 mt-4 pt-2" key={exp.id}>
                                        <div className="d-flex">
                                            <div className="company-logo text-muted h6 me-3 text-center">
                                                <img src={exp.companyLogo ? exp.companyLogo:"assets/Codepen.svg"} className="avatar avatar-md-sm mx-auto d-block mb-2" alt="" />
                                                {formatYearRange(exp.fromDate, exp.toDate)}
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="title mb-0">{exp.role}</h5>
                                                <small className="text-muted company-university">{exp.company} - {exp.location}</small>
                                                <p className="text-muted mt-2 mb-0">{exp.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>{/*end row*/}
                            {/* Experience End */}

                            {/* Start Projects Work */}
                            <h4 className="mt-lg-5 mt-4">Projects :</h4>
                            <div className="row">

                                <div className="col-md-6 col-12 mt-4 pt-2">
                                    <div className="card border-0 work-container work-primary work-classic">
                                        <div className="card-body p-0">
                                            <a href="portfolio-detail-one.html"><img src="assets/images/work/1.jpg" className="img-fluid rounded work-image" alt="" /></a>
                                            <div className="content pt-3">
                                                <h5 className="mb-0"><a href="portfolio-detail-one.html" className="text-dark title">Iphone mockup</a></h5>
                                                <h6 className="text-muted tag mb-0">Branding</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*end col*/}
                                
                            </div>{/*end row*/}
                            {/* End Projects Work */}

                            <div className="mt-4 pt-2">
                                <Link to="/contact?subject=hire-me" className="btn btn-primary me-2"><i className="uil uil-user-check"></i> Hire me</Link>
                                <a href="./assets/Uriti Sai Abhishek_Resume.pdf" download="Uriti Sai Abhishek_Resume.pdf" className="btn btn-outline-primary">
                                    <i className="uil uil-print"></i> Download CV
                                </a>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*enn row*/}
            </div>{/*end container*/}
        </section>{/*end section*/}

        {/* Modal Content Start */}
        <div className="modal fade" id="Contactme" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Contact Me </h5>
                        <button type="button" className="btn btn-icon btn-close" data-bs-dismiss="modal" id="close-modal"><i className="uil uil-times fs-4 text-dark"></i></button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="custom-form mt-3">
                            <ContactForm />
                        </div>{/*end custom-form*/}
                    </div>
                </div>
            </div>
        </div>
        {/* Modal Content End */}
        {/* Candidate Detail End */}

    </>
  )
}

export default About