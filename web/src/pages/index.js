import React from 'react'
import Contact from 'Section/Contact'
import SEO from '../components/seo'
import Layout from '../containers/layout'

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Title" />
      <h1 hidden>Welcome to</h1>
      <Contact title="Contact" />
    </Layout>
  )
}

export default IndexPage
