import React, { useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import useAppState from '../state'

import ColorWheel from '../components/ColorWheel'

const IndexPage = () => {
  const [ state, dispatch ] = useAppState();

  return (<Layout>
    <SEO title="QCLK" />
    <ColorWheel
      minute={ state.minute }
      hour={ state.hour }
      onChange={ (arm, prop, value) => {
        dispatch({
          type: 'color',
          arm,
          prop,
          value,
        })
      }}
    />
  </Layout>)
}

export default IndexPage
