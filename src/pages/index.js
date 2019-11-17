import React from "react"
import { Link, graphql } from "gatsby"
import { formatPostDate } from "../utils/helpers"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulPost.edges
  return (
    <Layout>
      <SEO title="Caroline" />
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <article key={post.id} style={{ marginBottom: 24 }}>
            <header>
              <h3
                style={{
                  fontSize: 20,
                  marginBottom: 0,
                  textTransform: `capitalize`,
                }}
              >
                <Link to={`post/${post.slug}`}>{post.title}</Link>
              </h3>
              <small>{formatPostDate(post.date)}</small>
            </header>
          </article>
        ))}
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
          date
        }
      }
    }
  }
`
