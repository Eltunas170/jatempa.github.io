import PropTypes from "prop-types"
import React from "react"

const Subsection = ({ heading, content }) => (
  <section style={{ backgroundColor: `#ffffff` }}>
    <header style={{ padding: '5px 0 5px 10px' }}>
      <h3>{heading}</h3>
    </header>
    <p style={{ padding: '5px 0 5px 10px' }}>{content}</p>
  </section>
)

Subsection.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
}

Subsection.defaultProps = {
  heading: ``,
  content: ``,
}

export default Subsection
