import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Posts from "../components/posts"
import Profile from '../components/profile'
import SEO from "../components/seo"

import "../css/index.css"
import profilePicture from "../images/profile.png"

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter,
          github
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <Posts />

      <aside>
        <Profile
          aboutMe="Entusiasta de la programación en constante aprendizaje."
          profilePicture={profilePicture}
          github={data.site.siteMetadata.github}
          twitter={data.site.siteMetadata.twitter}
        />
      </aside>
    </Layout>
  )
}

export default IndexPage