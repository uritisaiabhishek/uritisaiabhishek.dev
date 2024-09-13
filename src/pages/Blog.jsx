import React from 'react'
import Blogcard from '../components/Blogcard'
import PageBanner from '../components/PageBanner'

function Blog() {
  return (
    <>
        <PageBanner pagename="Blog" />

        {/* Start */}
        <section className="section">
            <div className="container">
                <div className="row">
                    
                    <Blogcard />
                    
                    {/* PAGINATION START */}
                    <div className="col-12">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item"><a className="page-link" href="#" aria-label="Previous">Prev</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#" aria-label="Next">Next</a></li>
                        </ul>
                    </div>{/*end col*/}
                    {/* PAGINATION END */}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* End */}
    
    </>
  )
}

export default Blog