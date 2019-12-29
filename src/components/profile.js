import PropTypes from "prop-types"
import React from "react"

const Profile = ({ aboutMe, profilePicture, twitter, github }) => {

  return (
    <>
      <img src={profilePicture} alt="profile" style={{ padding: `20px 20px`, height: `150px`, width: `150px`, borderRadius: `50%` }} />
      <section>
        <h3>Acerca de mí</h3>
        {/*<h4> <img src={twitter} alt="twitter" style={{ height: `25px`, width: `25px`, borderRadius: `50%` }} /> {data.site.siteMetadata.twitter} / <img src={github} alt="github" style={{ height: `25px`, width: `25px`, borderRadius: `50%` }} /> {data.site.siteMetadata.github} </h4>*/}
        <p>{aboutMe}</p>
      </section>
    </>
  )
}

Profile.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
}

Profile.defaultProps = {
  heading: ``,
  content: ``,
}

export default Profile
