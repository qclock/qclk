
import { Link, useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import './header.scss'


const Header = ({ siteTitle }) => (
  <header className="header">
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
