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

      <main style={{ padding: '8px 20px' }}>{children}</main>

      <section id="othersections">
        <Subsection
          heading="ReactJS"
          content="Ut dolor est aspernatur ipsam explicabo omnis vel. Eum soluta cupiditate sed esse voluptas veritatis aut molestias sit. Aliquam eveniet necessitatibus ut. Eos amet et corporis reprehenderit aperiam enim qui. Sed minus soluta est omnis aut quo quas. Et aliquid non unde neque est corporis quos voluptatem ut. Odit reiciendis velit non suscipit ipsum nihil voluptas neque. Velit molestiae ipsa. Rerum iure sint aut voluptate repudiandae dicta harum unde." 
        />
        <Subsection
          heading="Flutter"
          content="Aliquam ipsum natus dolores culpa. Consequatur id est sint. Nisi suscipit et magnam doloribus. Libero cum ducimus id autem. Quia ea culpa et non in quam officia. Id sed distinctio quia id et. Voluptas quaerat adipisci dolor autem. Et voluptates numquam. Aut quidem natus exercitationem placeat." 
        />
        <Subsection
          heading="Symfony"
          content="Fugit maxime iste. Quas culpa est nulla neque consectetur occaecati ex quod non. Illo dolore vitae. Quis optio id quia porro aliquam nulla cupiditate maiores omnis. Repellat omnis itaque ratione iste illum. Sequi odio eum accusamus quia in. Voluptatibus sit et molestias. Quam quis expedita perferendis aspernatur exercitationem. Consequuntur voluptatem culpa nostrum cupiditate est. Debitis ab facilis sed ut nihil. Ut maxime molestias a repellat iure aspernatur impedit deleniti." 
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
