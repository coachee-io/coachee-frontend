import styled from 'styled-components'

const getPadding = (key: string, value: number): string => {
  switch (key) {
    case 'pb':
      return `padding-bottom: ${value}px;`
    case 'pt':
      return `padding-top: ${value}px;`
    case 'pr':
      return `padding-right: ${value}px;`
    case 'pl':
      return `padding-left: ${value}px;`
    case 'p-all':
      return `padding: ${value}px`
    default:
      return ''
  }
}

const oneOf = (key: string): boolean => {
  switch (key) {
    case 'pb':
      return true
    case 'pt':
      return true
    case 'pr':
      return true
    case 'pl':
      return true
    case 'p-all':
      return true
    default:
      return false
  }
}

const getPaddingKeys = (props: any): string[] | null => {
  const keys = Object.keys(props).filter((key) => oneOf(key))
  return keys
}

const composePaddings = (props: any): string => {
  const keys: string[] | null = getPaddingKeys(props)

  let Padding = ''
  if (keys && keys.length > 0) {
    keys.forEach((key) => {
      if (props[key]) {
        Padding += getPadding(key, props[key])
      }
    })
  }

  return Padding
}

interface Props {
  pt?: number,
  pb?: number,
  pl?: number,
  pr?: number
}

const SetPadding = styled.div`
  ${(props: Props) => props && composePaddings(props)}
`

export default SetPadding
