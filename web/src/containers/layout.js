import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import config from '../../../config'

import favIcon from '../assets/favicon.png'

import Layout from '../components/Layout/Layout'

const LayoutContainer = (props) => {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }

  const social = {
    facebook: null,
    twitter: null,
    youtube: null,
    instagram: null
  }

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://use.typekit.net" />
      </Helmet>
      <Layout
        {...props}
        showNav={showNav}
        onHideNav={handleHideNav}
        onShowNav={handleShowNav}
        siteTitle={config.site.siteTitle}
        social={social}
        logo={favIcon}
      />
    </>
  )
}

export default LayoutContainer
