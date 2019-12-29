import PropTypes from "prop-types"
import React from "react"

const SocialNetwork = ({name, logo, url}) => (
  <span>
    <img src={logo}  style={{ height: `20px`, width: `20px`, borderRadius: `50%` }} alt={`${name}pic`} />
    {` `}
    <a href={url} style={{ textDecoration: `none`, fontWeight: `bold` }}>{name}</a>
  </span>
)

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