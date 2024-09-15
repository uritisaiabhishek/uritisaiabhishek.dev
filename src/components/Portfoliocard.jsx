import React from 'react'
import { Link } from 'react-router-dom'
import getCategoryName from '../utils/getCategoryName'

function Portfoliocard({details}) {
  return (
    <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 spacing picture-item portfolio_card">
            <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded">
                <div className="card-body p-0">
                    <div className="position-relative overflow-hidden">
                        <img src={details.featuredImage || "assets/images/work/13.jpg"} className="img-fluid" alt={details.title} loading="lazy" />
                        <div className="overlay-grid"></div>
                    </div>
                    <div className="content p-4">
                        <Link to={`/portfolio/${details.slug}`} className="text-white title h5 d-block mb-2">{details.title}</Link>
                        <p className="text-white-50 tag h6 mb-0">{getCategoryName(details.category)}</p>
                    </div>
                </div>
            </div>
        </div>{/*end col*/}
    </>
  )
}

export default Portfoliocard