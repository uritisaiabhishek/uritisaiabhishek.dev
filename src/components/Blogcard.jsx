import React from 'react'
import { Link } from 'react-router-dom'

function Blogcard() {
  return (
    <>
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                    <img src="assets/images/blog/01.jpg" className="img-fluid" alt="" />
                    <div className="position-absolute top-0 start-0 mt-2 ms-2">
                        <a href="#" className="badge badge-link bg-primary">Men</a>
                    </div>
                </div>
                <div className="card-body content">
                    <ul className="list-unstyled mb-2">
                        <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2021</li>
                        <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                    </ul>
                    <Link to="/blog/adsa" className="text-dark title h5">A team of designers that make dreams come true</Link>
                    
                    <div className="mt-2">
                        <Link to="/blog/asfma" className="text-primary">Read more <i data-feather="arrow-right" className="fea icon-sm"></i></Link>
                    </div>
                </div>
            </div>
        </div>{/*end col*/}
    </>
  )
}

export default Blogcard