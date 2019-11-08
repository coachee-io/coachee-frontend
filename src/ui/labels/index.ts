import styled from 'styled-components'

import {Lato} from '../fonts'

interface ParaProps {
  large?: boolean,
  textAlign?: string
}


export const Label1 = styled.label`

`

export const Para = styled.p`
  ${Lato};
  font-size: 1rem; // 16px
  ${({large}: ParaProps) => large && `
    font-size: 1.5rem; // 24px
  `}
  ${({textAlign}: ParaProps) => textAlign && `
    text-align: ${textAlign};
  `}
`
