import React, {PureComponent, ReactNode} from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap'

const StyledContainer = styled(Container)`
  height: 100%;
  min-height: calc(100vh - 90px);
  margin-top: 110px;
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
