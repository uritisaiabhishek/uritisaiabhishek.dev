import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function PageBanner({ pagename, featuredImage }) {
    const location = useLocation();
    const path = location.pathname;
    
    // Determine the breadcrumb based on the URL path
    const getBreadcrumb = () => {
        const pathParts = path.split('/').filter(part => part);
        if (pathParts.length > 1) {
            return [
                { name: 'Home', link: '/' },
                { name: pathParts[0], link: `/${pathParts[0]}` },
                { name: pagename, link: null }
            ];
        }
        return [
            { name: 'Home', link: '/' },
            { name: pagename, link: null }
        ];
    };

    const breadcrumb = getBreadcrumb();

    return (
        <>
            {/* Hero Start */}
            <section 
                className="bg-half-170 bg-light d-table w-100"
                style={{ 
                    backgroundImage: `url(${featuredImage || 'assets/background-1.jpg'})`,
                }}
            >
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="pages-heading">
                                <h4 className="title mb-0 text-light"> {pagename} </h4>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    
                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                {breadcrumb.map((item, index) => (
                                    <li key={index} className="breadcrumb-item">
                                        {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div> {/*end container*/}
            </section>{/*end section*/}
            <div className="position-relative">
                <div className="shape overflow-hidden text-color-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            {/* Hero End */}
        </>
    )
}

export default PageBanner
