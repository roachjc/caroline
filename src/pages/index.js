import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
      </div>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
