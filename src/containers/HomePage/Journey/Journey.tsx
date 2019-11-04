import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'

import SectionRow from '../../../components/SectionRow'
import CheckmarkTextList from '../../../components/CheckmarkTextList'

import {H1} from '../../../ui/headings'

const StyledRow = styled(Row)`
  margin-top: 30px;
`

const JourneyListText = [
  'Search coaching programmes by category',
  'When you find your match, select the date and time for your free intro call.',
  'Checkout and pay.',
  'Your coach will approve your booking and be in touch with you to confirm your intro call.',
  'If you are not happy after you intro call, let us know withing 48 hours for a full refund.',
  'Otherwise, be open-minded, attend your session and embrace the changes!',
]

class Journey extends PureComponent {
  render() {
    return (
      <SectionRow>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <H1 alignCenter>
                Ready to start your journey?
              </H1>
            </Col>
          </Row>
          <StyledRow>
            <Col sm={4} md={5}>
              Image
            </Col>
            <Col sm={8} md={6}>
              <CheckmarkTextList list={JourneyListText} />
            </Col>
          </StyledRow>
        </Col>
      </SectionRow>
    )
  }
}

export default Journey
