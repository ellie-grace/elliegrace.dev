import React from 'react'
import { Link } from 'gatsby'

// Header component
const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">

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
        </ul>

    
      </nav>
    </div>
  </header>
)

export default Header