import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import config from '../../../config'
function SEO({ title, description, metaImage, keywords, lang, meta }) {
  const metaDescription = description || config.site.description
  const metaKeywords = keywords || config.site.metaKeywords
  const siteTitle = title || config.site.siteTitle

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: metaImage.asset.url
                },
                {
                  property: 'og:image:width',
                  content: metaImage.asset.metadata.dimensions.width
                },
                {
                  property: 'og:image:height',
                  content: metaImage.asset.metadata.dimensions.height
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image'
                }
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary'
                }
              ]
        )
        .concat(
          metaKeywords
            ? {
                name: 'keywords',
                content: metaKeywords
              }
            : {}
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
