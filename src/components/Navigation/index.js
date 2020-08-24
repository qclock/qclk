import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx';

import { Link, useStaticQuery, graphql } from "gatsby"

import css from './navigation.module.scss'

const Navigation = ({ state }) => (
  <div className={ clsx(css.navigationPanel, css[state]) }>
    <nav className={ css.nav }>
      <ul className={ css.menuitems }>
        <li className={ css.menuitem }>Design</li>
        <li className={ css.menuitem }>Time</li>
        <li className={ css.menuitem }>Night Mode</li>
        <li className={ clsx(css.menuitem, css.menu_settings) }>Settings</li>
      </ul>
    </nav>
    <svg className={ css.background } viewBox="0 0 412 276" fill="none" xmlns="http://www.w3.org/2000/svg">
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
