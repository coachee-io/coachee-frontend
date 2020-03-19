import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import Flex from '../../components/Layout/Flexbox'

import {Anchor} from '../../components/Routing'

import {Para} from '../../ui/labels'
import {H3} from '../../ui/headings'

import {BeginChatImage, TermsLSOImage, OnlineChatImage} from './images'

class AboutUs extends PureComponent {
  render() {
    return (
      <>
        <Flex flexDirection="column" marginTop="30px">
          <Row>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" justifyContent="center">
                <H3>
                  Hi there!
                </H3>
                <Para>
                  If you’ve clicked on the About Us link on
                  {' '}
                  <Anchor href="https://www.coachee.io" primary>
                    coachee.io
                  </Anchor>
                  {' '}
                  , you’re probably either curious about who is managing this platform,
                  you want to check whether we’re legit - or both!
                </Para>
                <Para>
                  So let’s start with the latter: yes, we’re serious about what we do and we strive
                  to provide absolutely
                  {' '}
                  <strong>top notch customer service</strong>
                  {' '}
                  - if you’re not happy, neither are we!
                </Para>
                <Para>
                  Our aim is to make it easier and more reliable for anyone in the UK to
                  {' '}
                  <strong>find their perfect coach</strong>
                  {' '}
                  - the one that really listens,
                  is kind but also always ready to deliver a strong message when needed,
                  is passionate about always learning more about their
                  field of expertise and works tirelessly to ensure their coachees achieve the best results they possibly can.
                </Para>
              </Flex>
            </Col>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" alignItems="center">
                <BeginChatImage />
              </Flex>
            </Col>
          </Row>
        </Flex>
        <Flex flexDirection="column" marginTop="30px">
          <Row>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" justifyContent="center" height="100%">
                <Para>
                  To ensure we’re able to do this, we have high criteria that we measure our coaches against:
                </Para>
                <Para>
                  They need to be
                  {' '}
                  <strong>certified</strong>
                  , and a weekend coaching course doesn’t count;
                  They need to provide coaching programs of at least
                  {' '}
                  <strong>4 weeks</strong>
                  {' '}
                  to ensure maximum impact and results;
                  We meet with all our coaches before
                  {' '}
                  <strong>approving</strong>
                  {' '}
                  them on the website.
                </Para>
                <Para>
                  We’re also a registered UK company (number:
                  {' '}
                  <strong>12314526</strong>
                  ).
                </Para>
              </Flex>
            </Col>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" alignItems="center">
                <TermsLSOImage />
              </Flex>
            </Col>
          </Row>
        </Flex>
        <Flex flexDirection="column" marginTop="30px">
          <Row>
            <Col xs={12} md={6}>
              <Para bold>
                So who are we? Well, we’re a small but mighty team!
              </Para>
              <Para>
                In true startup style, most of your interactions will be with me -
                My name is
                {' '}
                <strong>Elisabete</strong>
                , and the idea for
                {' '}
                <Anchor href="https://www.coachee.io" primary>
                  coachee.io
                </Anchor>
                {' '}
                came to me while I was a coachee
                in a program much like the ones you’ll find throughout the website!
              </Para>
              <Para>
                After one of my sessions with my brilliant coach and while trying to figure out what I wanted to do with my life,
                I started playing with the idea of being a coach myself, but it just didn’t feel right, something was missing.
              </Para>
              <Para>
                Fast forward many months of getting a great team together to support me and build the website,
                {' '}
                <Anchor href="https://www.coachee.io" primary>
                  coachee.io
                </Anchor>
                {' '}
                was launched and I’m so happy about its success. I found coaching one of the
                {' '}
                <strong>most valuable investments</strong>
                I have ever made - and I know you will too.
              </Para>
              <Para>
                To learn more about us, follow our
                {' '}
                <Anchor href="https://www.coachee.io" primary>Instagram</Anchor>
                .
              </Para>
            </Col>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" alignItems="center">
                <OnlineChatImage />
              </Flex>
            </Col>
          </Row>
        </Flex>
      </>
    )
  }
}

export default AboutUs
