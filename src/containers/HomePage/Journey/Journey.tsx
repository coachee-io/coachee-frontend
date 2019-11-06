import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import SectionRow from '../../../components/SectionRow'
import CheckmarkTextList from '../../../components/CheckmarkTextList'
import RouterButtonLink from '../../../components/RouterButtonLink'

import {H1} from '../../../ui/headings'

import JourneyImage from './Image'

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
              <H1 textAlign="center">
                Ready to start your journey?
              </H1>
            </Col>
          </Row>
          <SectionRow>
            <Col sm={4} md={5}>
              <JourneyImage />
            </Col>
            <Col sm={8} md={6}>
              <SectionRow>
                <Col xs={12}>
                  <CheckmarkTextList list={JourneyListText} />
                </Col>
              </SectionRow>
            </Col>
          </SectionRow>
          <SectionRow>
            <Col xs={12}>
              <RouterButtonLink to="signup" primary>
                Sign Up
              </RouterButtonLink>
            </Col>
          </SectionRow>
        </Col>
      </SectionRow>
    )
  }
}

export default Journey
