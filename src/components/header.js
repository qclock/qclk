
import { Link, useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import './header.scss'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    className="logo-image"
    fluid={data.placeholderImage.childImageSharp.fluid}
  />
}

const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 className="logo">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          title={siteTitle}
        >
          <Logo />
        </Link>
      </h1>
      <ul className="links">
        <li>
          <a className="facebook" href="https://www.facebook.com/thebikestationbudapest/" tagret="_blank" rel="noopener">
            <span className="link-text">
              facebook.com
            </span>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px">
              <path d="M13,0C5.82,0,0,5.82,0,13c0,6.518,4.801,11.899,11.057,12.839v-9.394H7.84v-3.417h3.217v-2.274 c0-3.765,1.834-5.417,4.963-5.417c1.498,0,2.291,0.111,2.666,0.162v2.983h-2.134c-1.328,0-1.792,1.259-1.792,2.679v1.868h3.893 l-0.528,3.417H14.76v9.422C21.105,25.006,26,19.581,26,13C26,5.82,20.18,0,13,0z"/>
            </svg>
          </a>
        </li>
        <li>
          <a className="messenger" href="https://www.messenger.com/t/thebikestationbudapest" tagret="_blank" rel="noopener">
            <span className="link-text">
              messenger.com
            </span>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
              <path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v2.724c0,0.745,0.784,1.23,1.45,0.897l2.629-1.314 C10.039,20.858,11.02,21,12,21c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M12.468,13.858l-2.218-1.774L5,14.417l5.2-5.2 c0.36-0.36,0.934-0.392,1.332-0.074l2.218,1.774L19,8.583l-5.2,5.2C13.439,14.144,12.866,14.176,12.468,13.858z"/>
            </svg>
          </a>
        </li>
      </ul>

      <ul className="contacts">
        <li>
          <a href="tel:+36 20 347 7766">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <title>Phone</title>
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
            </svg>
            <span className="link-text">
              +36 20 347 7766
            </span>
          </a>
        </li>
        <li>
          <a className="messenger" href="https://goo.gl/maps/mY4vrmAiFBfmESebA" tagret="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <title>Address</title>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="link-text">
              1133, Budapest Kárpát u. 50.
            </span>
          </a>
        </li>
      </ul>



  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
