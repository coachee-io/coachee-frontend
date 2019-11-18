import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import CheckmarkList from '../../../components/CheckmarkList'
import {RouterButtonLink} from '../../../components/Routing'

import {FlexColAlignCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'
import MediaQuery from '../../../components/Layout/MediaQuery'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import HeroImage from './Image'

const HeroListText = [
  {
    text: 'Improve your relationship with fitness, food and body image',
  },
  {
    text: 'Gain financial awareness and start saving',
  },
  {
    text: 'Find Balance in your life no matter the obstacles',
  },
  {
    text: 'Find out more about who you are and who you want to be!',
  },
]

class Hero extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={12} lg={6}>
          <H1>
            Achieve your goals,
          </H1>
          <H1>
            change your life
          </H1>
          <Para large>
            Coaching is more than a trend, it&apos;s a powerful resource!
            Some of the results you can achieve with our coaches include:
          </Para>
          <CheckmarkList list={HeroListText} />
          <MediaQuery>
            {({isTablet}: any) => (
              <>
                {isTablet() && (
                <SetMargin ml={30} mt={10}>
                  <RouterButtonLink to="/signup" primary>
                    Sign up
                  </RouterButtonLink>
                </SetMargin>
                )}
                {!isTablet() && (
                <SetMargin mt={10}>
                  <FlexColAlignCenter>
                    <RouterButtonLink to="/signup" primary>
                    Sign up
                    </RouterButtonLink>
                  </FlexColAlignCenter>
                </SetMargin>
                )}
              </>
            )}
          </MediaQuery>
        </Col>
        <MediaQuery>
          {({isDesktop}: any) => isDesktop() && (
            <Col lg={6}>
              <FlexColAlignCenter>
                <HeroImage />
              </FlexColAlignCenter>
            </Col>
          )}
        </MediaQuery>
      </Row>
    )
  }
}

export default Hero
