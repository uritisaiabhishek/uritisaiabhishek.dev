import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <>
        
        {/* Navbar Start */}
        <header id="topnav" className="defaultscroll sticky">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo container*/}
                <Link className="logo m-0 p-0" to='/'>
                    URITI SAI ABHISHEK
                </Link>
        
                {/* Logo End */}

                {/* End Logo container*/}
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* Mobile menu toggle*/}
                        <a className={`navbar-toggle ${menuOpen ? 'open' : ''}`} id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </div>
                </div>

                <div id="navigation" style={{ display: menuOpen ? 'block' : 'none' }}>
                    {/* Navigation Menu*/}   
                    <ul className="navigation-menu justify-content-center">
                        <li>
                            <NavLink to='/' activeclass='active' className="sub-menu-item">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/portfolio' activeclass='active' className="sub-menu-item">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about-me' activeclass='active' className="sub-menu-item">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' activeclass='active' className="sub-menu-item">
                                Contact
                            </NavLink>
                        </li>
                        
                        {/* <li>
                            <a href="/" className="sub-menu-item">Home</a>
                        </li>
                        <li>
                            <a href="/portfolio" className="sub-menu-item">Portfolio</a>
                        </li>
                        <li>
                            <a href="/about-me" className="sub-menu-item">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="sub-menu-item">Contact</a>
                        </li> */}
                    </ul>{/*end navigation menu*/}
                </div>
            </div>{/*end container*/}
        </header>{/*end header*/}
        {/* Navbar End */}
        
    </>
  )
}

export default Header