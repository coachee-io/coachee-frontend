export interface Props {
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
  padding?: string
}

const getPadding = (key: string, value: string): string => {
  switch (key) {
    case 'paddingBottom':
      return `padding-bottom: ${value};`
    case 'paddingTop':
      return `padding-top: ${value};`
    case 'paddingRight':
      return `Padding-right: ${value};`
    case 'paddingLeft':
      return `padding-left: ${value};`
    case 'padding':
      return `padding: ${value};`
    default:
      return ''
  }
}

const oneOf = (key: string): boolean => {
  switch (key) {
    case 'paddingBottom':
      return true
    case 'paddingTop':
      return true
    case 'paddingRight':
      return true
    case 'paddingLeft':
      return true
    case 'padding':
      return true
    default:
      return false
  }
}

const getPaddingKeys = (props: any): string[] | null => {
  const keys = Object.keys(props).filter((key) => oneOf(key))
  return keys
}

const setPadding = (props: any): string => {
  const keys: string[] | null = getPaddingKeys(props)

  let padding = ''
  if (keys && keys.length > 0) {
    keys.forEach((key) => {
      if (props[key]) {
        padding += getPadding(key, props[key])
      }
    })
  }

  return padding
}

export default setPadding
