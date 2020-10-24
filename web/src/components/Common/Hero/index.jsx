import React from 'react'

import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import Image from 'Primitive/Image'

import styles from './Hero.module.scss'

const Hero = ({ heroImage, title, subtitle }) => {
  return (
    <div className={styles.Hero}>
      <Image
        image={heroImage}
        loading="eager"
        durationFadeIn={150}
        alt={title}
      />
      <Container size="wide" gutter center className={styles.Content}>
        <Type size="display1" as="h2" className={styles.Title}>
          {title}
        </Type>
        <Type size="subtitle" as="p" className={styles.Subtitle}>
          {subtitle}
        </Type>
      </Container>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
