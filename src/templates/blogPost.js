import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import "./blogPost.scss"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next, previous } = pageContext
  return (
    <Layout>
      {console.log(data, pageContext)}
      <div className="blog-post-wrapper">
        <div className="blog-post">
          <Header headerText={frontmatter.title} />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <span className="author">-{frontmatter.author}</span>
        </div>
        <div className="post-links">
          {next && (
            <Link className="next-button nav-posts" to={next.frontmatter.path}>
              Newer Post
            </Link>
          )}
          {previous && (
            <Link className="previous-button nav-posts" to={previous.frontmatter.path}>
              Older Post
            </Link>
          )}
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
