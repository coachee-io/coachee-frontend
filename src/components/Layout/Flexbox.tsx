import {Row as BSRow, Col as BSCol} from 'react-bootstrap'
import styled from 'styled-components'

import setMargin, {MarginProps} from '../../ui/global/margin'
import setPadding, {PaddingProps} from '../../ui/global/padding'
import {minWidthSize, maxWidthSize} from '../../ui/global/mediaQuery'


interface Props extends MarginProps, PaddingProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string,
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | string,
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | string,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | string,
  width?: string,
  height?: string
}

const Flex = styled.div<Props>`
  display: flex;
  ${({flexDirection}) => flexDirection && `
    flex-direction: ${flexDirection};
  `}
  ${({flexWrap}) => flexWrap && `
    flex-wrap: ${flexWrap};
  `}
  ${({alignItems}) => alignItems && `
    align-items: ${alignItems};
  `}
  ${({justifyContent}) => justifyContent && `
    justify-content: ${justifyContent};
  `}
  ${({width}) => width && `
    width: ${width};
  `}
  ${({height}) => height && `
    height: ${height};
  `}
  ${(props) => props && setMargin(props)}
  ${(props) => props && setPadding(props)}
`

export const Row = styled(BSRow)``
export const Col = styled(BSCol)``

export default Flex
