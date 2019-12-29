import PropTypes from "prop-types"
import React from "react"

const Aside = ({ heading, content }) => (
  <aside>
    <img src="https://via.placeholder.com/150" alt="profile" style={{ padding: `20px 20px` }} />
    <section className="about-me" style={{ textAlign: `center` }}>
      <h3>{heading}</h3>
      <p>{content}</p>
    </section>
  </aside>
)

Aside.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
}

Aside.defaultProps = {
  heading: ``,
  content: ``,
}

export default Aside
