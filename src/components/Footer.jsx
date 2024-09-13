import React, { useEffect, useState } from 'react';
import CookiePopup from './CookiePopup';
import { Link } from 'react-router-dom';

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
                                <ul className="list-unstyled social-icon d-flex flex-wrap gap-2 justify-content-center foot-social-icon mb-0 mt-4">
                                    <li className="list-inline-item mb-0"><a href="https://1.envato.market/landrick" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="mailto:support@shreethemes.in" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                                </ul>
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
