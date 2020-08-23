/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "./Menu"
import Navigation from "./Navigation"
import Footer from "./footer"
import "./layout.scss"

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


  return (
    <>
      <main className="content">{children}</main>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
