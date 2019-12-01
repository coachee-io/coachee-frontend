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

export const RegularRouterLink = styled(Link)<UnstyledRouterLinkProps>`
  ${BodyFontSizes};
  color: ${colors.black};
  background-color: none;

  ${({bold}) => bold && `
    font-weight: bold;
  `}

  ${({underline}) => underline && `
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

export const RouterLink = styled(Link)<RouterLinkProps>`
  ${BodyFontSizes};
  text-decoration: underline;
  color: ${colors.black};
  ${({primary}) => primary && `
    color: ${colors.primary};
  `}
  ${({accent}) => accent && `
    color: ${colors.accent};
  `}

  &:hover {
    color: ${colors.black};
    ${({primary}) => primary && `
      color: ${colors.primary};
    `}
    ${({accent}) => accent && `
      color: ${colors.accent};
    `}
  }
`


export const RouterButtonLink = styled(Link)<RouterLinkProps>`
  ${BodyFontSizes};
  ${LatoBold};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 156px;
  border-radius: 5px;
  text-align: center;
  ${({primary}) => primary && `
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  ${({accent}) => accent && `
    background-color: ${colors.accent};
    color: ${colors.black};
  `}

  &:hover {
    ${({primary}) => primary && `
      color: ${colors.white};
    `}
    ${({accent}) => accent && `
      color: ${colors.black};
    `}
  }
`
