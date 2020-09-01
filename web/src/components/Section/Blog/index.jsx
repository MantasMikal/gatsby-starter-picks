import React from 'react'
import { array } from 'prop-types'

import BlogPostPreview from 'Common/BlogPostPreview'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import MasonryLayout from 'Primitive/MasonryLayout'

import styles from './Blog.module.scss'

const Blog = ({ blogNodes }) => {
  let blogposts = []
  for (let i = 0; i < blogNodes.length; i++) {
    blogposts.push(
      <BlogPostPreview
        key={blogNodes[i].id}
        className={styles.BlogPostPreview}
        {...blogNodes[i]}
        surround
      />
    )
  }

  return (
    <Container
      className={styles.Root}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="display" className={styles.Title}>
        Blog
      </Type>
      <MasonryLayout items={blogposts} gap={25} />
    </Container>
  )
}

Blog.propTypes = {
  galleryNodes: array
}

export default Blog
