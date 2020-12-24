/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import clsx from 'clsx';
import useAppState from '../state'
import Menu from "./Menu"
import Navigation from "./Navigation"
import css from "./layout.module.scss"

const Layout = ({ children }) => {
  const [ state, dispatch ] = useAppState();

  const { connected } = state

  const [ menuState, setMenuState ] = useState('closed')

  return (<>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <main className={ clsx(css.content, connected ? css.connected : css.disconnected) }>{children}</main>
      <Menu
        state={ menuState }
        onClick={ () => {
          const newState = menuState === 'closed' ? 'opened' : 'closed';
          setMenuState(newState)
        } }
      />

      <Navigation
        state={ menuState }
      />
    </>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
