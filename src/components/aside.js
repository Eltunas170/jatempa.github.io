import PropTypes from "prop-types"
import React from "react"

const Aside = ({ heading, content, profilePicture }) => (
  <aside>
    <img src={profilePicture} alt="profile" style={{ padding: `20px 20px`, height: `150px`, width: `150px`, borderRadius: `50%` }} />
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
