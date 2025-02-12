import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from 'components/Layout/Flexbox'
import CheckmarkTextList from 'components/CheckmarkList'
import {RouterLink, RouterButtonLink} from 'components/Routing'

import MediaQuery from 'components/Layout/MediaQuery'

import FeatureFlags from 'utils/featureFlags'

import {H1} from 'ui/headings'
import {Para} from 'ui/labels'

import JourneyImage from './Image'

const JourneyListText = [
  {
    text: 'Search coaching programmes by category.',
  },
  {
    text: 'When you find your match, select the coaching programme and choose the date and time of your free intro call.',
  },
  {
    text: 'Add your payment details and checkout.',
  },
  {
    text: 'Your coach will approve your booking and be in touch with you to confirm your intro call.',
  },
  {
    text: `If you are not happy after your intro call, let us know within 12 hours and we will cancel your transaction, 
    no questions asked.`,
  },
  {
    text: 'Otherwise, be open-minded, attend your sessions and embrace the changes!',
  },
]

class Journey extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" width="100%" marginTop="30px">
        <Row>
          <Col xs={12}>
            <H1 textAlign="center">
              Ready to start your journey?
            </H1>
          </Col>
        </Row>
        <Flex flexDirection="row" width="100%" marginTop="30px">
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
                <Flex flexDirection="column" width="100%" marginTop={isDesktop() ? '60px' : '0'}>
                  <CheckmarkTextList list={JourneyListText} withCheckmark />
                </Flex>
              </Col>
            )}
          </MediaQuery>
        </Flex>
        {FeatureFlags.isFeatureEnabled('platformEnabled') && (
          <Flex flexDirection="row" width="100%" marginTop="30px">
            <Col sm={12} md={{span: 6, offset: 3}}>
              <Flex flexDirection="row" justifyContent="center" width="100%">
                <RouterButtonLink to="signup" primary>
                  Sign Up
                </RouterButtonLink>
              </Flex>
            </Col>
          </Flex>
        )}
      </Flex>
    )
  }
}

export default Journey
