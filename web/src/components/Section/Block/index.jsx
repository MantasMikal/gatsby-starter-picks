import React from 'react'
import { array, string } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Block.module.scss'

const Block = ({ blockContent, title }) => {
  return (
    <Container
      className={styles.Block}
      size="wide"
      center
      gutter
      spacious
      as="section"
    >
      {title && (
        <Type as="h1" size="display" className={styles.Title}>
          {title}
        </Type>
      )}
    </Container>
  )
}

Block.propTypes = {
  blockContent: array,
  title: string
}

export default Block
