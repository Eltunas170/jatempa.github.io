import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from '../components/header'
import Subsection from '../components/subsection'
import Footer from '../components/footer'

import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <section id="othersections">
        <Subsection
          heading="ReactJS"
          content="React te ayuda a crear interfaces de usuario interactivas de forma sencilla."
        />
        <Subsection
          heading="Flutter"
          content="Flutter es el kit de herramientas de UI de Google para realizar aplicaciones, compiladas nativamente, para móvil, web y escritorio desde una única base de código."
        />
        <Subsection
          heading="Symfony"
          content="El framework PHP líder para crear sitios y aplicaciones web."
        />
      </section>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
