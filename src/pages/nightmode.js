import React from 'react'
import useAppState from '../state'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Dimmer from '../components/Dimmer'

const NightMode = () => {
  const [ state, dispatch ] = useAppState();
  return (
    <Layout connected={ state.connected }>
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
