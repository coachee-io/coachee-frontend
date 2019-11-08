import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import CheckmarkTextList from '../../../components/CheckmarkTextList'
import RouterButtonLink from '../../../components/RouterButtonLink'
import RouterLink from '../../../components/RouterLink'

import VerticalMargin from '../../../components/VerticalMargin'
import MediaQuery from '../../../components/MediaQuery'

import {FlexboxColAlignCenter} from '../../../components/Flexbox'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

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
      <>
        <VerticalMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H1 textAlign="center">
                Ready to start your journey?
              </H1>
            </Col>
          </Row>
        </VerticalMargin>
        <VerticalMargin mt={30}>
          <Row>
            <MediaQuery>
              {({isDesktop}) => isDesktop() && (
                <Col md={6}>
                  <JourneyImage />
                </Col>
              )}
            </MediaQuery>
            <MediaQuery>
              {({isDesktop}) => (
                <Col xs={12} md={isDesktop() ? 6 : {span: 8, offset: 2}}>
                  <VerticalMargin mt={30}>
                    <CheckmarkTextList list={JourneyListText} />
                  </VerticalMargin>
                </Col>
              )}
            </MediaQuery>
          </Row>
        </VerticalMargin>
        <VerticalMargin mt={30}>
          <Row>
            <Col sm={12} md={{span: 6, offset: 3}}>
              <FlexboxColAlignCenter>
                <RouterButtonLink to="signup" primary>
                    Sign Up
                </RouterButtonLink>
              </FlexboxColAlignCenter>
            </Col>
          </Row>
        </VerticalMargin>
        <VerticalMargin mt={30}>
          <Row>
            <Col md={{span: 8, offset: 2}}>
              <Para>
                Still not sure if coaching is for you? Check out the
                resources in our
                {' '}
                <RouterLink to="/" primary>blog</RouterLink>
                {' '}
or
                {' '}
                <RouterLink to="/" primary>contact us</RouterLink>
.
              </Para>
            </Col>
          </Row>
        </VerticalMargin>
      </>
    )
  }
}

export default Journey
