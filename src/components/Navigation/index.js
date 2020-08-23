import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx';

import { Link, useStaticQuery, graphql } from "gatsby"

import css from './navigation.module.scss'

const Navigation = ({ state }) => (
  <div className={ clsx(css.navigation, css[state]) }>

    <svg width="412" height="276" viewBox="0 0 412 276" fill="none" xmlns="http://www.w3.org/2000/svg" className={ css.background }>
      <circle cx="206" cy="138" r="448" />
    </svg>

  </div>
)

Navigation.propTypes = {
  state: PropTypes.string,
}

Navigation.defaultProps = {
  state: `closed`,
}

export default Navigation
