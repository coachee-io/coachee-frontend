import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'
import {DivBackgroundImage} from '../../../components/Image'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import certificate from '../../../ui/images/certificate.svg'
import conversation from '../../../ui/images/conversation.svg'
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
              <DivBackgroundImage bgImage={certificate} />
              <Para textAlign="center">
              All our coaches are
                <strong> certified</strong>
  , they have hours of training and experience to help YOU reach any goal.
              </Para>
            </Col>
            <Col xs={12} md={4}>
              <DivBackgroundImage bgImage={conversation} />
              <Para textAlign="center">
              Coaching
                <strong> works </strong>
  . How do we know? Personal experience and talking to coachees!
              </Para>
            </Col>
            <Col xs={12} md={4}>
              <DivBackgroundImage bgImage={search} />
              <Para textAlign="center">
              Check descriptions and prices in one
                <strong> simple search </strong>
  and leave your review. No more scrolling through social media to find your coach.
              </Para>
            </Col>
          </Row>
        </Col>
      </Flex>
    )
  }
}

export default Coachee
