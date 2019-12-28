import styled from 'styled-components'

import colors from '../../../ui/colors'

export const style = {
  base: {
    fontFamily: 'Lato, Lato, sans-serif',
  },
  invalid: {
    color: 'red',
  },
}

interface Props {
  error: boolean
}

export const ElementWrapper = styled.div<Props>`
  padding: 0.5rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border: 0.5px solid ${colors.primary};
  border-radius: 5px;
  ${({error}) => error && `
    border: 1px solid red;
  `}
`
