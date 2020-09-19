import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import CheckmarkList from 'components/CheckmarkList'
import Flex from 'components/Layout/Flexbox'
import {RouterButtonLink} from 'components/Routing'

import MediaQuery from 'components/Layout/MediaQuery'

import {H1} from 'ui/headings'
import {Para} from 'ui/labels'

import FeatureFlags from 'utils/featureFlags'

import HeroImage from './Image'

const HeroListText = [
  {
    text: 'Find the right path and balance in your life no matter the obstacles.',
  },
  {
    text: 'Improve your relationship with yourself and others.',
  },
  {
    text: 'Identify and achieve your career ambitions.',
  },
  {
    text: 'Gain financial awareness and start saving.',
  },
]

class Hero extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Flex flexDirection="row" width="100%" marginTop="30px">
            <Col xs={12} lg={6}>
              <H1>
                Achieve your goals,
              </H1>
              <H1>
                change your life
              </H1>
              <Para large>
                Coaching is more than a trend, it&apos;s a powerful resource!
              </Para>
              <CheckmarkList list={HeroListText} withCheckmark />
              {FeatureFlags.isFeatureEnabled('platformEnabled') && (
                <MediaQuery>
                  {({isTablet}: any) => (
                    <>
                      {isTablet() && (
                      <Flex flexDirection="row" width="100%" marginLeft="30px">
                        <RouterButtonLink to="/signup" primary>
                          Sign up
                        </RouterButtonLink>
                      </Flex>
                      )}
                      {!isTablet() && (
                      <Flex flexDirection="row" justifyContent="center" width="100%">
                        <RouterButtonLink to="/signup" primary>
                          Sign up
                        </RouterButtonLink>
                      </Flex>
                      )}
                    </>
                  )}
                </MediaQuery>
              )}
            </Col>
            <MediaQuery>
              {({isDesktop}: any) => isDesktop() && (
              <Col lg={6}>
                <HeroImage />
              </Col>
              )}
            </MediaQuery>
          </Flex>
        </Col>
      </Row>
    )
  }
}

export default Hero
