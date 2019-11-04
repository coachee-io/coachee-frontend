import styled from 'styled-components'

import {OpenSansBold} from '../fonts'

interface Props {
  alignCenter?: boolean
}

export const H1 = styled.h1`
  ${OpenSansBold};
  font-size: 36px;
  ${({alignCenter}: Props) => alignCenter && `
    text-align: center;
  `}
  width: 100%;
`

export const H2 = styled.h2`
  ${OpenSansBold};
  font-size: 24px;
  ${({alignCenter}: Props) => alignCenter && `
    text-align: center;
  `}
  width: 100%;
`

export const H3 = styled.h3`
  ${OpenSansBold};
  font-size: 18px;
  ${({alignCenter}: Props) => alignCenter && `
    text-align: center;
  `}
  width: 100%;
`
