import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="Welcome to Gatsby" />
    <p>What a world.</p>
    <Link to="/contact/">Contact</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)