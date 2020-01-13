import styled from 'styled-components'

import colors from '../../../../../ui/colors'

interface Props {
  error: boolean
}

export const Input = styled.input<Props>`
  width: 100%;
  margin-bottom: 0;
  padding: 0.5rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border: 0.5px solid ${colors.primary};
  border-radius: 5px;
  line-height: 1.2rem;
  height: 33.8px;
  font-size: 1rem;
  ${({error}) => error && `
    border: 1px solid red;
  `}

  &:focus {
    outline: none;
  }
`
