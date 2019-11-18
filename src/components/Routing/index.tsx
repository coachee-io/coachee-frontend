import styled from 'styled-components'
import {Link, LinkProps} from 'react-router-dom'

import colors from '../../ui/colors'
import {LatoBold, BodyFontSizes, BodyFontSizesProps} from '../../ui/fonts'

export interface RouterLinkProps extends LinkProps, BodyFontSizesProps {
  primary?: boolean,
  accent?: boolean,
}

export interface UnstyledRouterLinkProps extends LinkProps, BodyFontSizesProps {
  bold?: boolean,
  underline?: boolean
}

export const UnstyledRouterLink = styled(Link)`
  font-size: inherit;
  color: inherit;
  background-color: none;
  &:hover {
    background-color: none;
    color: inherit;
    text-decoration: inherit;
  }
  &:focus {
    background-color: none;
    color: inherit;
    text-decoration: inherit;
  }

  &:active {
    background-color: none;
    color: inherit;
    text-decoration: inherit;
  }
`


export const RegularRouterLink = styled(Link)`
  ${BodyFontSizes};
  color: ${colors.black};
  background-color: none;

  ${({bold}: UnstyledRouterLinkProps) => bold && `
    font-weight: bold;
  `}

  ${({underline}: UnstyledRouterLinkProps) => underline && `
    text-decoration: underline;
  `}

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
  ${BodyFontSizes};
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


export const RouterButtonLink = styled(Link)`
  ${BodyFontSizes};
  ${LatoBold};
  display: block;
  line-height: 45px;
  height: 44px;
  width: 156px;
  border-radius: 5px;
  text-align: center;
  ${({primary}: RouterLinkProps) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  ${({accent}: RouterLinkProps) => accent && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  &:hover {
    ${({primary}: RouterLinkProps) => primary && `
      color: ${colors.white};
    `}
    ${({accent}: RouterLinkProps) => accent && `
      color: ${colors.black};
    `}
  }
`
