import React from 'react'
import Andhra_University_Logo from '/images/Andhra_University_logo.png';

function MyEducation() {
  return (
    <>
    {/* <!-- education --> */}
<section className="section position-relative">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-title">Education</h2>
      </div>
      <div className="col-lg-6 col-md-6 mb-80">
        <div className="d-flex align-items-center">
          <div className="mr-lg-5 mr-3">
            <img src={Andhra_University_Logo} className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" alt="" />
          </div>
          <div>
            {/* <p className="text-dark mb-1">2024</p> */}
            <h4>M.Tech (Power systems automation)</h4>
            <p className="mb-0 text-light">Andhra University</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 mb-80">
        <div className="d-flex align-items-center">
          <div className="mr-lg-5 mr-3">
            <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            {/* <p className="text-dark mb-1">2021</p> */}
            <h4>B.Tech (Electrical Engineering)</h4>
            <p className="mb-0 text-light">Andhra University</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 mb-80">
        <div className="d-flex align-items-center">
          <div className="mr-lg-5 mr-3">
            <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            {/* <p className="text-dark mb-1">2014</p> */}
            <h4>Intermediate</h4>
            <p className="mb-0 text-light">Sri chaitanya junior college</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 mb-80">
        <div className="d-flex align-items-center">
          <div className="mr-lg-5 mr-3">
            <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            {/* <p className="text-dark mb-1">2012</p> */}
            <h4>SSC</h4>
            <p className="mb-0 text-light">Keshava reddy concept school</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- bg image --> */}
  <img className="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image" />
</section>
{/* <!-- /education --> */}
    </>
  )
}

export default MyEducation