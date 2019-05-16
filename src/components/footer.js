import React from 'react'
import { Link } from 'gatsby'

// Footer component
const Footer = () => (
  <footer className="footer">
    <div className="container">
    <ul className="footer__list-social">
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-facebook-f" />
          </a>
        </li>

        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-twitter" />
          </a>
        </li>

        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <span className="fab fa-instagram" />
          </a>
        </li>

      
      </ul>


      <ul className="footer__list-links">
        <li>
          <Link to="/">Cookie Stuff</Link>
        </li>

        <li>
          <Link to="/">Copyright</Link>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

     
    </div>
  </footer>
)

export default Footer