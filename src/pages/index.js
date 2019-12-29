import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const { data} = props;
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <article key={node.fields.slug}>
              <header>
                <h3 style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <p>{node.excerpt}</p>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
