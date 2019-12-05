export interface MarginProps {
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  margin?: string
}

const getMargin = (key: string, value: string): string => {
  switch (key) {
    case 'marginBottom':
      return `margin-bottom: ${value};`
    case 'marginTop':
      return `margin-top: ${value};`
    case 'marginRight':
      return `margin-right: ${value};`
    case 'marginLeft':
      return `margin-left: ${value};`
    case 'margin':
      return `margin: ${value};`
    default:
      return ''
  }
}

const oneOf = (key: string): boolean => {
  switch (key) {
    case 'marginBottom':
      return true
    case 'marginTop':
      return true
    case 'marginRight':
      return true
    case 'marginLeft':
      return true
    case 'margin':
      return true
    default:
      return false
  }
}

const getMarginKeys = (props: any): string[] | null => {
  const keys = Object.keys(props).filter((key) => oneOf(key))
  return keys
}

const setMargin = (props: any): string => {
  const keys: string[] | null = getMarginKeys(props)

  let margin = ''
  if (keys && keys.length > 0) {
    keys.forEach((key) => {
      if (props[key]) {
        margin += getMargin(key, props[key])
      }
    })
  }

  return margin
}

export default setMargin
