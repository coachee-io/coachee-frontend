import styled from 'styled-components'

import {
  Lato, LatoBold, BodyFontSizes, BodyFontSizesProps,
} from 'ui/fonts'

import colors from 'ui/colors'

interface ParaProps extends BodyFontSizesProps {
  large?: boolean,
  small?: boolean,
  textAlign?: string,
  breakAll?: boolean,
  bold?: boolean,
  primaryColor?: boolean
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
  ${({primaryColor}) => primaryColor && `
    color: ${colors.primary};
  `}
  word-break: break-word;
  white-space: normal;
`
