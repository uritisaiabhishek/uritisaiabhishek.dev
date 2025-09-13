import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    
      
<header className="navigation fixed-top">
  <nav className="navbar navbar-expand-lg navbar-dark">
    <Link className="navbar-brand font-tertiary h3 m-0" to="/">
      {/* <img src="/images/logo.png" alt="Myself" /> */}
      Uriti Sai Abhishek
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
      aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-center" id="navigation">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
</header>

  )
}

export default Header