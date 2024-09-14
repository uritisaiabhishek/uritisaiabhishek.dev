import React from 'react'
import ContactForm from '../components/ContactForm'
import PageBanner from '../components/PageBanner'

function Contact() {
  return (
    <>
        <PageBanner pagename="Contact" />
        {/* Hero Start */}
        <section className="vh-100 d-flex align-items-center text-light" >
            <div className="bg-overlay bg-overlay-white" style={{opacity: "0.2"}}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7">
                        <div className="title-heading mt-5 pt-4">
                            <h1 className="heading">Let's talk about your portfolio</h1>
                            <p className="text-light">Start working with me that can provide everything you need to generate digital awareness, drive traffic, connect.</p>
                            
                            <div className="d-flex contact-detail align-items-center mt-3">
                                <div className="icon">
                                    <i className="fs-1 uil uil-envelope me-3"></i>
                                </div>
                                <div className="flex-1 content">
                                    <h5 className="title fw-bold mb-0">Email</h5>
                                    <a href="mailto:contact@uritisaiabhishek.dev" className="text-primary">contact@uritisaiabhishek.dev</a>
                                </div>
                            </div>
                            
                            
                            <ul className="list-unstyled social-icon text-light mb-0 mt-4 d-flex gap-2 flex-wrap">
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                <li className="list-inline-item mb-0"><a href="#" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                            </ul>
                        </div>
                    </div>{/*end col*/}
                    <div className="col-lg-6 col-md-5">
                        <ContactForm />
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/} 
        </section>{/*end section*/}
        {/* Hero End */}
    </>
  )
}

export default Contact