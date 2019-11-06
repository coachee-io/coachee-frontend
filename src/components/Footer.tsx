import React, {PureComponent } from 'react'
import {Container, Col} from 'react-bootstrap'
import styled from 'styled-components'

import SectionRow from './SectionRow'

const StyledFooter = styled.div`
  width: 100%;
  height: 90px;
`

class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <Container>
          <SectionRow>
            <Col xs={12}>
              Footer
            </Col>
          </SectionRow>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
