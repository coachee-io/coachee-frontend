import styled from 'styled-components'

import {Lato} from '../../../../ui/fonts'
import colors from '../../../../ui/colors'

export interface TagProps {
  primary?: boolean,
  accent?: boolean,
}

export const Tag = styled.div`
  ${Lato};
  text-align: center;
  width: 140px;
  ${({primary}: TagProps) => primary && `
    background-color: ${colors.primary};
    color: #FFFFFF;
  `}
  ${({accent}: TagProps) => accent && `
    background-color: ${colors.accent};
  `}
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
`
