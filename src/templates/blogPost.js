import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-wrapper">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.author}</h3>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        author
        path
      }
    }
  }
`
