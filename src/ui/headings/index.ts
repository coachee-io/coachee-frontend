import styled from 'styled-components'

import {OpenSansBold} from '../fonts'

interface HeadingProps {
  textAlign?: string
}

export const H1 = styled.h1`
  ${OpenSansBold};
  font-size: 2.25rem; // 36px
  ${({textAlign}: HeadingProps) => textAlign && `
    text-align: ${textAlign};
  `}
  margin-bottom: 1rem;
`

export const H2 = styled.h2`
  ${OpenSansBold};
  font-size: 1.5rem; // 24px
  ${({textAlign}: HeadingProps) => textAlign && `
    text-align: ${textAlign};
  `}
  margin-bottom: 1rem;
`

export const H3 = styled.h3`
  ${OpenSansBold};
  font-size: 1.125rem; // 18px
  ${({textAlign}: HeadingProps) => textAlign && `
    text-align: ${textAlign};
  `}
  margin-bottom: 1rem;
`
