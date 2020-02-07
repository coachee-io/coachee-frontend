import styled from 'styled-components'

import colors from '../../ui/colors'
import {LatoBold, BodyFontSizes, BodyFontSizesProps} from '../../ui/fonts'

interface TabProps extends BodyFontSizesProps {
  accent?: boolean,
  primary?: boolean,
  selected: boolean
}

const Tab = styled.button<TabProps>`
  ${LatoBold};
  ${BodyFontSizes};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  color: ${colors.black};
  border-style: none;
  outline: none !important;
  background-color: transparent;
  border-bottom: 4px solid #EFEFEF;

  ${({primary, selected}) => (primary && selected) && `
    border-bottom: 4px solid ${colors.primary};
  `}
  ${({accent, selected}) => (accent && selected) && `
    border-bottom: 4px solid ${colors.accent}
  `}

  &:active {
    ${({selected}) => selected && `
      outline: none;
    `}
  }

  &:focus {
    ${({selected}) => selected && `
      outline: none;
    `}
  }
`

export default Tab
