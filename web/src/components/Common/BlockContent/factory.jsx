import React from 'react'
import Grid from './widgets/Grid'
import createMedia from './widgets/Media'

/**
 * Used to create components coming from CMS
 */
export default function createComponents(components) {
  if (!components) {
    return <> </>
  }
  return components.map((component) => {
    switch (component._type) {
      case 'grid':
        return Grid(component)
      case 'image':
        return createMedia(component)
      case 'figure':
        return createMedia(component)
      case 'video':
        return createMedia(component)
      default:
        return <></>
    }
  })
}
