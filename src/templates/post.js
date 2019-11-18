import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Post = ({ data }) => {
  const { title, text, image } = data.contentfulPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        {image && (
          <figure>
            <img alt={title} src={image.file.url} style={{ marginBottom: 0 }} />
            <figcaption
              style={{
                fontSize: 14,
                fontStyle: `italic`,
                fontFamily: `sans-serif`,
              }}
            >
              {image.description}
            </figcaption>
          </figure>
        )}
        <p className="body-text">{documentToReactComponents(text.json)}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      text {
        json
      }
      image {
        file {
          url
        }
        description
      }
    }
  }
`
