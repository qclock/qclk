

import { Link, useStaticQuery, graphql } from "gatsby"

import React from "react"
import Img from "gatsby-image"

import './footer.scss'


const Bike = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bicycle.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    className="bike-image"
    fluid={data.placeholderImage.childImageSharp.fluid}
  />
}


const Footer = () => (
  <footer>
    <div className="footer-bike">
      <Bike />
    </div>
    <p>
      <span>© {new Date().getFullYear()}, The Bike Station Budapest.</span>
      <span className="separator"> | </span>
      <span>
        Image credit:
        {` `}
        <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.specialized.com%2FUS%2Fen%2Fstories%2Fmixtape&h=AT2YicNEeduc3OG9QYOsk9Xv4eOB-n6zRAJDLSDHKFmvCAvR1s51mMKogwfLYsy9l6JVj3tIxHeKappuymQl3WPpQ6peOIMCKqMBmJyRBH3u4vSwYjOqzGesKUnfLzdbbESHpxul22I" className="a" target="_blank">Specialized</a>
      </span>
    </p>
  </footer>
)

export default Footer
