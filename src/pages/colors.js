import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ColorWheel from '../components/ColorWheel'
import Spectrum from '../components/Spectrum'

const IndexPage = () => {
  return (<Layout>
    <SEO title="QCLK" />
    <ColorWheel />
    <Spectrum />
  </Layout>)
}

export default IndexPage
