import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import CheckmarkTextList from '../../../components/CheckmarkList'
import {RouterLink, RouterButtonLink} from '../../../components/Routing'

import MediaQuery from '../../../components/Layout/MediaQuery'

import FeatureFlags from '../../../utils/featureFlags'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import JourneyImage from './Image'

const JourneyListText = [
  {
    text: 'Search coaching programmes by category',
  },
  {
    text: 'When you find your match, select the date and time for your free intro call.',
  },
  {
    text: 'Checkout and pay.',
  },
  {
    text: 'Your coach will approve your booking and be in touch with you to confirm your intro call.',
  },
  {
    text: 'If you are not happy after you intro call, let us know withing 48 hours for a full refund.',
  },
  {
    text: 'Otherwise, be open-minded, attend your session and embrace the changes!',
  },
]

class Journey extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <H1 textAlign="center">
                Ready to start your journey?
            </H1>
          </Col>
        </Row>
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
                <CheckmarkTextList list={JourneyListText} />
              </Col>
            )}
          </MediaQuery>
        </Row>
        {FeatureFlags.isFeatureEnabled('platformEnabled') && (
        <Row>
          <Col sm={12} md={{span: 6, offset: 3}}>
            <RouterButtonLink to="signup" primary>
              Sign Up
            </RouterButtonLink>
          </Col>
        </Row>
        )}
        <Row>
          <Col md={12}>
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
      </>
    )
  }
}

export default Journey
