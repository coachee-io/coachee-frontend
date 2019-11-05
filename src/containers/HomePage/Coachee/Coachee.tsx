import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import SectionRow from '../../../components/SectionRow'
import Image from '../../../components/Image'

import {H1} from '../../../ui/headings'
import {Para2, TextAlignCenter} from '../../../ui/labels'

import certificate from '../../../ui/images/certificate.svg'
import conversation from '../../../ui/images/conversation.svg'
import search from '../../../ui/images/search.svg'


class Coachee extends PureComponent {
  render() {
    return (
      <SectionRow>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <TextAlignCenter>
                <H1>
                  Why Coachee?
                </H1>
              </TextAlignCenter>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Image bgImage={certificate} />
              <TextAlignCenter>
                <Para2>
              All our coaches are
                  <strong> certified</strong>
  , they have hours of training and experience to help YOU reach any goal.
                </Para2>
              </TextAlignCenter>
            </Col>
            <Col xs={12} md={4}>
              <Image bgImage={conversation} />
              <TextAlignCenter>
                <Para2>
              Coaching
                  <strong> works </strong>
  . How do we know? Personal experience and talking to coachees!
                </Para2>
              </TextAlignCenter>
            </Col>
            <Col xs={12} md={4}>
              <Image bgImage={search} />
              <TextAlignCenter>
                <Para2>
              Check descriptions and prices in one
                  <strong> simple search </strong>
  and leave your review. No more scrolling through social media to find your coach.
                </Para2>
              </TextAlignCenter>
            </Col>
          </Row>
        </Col>

      </SectionRow>
    )
  }
}

export default Coachee
