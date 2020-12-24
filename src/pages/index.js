import React from 'react'
import useAppState from '../state'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TimeWheel from '../components/TimeWheel'

const IndexPage = () => {
  const [ state, dispatch ] = useAppState();
  return (
    <Layout>
      <SEO title="QCLK" />
      <TimeWheel
        time={ state.time }
        onChange={ (value) => {
          dispatch({
            type: 'time',
            value,
          })}
        }
      />

    </Layout>
  )
}

export default IndexPage
