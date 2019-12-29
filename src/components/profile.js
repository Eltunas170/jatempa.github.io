import PropTypes from "prop-types"
import React from "react"

import SocialNetwork from "../components/socialNetwork"

import twitterLogo from "../images/twitter-icon.png"
import githubLogo from "../images/github-icon.png"

const Profile = ({ aboutMe, profilePicture, twitter, github }) => {

  return (
    <>
      <div id="profile">
        <img id="mypic" src={profilePicture} alt="profile" style={{ height: `150px`, width: `150px`, borderRadius: `50%` }} />
        <span><SocialNetwork name={twitter} url={`https://twitter.com/${twitter}`} logo={twitterLogo} /> <strong>/</strong> <SocialNetwork name={github} url={`https://github.com/${github}`} logo={githubLogo} /></span>
      </div>
      <div id="info">
        <h3 style={{ textAlign: 'center' }}>Acerca de mí</h3>
        <p>{aboutMe}</p>
      </div>
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
