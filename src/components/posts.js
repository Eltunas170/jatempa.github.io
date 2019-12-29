import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const PostList = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <div id="recentposts">
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
  )
}

export default PostList
