import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TimeWheel from '../components/TimeWheel'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="QCLK" />

      <TimeWheel
        time={ new Date() }
        onChange={ (v) => {
          // console.log(v)
        }}
      />

    </Layout>
  )
}

export default IndexPage
