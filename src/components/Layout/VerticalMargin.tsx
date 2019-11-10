import styled from 'styled-components'

const getMargin = (key: string, value: number): string => {
  switch (key) {
    case 'mb':
      return `margin-bottom: ${value}px;`
    case 'mt':
      return `margin-top: ${value}px;`
    default:
      return ''
  }
}

const getMarginKeys = (props: any): string[] | null => {
  const keys = Object.keys(props).filter((key) => key === 'mb' || key === 'mt')
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
  mb?: number
}

const VerticalMargin = styled.div`
  ${(props: Props) => props && composeMargins(props)}
`

export default VerticalMargin
