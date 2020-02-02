import React from "react"
import { graphql } from "gatsby"
import BlogLink from "../components/blogLink"
import Layout from "../components/layout/layout"
import PythonLogo from "../assets/python-original.svg"
import PiLogo from "../assets/raspberry-pi.svg"
import "./index.scss"

export default ({ data }) => (
  <Layout>
    <div id="site-header">
      <h1>Welcome to the PyClock2 Development Blog</h1>
    <p>
      This is a blog for the project that really pushed me into the world of
      software development
    </p>
    </div>
    <div className="post-list-wrapper">
      <div className="blog-column">
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <BlogLink
              path={post.node.frontmatter.path}
              key={post.node.id}
              title={post.node.frontmatter.title}
              author={post.node.frontmatter.author}
            />
          )
        })}
      </div>
      <div className="tech-logos">
        <img src={PythonLogo} alt="Python Logo" />
        <img src={PiLogo} alt="Raspberry Pi logo" />
      </div>
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`
