import styled from 'styled-components'

import {Lato, BodyFontSizes, BodyFontSizesProps} from '../fonts'


interface ParaProps extends BodyFontSizesProps {
  large?: boolean,
  small?: boolean,
  textAlign?: string
}

export const Para = styled.p`
  ${Lato};
  ${BodyFontSizes};
  ${({textAlign}: ParaProps) => textAlign && `
    text-align: ${textAlign};
  `}
`
