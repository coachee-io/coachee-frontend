import { ReactElement } from 'react'
import Parser, {convertNodeToElement} from 'react-html-parser'

const transform = (node: any, index: any): ReactElement | void | null | undefined => {
  if (node.type === 'tag' && node.name === 'p') {
    return convertNodeToElement(node, index, transform)
  }

  if (node.type === 'tag' && node.name === 'b') {
    return convertNodeToElement(node, index, transform)
  }

  return undefined
}

export const options = {
  decodeEntities: true,
  transform,
}

export default (html: string) => Parser(html, options)
