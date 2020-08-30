import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import classNames from 'classnames'
import Icon from 'Primitive/Icon'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './Carousel.module.scss'

const Carousel = (props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={props.children.length}
      isIntrinsicHeight
      className={styles.Carousel}
    >
      <Slider moveThreshold={0.05} className={styles.Slider}>
        {props.children.map((child, i) => (
          <Slide key={`Slide-${i}`} className={styles.Slide} index={i}>
            {child}
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={classNames(styles.Button, styles.Back)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-left"
          width={24}
          height={30}
          a11yText="Previous Slide"
        />
      </ButtonBack>
      <ButtonNext className={classNames(styles.Button, styles.Next)}>
        <Icon
          className={styles.ControlIcon}
          type="chevron-right"
          width={24}
          height={30}
          a11yText="Previous Slide"
        />
      </ButtonNext>
    </CarouselProvider>
  )
}
export default Carousel
