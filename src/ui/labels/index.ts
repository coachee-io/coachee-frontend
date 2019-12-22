import styled from 'styled-components'

import {
  Lato, LatoBold, BodyFontSizes, BodyFontSizesProps,
} from '../fonts'


interface ParaProps extends BodyFontSizesProps {
  large?: boolean,
  small?: boolean,
  textAlign?: string,
  breakAll?: boolean,
  bold?: boolean
}

export const Para = styled.p<ParaProps>`
  ${Lato};
  ${BodyFontSizes};
  ${({textAlign}) => textAlign && `
    text-align: ${textAlign};
  `}
  ${({bold}) => bold && `
    ${LatoBold};
  `}
  word-break: break-word;
  white-space: normal;
`
