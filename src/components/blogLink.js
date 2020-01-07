import React from "react"
import { Link } from "gatsby"

import "./blogLink.css"

export default props => {
  return (
    <Link to={props.path}>
      <div className="blog-link">
        <h3>{props.title}</h3>
        <span>{props.author}</span>
      </div>
    </Link>
  )
}
