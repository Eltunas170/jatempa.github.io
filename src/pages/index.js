import React from "react"

import Aside from '../components/aside'
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

import "../css/index.css"
import profilePicture from "../images/profile.png"

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />

      <Posts />

      <Aside
        profilePicture={profilePicture}
        heading="Acerca de mí"
        content="Entusiasta de la programación en constante aprendizaje"
      />
    </Layout>
  )
}

export default IndexPage