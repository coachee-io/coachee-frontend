import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import Flex from 'components/Layout/Flexbox'

import {Anchor} from 'components/Routing'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

import {FounderImage, OnlineChatImage} from './images'

class AboutUs extends PureComponent {
  render() {
    return (
      <>
        <Flex flexDirection="column" marginTop="30px">
          <Row>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" justifyContent="center">
                <H3>
                  Hello, from our founder
                </H3>
                <Para>
                  I started
                  {' '}
                  <Anchor href="https://www.coachee.io" primary>
                    coachee.io
                  </Anchor>
                  {' '}
                  after going through
                  <strong> my own journey </strong>
                  with mental health and coaching.
                  When I realised that I needed to let go of my past and understand what I wanted for the future,
                  I looked for help in therapy and counselling,
                  which were incredibly helpful resources,
                  but I still felt that I didn’t understand who I was or have a clear path to follow.
                </Para>
                <Para>
                  That is when I stumbled upon an
                  <strong> amazing coach </strong>
                  that
                  <strong> completely changed my life</strong>
                  .
                  I left my sessions feeling listened to, happier and excited for the future.
                  Throughout this journey, I realised that the process of finding a coach should be
                  {' '}
                  <strong>more informative</strong>
                  ,
                  <strong> transparent</strong>
                  , and
                  {' '}
                  <strong>easier</strong>
                  {' '}
                  than it was for me.
                  Coachee.io makes this possible by connecting you with vetted, certified coaches in a simple to use platform.
                  {' '}
                  <strong>Coaching was the best investment I have ever made</strong>
                  ,
                  and I truly believe you will feel the same at the end of your own journey.
                </Para>
                <Para>
                  - Elisabete Viveiros, Founder and CEO
                </Para>
              </Flex>
            </Col>
            <Col xs={12} md={6}>
              <Flex flexDirection="column" alignItems="center">
                <FounderImage />
              </Flex>
            </Col>
          </Row>
        </Flex>
        <Flex flexDirection="column" marginTop="30px">
          <Row>
            <Col xs={12} md={6}>
              <Para bold>
                What we are here to do
              </Para>
              <Para>
                Our aim is to make it
                {' '}
                <strong>easier and more reliable</strong>
                {' '}
                for you to
                {' '}
                <strong>find your perfect coach</strong>
                {' '}
                - the one that really listens,
                is kind but is also always ready to deliver a strong message when needed.
                Our coaches are
                {' '}
                <strong>experts in their fields</strong>
                {' '}
                and work tirelessly to ensure you achieve the
                {' '}
                <strong>best results</strong>
                {' '}
                possible.
              </Para>
              <Para>
                We work hard to ensure our coaches are not only incredibly professional, but are also certified and experienced.
                {' '}
                <strong>We meet with every single coach</strong>
                {' '}
                before they are approved on the website.
              </Para>
              <Para>
                Providing top notch customer service is absolutely key for us - if you’re not happy, neither are we!
              </Para>
              <Para>
                We’re also a registered UK company (number:
                {' '}
                <strong>12314526</strong>
                ).
              </Para>
              <Para>
                To learn more about us, follow our
                {' '}
                <Anchor href="https://www.instagram.com/coachee.io/" primary>Instagram</Anchor>
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
