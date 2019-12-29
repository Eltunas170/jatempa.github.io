import PropTypes from "prop-types"
import React from "react"

import SocialNetwork from "../components/socialNetwork"

import twitterLogo from "../images/twitter-icon.png"
import githubLogo from "../images/github-icon.png"

const Profile = ({ aboutMe, profilePicture, twitter, github }) => {

  return (
    <>
      <img src={profilePicture} alt="profile" style={{ padding: `20px 20px`, height: `150px`, width: `150px`, borderRadius: `50%` }} />
      <span><SocialNetwork name={twitter} url={`https://twitter.com/${twitter}`} logo={twitterLogo} /> <strong>/</strong> <SocialNetwork name={github} url={`https://github.com/${github}`} logo={githubLogo} /></span>
      <section style={{ marginTop: `10px` }}>
        <h3>Acerca de mí</h3>
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
