import React from 'react'
import useAppState from '../state'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TimeWheel from '../components/TimeWheel'

const IndexPage = () => {
  const [ state, dispatch ] = useAppState();
  return (
    <Layout connected={ state.connected }>
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
