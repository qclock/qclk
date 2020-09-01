/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import clsx from 'clsx';

import Menu from "./Menu"
import Navigation from "./Navigation"
import Footer from "./footer"
// import "./layout.scss"
import css from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [ menuState, setMenuState ] = useState('closed')


  return (<>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <main className={ css.content }>{children}</main>
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
