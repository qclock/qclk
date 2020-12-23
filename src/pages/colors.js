import React from 'react'
import useAppState from '../state'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ColorWheel from '../components/ColorWheel'

const IndexPage = () => {
  const [ state, dispatch ] = useAppState();

  return (<Layout connected={ state.connected }>
    <SEO title="QCLK" />
    <ColorWheel
      minute={ state.color.minute }
      hour={ state.color.hour }
      onChange={ (arm, value) => {
        dispatch({
          type: 'color',
          arm,
          value,
        })
      }}
    />
  </Layout>)
}

export default IndexPage
