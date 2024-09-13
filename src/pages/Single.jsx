import React from 'react'
import SocialShare from '../components/SocialShare'
import PageBanner from '../components/PageBanner'

function Single() {
  return (
    <>
        
        <PageBanner pagename="post title" />
        
        {/* Start */}
        <section className="bg-half-170 d-table w-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <img src="assets/images/blog/standard.jpg" className="img-fluid" alt="" />

                            <div className="card-body">
                                <div className="text-center">
                                    <span className="badge text-bg-primary">Travel</span>
                                    <h4 className="mt-3">A lifestyle you always being <br /> the focal point is innately unhealthy.</h4>

                                    <ul className="list-unstyled mt-3">
                                        <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> Cristina Jota</li>
                                        <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> 26th June, 2021</li>
                                    </ul>
                                </div>

                                <p className="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                                <blockquote className="blockquote mt-3 p-3">
                                    <p className="text-muted mb-0 fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                </blockquote>
                                <p className="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <div className="post-meta mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Comments :</h5>

                                <ul className="media-list list-unstyled mb-0">
                                    <li className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <a className="pe-3" href="#">
                                                    <img src="assets/images/client/01.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                </a>
                                                <div className="commentor-detail">
                                                    <h6 className="mb-0"><a href="#" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                    <small className="text-muted">15th August, 2021 at 01:25 pm</small>
                                                </div>
                                            </div>
                                            <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                        </div>
                                    </li>
    
                                    <li className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <a className="pe-3" href="#">
                                                    <img src="assets/images/client/02.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                </a>
                                                <div className="commentor-detail">
                                                    <h6 className="mb-0"><a href="#" className="media-heading text-dark">Tammy Camacho</a></h6>
                                                    <small className="text-muted">15th August, 2021 at 05:44 pm</small>
                                                </div>
                                            </div>
                                            <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                        </div>
                                    </li>
                                    
                                    <li className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <a className="pe-3" href="#">
                                                    <img src="assets/images/client/03.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                </a>
                                                <div className="commentor-detail">
                                                    <h6 className="mb-0"><a href="#" className="media-heading text-dark">Tammy Camacho</a></h6>
                                                    <small className="text-muted">16th August, 2021 at 03:44 pm</small>
                                                </div>
                                            </div>
                                            <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                        </div>
    
                                        <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                                            <li className="mt-4">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <a className="pe-3" href="#">
                                                            <img src="assets/images/client/01.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                        </a>
                                                        <div className="commentor-detail">
                                                            <h6 className="mb-0"><a href="#" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                            <small className="text-muted">17th August, 2021 at 01:25 pm</small>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-3">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="message-circle" className="fea icon-sm icons"></i>
                                                    <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control ps-5" required=""></textarea>
                                                </div>
                                            </div>
                                        </div>{/*end col*/}
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="user" className="fea icon-sm icons"></i>
                                                    <input id="name2" name="name" type="text" placeholder="Name" className="form-control ps-5" required="" />
                                                </div>
                                            </div>
                                        </div>{/*end col*/}
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="mail" className="fea icon-sm icons"></i>
                                                    <input id="email2" type="email" placeholder="Email" name="email" className="form-control ps-5" required="" />
                                                </div>
                                            </div>
                                        </div>{/*end col*/}
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>{/*end col*/}
                                    </div>{/*end row*/}
                                </form>{/*end form*/}
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Related Posts :</h5>

                                <div className="row">
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary rounded border-0 shadow">
                                            <div className="position-relative">
                                                <img src="assets/images/blog/01.jpg" className="card-img-top rounded-top" alt="..." />
                                            <div className="overlay rounded-top"></div>
                                            </div>
                                            <div className="card-body content">
                                                <h5><a href="#" className="card-title title text-dark">Design your apps in your own way</a></h5>
                                                <div className="post-meta d-flex justify-content-between mt-3">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</a></li>
                                                        <li className="list-inline-item"><a href="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</a></li>
                                                    </ul>
                                                    <a href="blog-standard-post.html" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
                                                </div>
                                            </div>
                                            <div className="author">
                                                <small className="user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                                <small className="date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                            </div>
                                        </div>
                                    </div>{/*end col*/}
                                    
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary rounded border-0 shadow">
                                            <div className="position-relative">
                                                <img src="assets/images/blog/02.jpg" className="card-img-top rounded-top" alt="..." />
                                            <div className="overlay rounded-top"></div>
                                            </div>
                                            <div className="card-body content">
                                                <h5><a href="#" className="card-title title text-dark">How apps is changing the IT world</a></h5>
                                                <div className="post-meta d-flex justify-content-between mt-3">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-muted like"><i className="uil uil-heart me-1"></i>33</a></li>
                                                        <li className="list-inline-item"><a href="#" className="text-muted comments"><i className="uil uil-comment me-1"></i>08</a></li>
                                                    </ul>
                                                    <a href="blog-standard-post.html" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
                                                </div>
                                            </div>
                                            <div className="author">
                                                <small className="user d-block"><i className="uil uil-user"></i> Calvin Carlo</small>
                                                <small className="date"><i className="uil uil-calendar-alt"></i> 25th June 2021</small>
                                            </div>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end row*/}
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-5">
                            <a href="blog-standard-post.html" className="bg-soft-primary px-2 rounded"><i className="uil uil-arrow-left h5 mb-0 align-middle"></i> Prev </a>

                            <a href="index-blog.html" className="btn btn-pills btn-icon btn-soft-primary"><i data-feather="home" className="icons"></i></a>
                            
                            <a href="blog-standard-post.html" className="bg-soft-primary px-2 rounded"> Next <i className="uil uil-arrow-right h5 mb-0 align-middle"></i></a>
                        </div>
                    </div>{/*end col*/}

                    {/* START SIDEBAR */}
                    <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 sidebar sticky-bar ms-lg-4">
                            <div className="card-body p-0">
                                {/* Author */}
                                <div className="text-center">
                                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                                        Author
                                    </span>

                                    <div className="mt-4">
                                        <img src="assets/images/client/03.jpg" className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt="" />

                                        <a href="blog-about.html" className="text-primary h5 mt-4 mb-0 d-block">Cristina Jota</a>
                                        <small className="text-muted d-block">Photographer & Blogger</small>
                                    </div>
                                </div>
                                {/* Author */}
    
                                {/* RECENT POST */}
                                <div className="widget mt-4">
                                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                                        Recent Post
                                    </span>

                                    <div className="mt-4">
                                        <div className="d-flex align-items-center">
                                            <img src="assets/images/blog/01.jpg" className="avatar avatar-small rounded" style={{width:"auto"}} alt="" />
                                            <div className="flex-1 ms-3">
                                                <a href="#" className="d-block title text-dark">Consultant Business</a>
                                                <span className="text-muted">15th April 2021</span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center mt-3">
                                            <img src="assets/images/blog/02.jpg" className="avatar avatar-small rounded" style={{width:"auto"}} alt="" />
                                            <div className="flex-1 ms-3">
                                                <a href="#" className="d-block title text-dark">Grow Your Business</a>
                                                <span className="text-muted">15th April 2021</span>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center mt-3">
                                            <img src="assets/images/blog/03.jpg" className="avatar avatar-small rounded" style={{width:"auto"}} alt="" />
                                            <div className="flex-1 ms-3">
                                                <a href="#" className="d-block title text-dark">Look On The Glorious Balance</a>
                                                <span className="text-muted">15th April 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RECENT POST */}
    
                                {/* TAG CLOUDS */}
                                <div className="widget mt-4">
                                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                                        Tagclouds
                                    </span>
                                    
                                    <div className="tagcloud text-center mt-4">
                                        <a href="jvascript:void(0)" className="rounded">Business</a>
                                        <a href="jvascript:void(0)" className="rounded">Finance</a>
                                        <a href="jvascript:void(0)" className="rounded">Marketing</a>
                                        <a href="jvascript:void(0)" className="rounded">Fashion</a>
                                        <a href="jvascript:void(0)" className="rounded">Bride</a>
                                        <a href="jvascript:void(0)" className="rounded">Lifestyle</a>
                                        <a href="jvascript:void(0)" className="rounded">Travel</a>
                                        <a href="jvascript:void(0)" className="rounded">Beauty</a>
                                        <a href="jvascript:void(0)" className="rounded">Video</a>
                                        <a href="jvascript:void(0)" className="rounded">Audio</a>
                                    </div>
                                </div>
                                {/* TAG CLOUDS */}
                                
                                {/* SOCIAL */}
                                <div className="widget mt-4">
                                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                                        Social Media
                                    </span>

                                    <SocialShare />
                                </div>
                                {/* SOCIAL */}
                            </div>
                        </div>
                    </div>{/*end col*/}
                    {/* END SIDEBAR */}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* End */}

        {/* Insta Post Start */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0">
                    <div className="tiny-ten-item">
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/01.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/01.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/02.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/02.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/03.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/03.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/04.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/04.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/05.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/05.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/06.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/06.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/07.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/07.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/08.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/08.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/09.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/09.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/10.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/10.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/11.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/11.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tiny-slide">
                            <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src="assets/images/blog/travel/12.jpg" className="img-fluid" alt="" />
                                    <div className="card-overlay"></div>

                                    <div className="icons text-center">
                                        <a href="assets/images/blog/travel/12.jpg" className="work-icon bg-white d-inline-flex rounded-pill lightbox"><i className="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
                        <a href="#" className="btn btn-sm btn-primary text-uppercase">Follow Now</a>
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </div>{/*end container*/}
        {/* Insta Post End */}

    
    </>
  )
}

export default Single