import React, { useEffect, useState } from 'react';
import CookiePopup from './CookiePopup';
import { Link } from 'react-router-dom';
import SocialmediaLinks from './Socialmedia';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            {/* Footer Start */}
            <footer
                className="footer"
                style={{
                    backgroundImage: "url('assets/images/svg-map.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 py-lg-5">
                            <div className="footer-py-60 text-center">
                                <Link className="logo-footer text-light fs-1" to="/">
                                    Uriti Sai Abhishek
                                </Link>
                                <p className="mt-4 para-desc mx-auto">
                                    Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                                </p>
                                <div className='d-flex justify-content-center'>
                                    <SocialmediaLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-py-30 footer-bar bg-footer">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="text-center">
                                    <p className="mb-0">
                                        © {currentYear} Uriti Sai Abhishek.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */}
                <CookiePopup />
        </>
    );
}

export default Footer;
