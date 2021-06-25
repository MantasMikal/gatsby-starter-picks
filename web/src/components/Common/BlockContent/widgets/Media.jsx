import React from 'react'
import Video from './Video'
import Figure from './Figure'
import ContentBlock from './ContentBlock'

export const Media = (component) => {
  switch (component._type) {
    case 'figure':
      return Figure(component)

    case 'image':
      return Figure(component)

    case 'video':
      return Video(component)

    case 'contentBlock':
      return ContentBlock(component)

    default:
      return <> </>
  }
}

export default Media
