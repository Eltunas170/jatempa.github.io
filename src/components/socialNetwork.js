import PropTypes from "prop-types"
import React from "react"

const SocialNetwork = ({name, logo, url}) => {

  return (
    <span>
      <img src={logo}  style={{ height: `20px`, width: `20px`, borderRadius: `50%` }} alt={`${name}pic`} />
      {` `}
      <strong><a href={url}>{name}</a></strong>
    </span>
  )
}

SocialNetwork.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  logo: PropTypes.string
}

SocialNetwork.defaultProps = {
  name: '',
  url: '#',
  logo: ''
}

export default SocialNetwork