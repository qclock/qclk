import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const [message, setMessage] = useState('loading')

  useEffect(() => {
    const timeoutCtrl = new AbortController();
    const signal = timeoutCtrl.signal;

    fetch('http://192.168.1.101', {
      mode: 'cors',
      signal,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
      setMessage("Fetch success")
    })
      .catch(e => {
        console.error("Fetch failed")
        console.error(e)
        setMessage("Fetch failed")
      })

    setTimeout(() => {
      timeoutCtrl.abort();
    }, 5000)
  });

  return (
    <Layout>
      <SEO title="QCLK" />
      {message}
    </Layout>
  )
}

export default IndexPage
