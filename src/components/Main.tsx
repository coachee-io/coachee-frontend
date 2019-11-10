import React, {PureComponent, ReactNode} from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap'
import {minWidthSize} from '../ui/global/mediaQuery'

const StyledContainer = styled(Container)`
  flex: 1 0 auto;
  padding-top: 90px;
  ${minWidthSize.tablet`
    padding-top: 110px;
  `}
`

interface Props {
  children: ReactNode
}

class Main extends PureComponent<Props> {
  render() {
    const {children} = this.props
    return (
      <StyledContainer>
        {children}
      </StyledContainer>
    )
  }
}

export default Main
