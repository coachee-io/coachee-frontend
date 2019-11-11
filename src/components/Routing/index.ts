import styled from 'styled-components'
import {Link, LinkProps} from 'react-router-dom'

import colors from '../../ui/colors'
import {LatoBold} from '../../ui/fonts'

interface RouterLinkProps extends LinkProps {
  primary?: boolean,
  accent?: boolean,
}

export const UnstyledRouterLink = styled(Link)`
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

interface RouterButtonLinkProps extends LinkProps {
  primary?: boolean,
  accent?: boolean,
}

export const RouterButtonLink = styled(Link)`
  ${LatoBold};
  display: block;
  font-size: 16px;
  line-height: 45px;
  height: 44px;
  width: 156px;
  border-radius: 5px;
  text-align: center;
  ${({primary}: RouterButtonLinkProps) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  ${({accent}: RouterButtonLinkProps) => accent && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  &:hover {
    ${({primary}: RouterButtonLinkProps) => primary && `
      color: ${colors.white};
    `}
    ${({accent}: RouterButtonLinkProps) => accent && `
      color: ${colors.black};
    `}
  }
`
