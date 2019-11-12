import styled from 'styled-components'

const getMargin = (key: string, value: number): string => {
  switch (key) {
    case 'mb':
      return `margin-bottom: ${value}px;`
    case 'mt':
      return `margin-top: ${value}px;`
    case 'mr':
      return `margin-right: ${value}px;`
    case 'ml':
      return `margin-left: ${value}px;`
    case 'm-all':
      return `margin: ${value}px;`
    default:
      return ''
  }
}

const oneOf = (key: string): boolean => {
  switch (key) {
    case 'mb':
      return true
    case 'mt':
      return true
    case 'mr':
      return true
    case 'ml':
      return true
    case 'm-all':
      return true
    default:
      return false
  }
}

const getMarginKeys = (props: any): string[] | null => {
  const keys = Object.keys(props).filter((key) => oneOf(key))
  return keys
}

const composeMargins = (props: any): string => {
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

interface Props {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number
}

const SetMargin = styled.div`
  ${(props: Props) => props && composeMargins(props)}
`

export {
  getMargin,
}

export default SetMargin
