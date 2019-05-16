import React from 'react'
import { Link } from 'gatsby'

// Header component
const Header = () => (
  <header className="header">
    <div className="container">
    

      <nav className="nav">
      <div className="logo">
        <Link to="/">Logo</Link>
    </div>
        <ul className="header__list-links">
          <li>
            <Link to="/about/">About me</Link>
          </li>

          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>

    
      </nav>
    </div>
  </header>
)

export default Header