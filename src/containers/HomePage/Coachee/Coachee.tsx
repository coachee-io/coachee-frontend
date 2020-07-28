import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'
import {DivBackgroundImage} from '../../../components/Image'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import award from '../../../ui/images/award.svg'
import thumbsUp from '../../../ui/images/thumbs-up.svg'
import search from '../../../ui/images/search.svg'


class Coachee extends PureComponent {
  render() {
    return (
      <Flex flexDirection="row" width="100%" marginTop="30px">
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <H1 textAlign="center">
                Why Coachee?
              </H1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <DivBackgroundImage bgImage={award} />
              <Para textAlign="center">
                All our coaches are
                {' '}
                <strong>certified</strong>
                {' '}
                and have hours of training and experience to help
                {' '}
                <strong>YOU</strong>
                {' '}
                reach any goal.
              </Para>
            </Col>
            <Col xs={12} md={4}>
              <DivBackgroundImage bgImage={thumbsUp} />
              <Para textAlign="center">
                Coaching
                {' '}
                <strong>
                  can change your life
                </strong>
                . How do we know? Personal experience and feedback from coachees!
              </Para>
            </Col>
            <Col xs={12} md={4}>
              <DivBackgroundImage bgImage={search} />
              <Para textAlign="center">
                Check programmes, prices and book your coach in
                {' '}
                <strong>
                  one single platform
                </strong>
                .
              </Para>
            </Col>
          </Row>
        </Col>
      </Flex>
    )
  }
}

export default Coachee
