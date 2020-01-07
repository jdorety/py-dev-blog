import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"

export default ({ data }) => (
  <Layout>
    {console.log(data)}
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    {data.allMarkdownRemark.edges.map(file => {
      return (
        <Link to={file.node.frontmatter.path}>
          <div>
            <h3>{file.node.frontmatter.title}</h3>
            <p>{file.node.frontmatter.author}</p>
          </div>
        </Link>
      )
    })}
  </Layout>
)
export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
