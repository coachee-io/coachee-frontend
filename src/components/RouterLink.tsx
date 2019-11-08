import styled from 'styled-components'
import {Link, LinkProps} from 'react-router-dom'

import colors from '../ui/colors'

interface RouterLinkProps extends LinkProps {
  primary?: boolean,
  accent?: boolean,
}

export const NoStylesRouterLink = styled(Link)`
  color: ${colors.black};
  background-color: none;

  padding: 15px;

  &:hover {
    background-color: none;
    color: ${colors.black};
  }

  &:focus {
    background-color: none;
    color: ${colors.black};
  }

  &:active {
    background-color: none;
    color: ${colors.black};
  }
`

export const RouterLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.black};
  ${({primary}: RouterLinkProps) => primary && `
    color: ${colors.primary};
  `}
  ${({accent}: RouterLinkProps) => accent && `
    color: ${colors.accent};
  `}

  &:hover {
    color: ${colors.black};
    ${({primary}: RouterLinkProps) => primary && `
      color: ${colors.primary};
    `}
    ${({accent}: RouterLinkProps) => accent && `
      color: ${colors.accent};
    `}
  }
`

export default RouterLink
