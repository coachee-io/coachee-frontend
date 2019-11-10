import styled from 'styled-components'
import {Link, LinkProps} from 'react-router-dom'

import colors from '../ui/colors'
import {LatoBold} from '../ui/fonts'

interface RouterButtonLinkProps extends LinkProps {
  primary?: boolean,
  accent?: boolean,
}

const RouterButtonLink = styled(Link)`
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

export default RouterButtonLink
