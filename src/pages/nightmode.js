import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Dimmer from '../components/Dimmer'

const NightMode = () => {
  return (
    <Layout>
      <SEO title="QCLK" />

      <Dimmer
        time={ new Date() }
        onChange={ (v) => {
          //console.log(v)
        }}
      />

    </Layout>
  )
}

export default NightMode
