import React from 'react'
import Portfoliocard from '../components/Portfoliocard'
import data from '../data.json';
import PortfolioSection from '../components/PortfolioSection';

function Home() {
  return (
    <>
        
        {/* Hero Start */}
        <section 
            className="bg-half-260 d-table w-100" 
            style={{background: 'url("/assets/images/work/bg-portfolio.jpg") top center', backgroundPosition: "center"}}
        >
            <div className="bg-overlay bg-overlay-white" style={{opacity: "0.2"}}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center mt-5 pt-4">
                            <h1 className="display-1 fw-bold mb-3 text-light">Uriti Sai Abhishek</h1>
                            <p className="para-desc mx-auto h6 text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/} 
        </section>{/*end section*/}
        {/* Hero End */}    

        {/* Shape Start */}
        <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        {/*Shape End*/}
        
        <PortfolioSection />

    </>
  )
}

export default Home