import React from "react"
import { Link } from "gatsby"

import "./navbar.scss"

export default () => (
  <nav >
    <h3>PyClock2</h3>
    <Link activeClassName="active" to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
  </nav>
)
