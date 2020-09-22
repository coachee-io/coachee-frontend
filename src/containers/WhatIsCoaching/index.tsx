import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import Flex from 'components/Layout/Flexbox'
import CheckmarkList from 'components/CheckmarkList'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {Anchor} from 'components/Routing'

import {
  LaptopRemoteImage,
  FeelingsOfJoyImage,
} from './images'

import {
  benefits, questions, coachingAndCounselling, coachingProcess,
} from './bullet-points'

class WhatIsCoaching extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" marginTop="30px">
        <Row>
          <Col xs={12} md={6}>
            <Flex flexDirection="column">
              <H3>
                What is coaching?
              </H3>
              <Para>
                In its simplest form, coaching is having an expert you can talk to that will
                {' '}
                <strong>listen, probe, challenge and motivate</strong>
                {' '}
                you to overcome any obstacles you are facing and support you in achieving your goals
                in non-judgemental setting. Your coach will very likely have gone through a very similar
                journey to the one you’re on, and they can use
                {' '}
                <strong>their past experience and qualifications</strong>
                {' '}
                to guide you to think about your life or a particular situation in a different way.
              </Para>
              <Para>
                Coaching might seem to some as just a trend, but in reality coaching has been around for decades, if not centuries.
                Executive coaching, for example, is a particular tool that has been used by leaders of companies for a long time,
                and has helped many directors and CEOs achieve a better work-life balance,
                reach their goals and ambitions and create impactful results for their organisations.
              </Para>
              <Para>
                The best coaches
                {' '}
                <strong>will not dictate what your end point looks like, and will not judge your starting point either</strong>
                . It’s up to you to decide to move on from where you are right now and
                think through what you would like to achieve at the end, always with the guidance of your coach.
              </Para>
            </Flex>
          </Col>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
              <LaptopRemoteImage />
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" marginTop="30px">
              <H3>
                How will coaching benefit me?
              </H3>
              <Para>
                The main goal in coaching is always to
                {' '}
                <strong>get you from your current starting point to wherever you want to be</strong>
                , through talking, listening and focusing on your strengths.
              </Para>
              <Para>
                No matter what you want to achieve,
                {' '}
                <strong>investing</strong>
                {' '}
                in your personal and/or professional development will help you to see your life in a different perspective, improve your
                {' '}
                <strong>confidence</strong>
                , your
                {' '}
                <strong>self-esteem</strong>
                {' '}
                and your
                {' '}
                <strong>relationship with yourself and others</strong>
                .
              </Para>
              <Para bold>
                Other benefits include:
              </Para>
              <CheckmarkList list={benefits} withCheckmark />
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" marginTop="30px">
              <H3>
                How do I know if coaching is right for me?
              </H3>
              <Para bold>
                Think about these questions:
              </Para>
              <CheckmarkList list={questions} withCheckmark />
              <Para>
                If the answer to most of the above is yes, coaching will be the
                {' '}
                <strong>best investment</strong>
                {' '}
                you could ever make.
              </Para>
              <Para>
                If you’re unsure, but you think coaching can help you, you can book a free introductory call with
                {' '}
                <Anchor href="/coaches" primary>any of our coaches</Anchor>
                ,
                and they will explain their programmes, methodology and process in more detail.
              </Para>
            </Flex>
          </Col>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
              <FeelingsOfJoyImage />
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" marginTop="30px">
              <H3>
                What is the difference between coaching and counselling?
              </H3>
              <Para>
                If you’re struggling with a
                {' '}
                <Anchor href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/" primary>
                  mental health condition
                </Anchor>
                , it’s important that you see someone who is qualified to help you, like your GP,
                counsellor, psychotherapist or psychiatrist. In general:
              </Para>
              <CheckmarkList list={coachingAndCounselling} withCheckmark />
              <Para>
                <strong>Coaching should never replace psychological or psychiatric therapy</strong>
                . If you are suffering from suicidal thoughts or have been diagnosed with acute depression or anxiety,
                coaching will not be for you.
                If that’s the case and you don’t know where to start, we highly recommend checking out the
                {' '}
                <Anchor href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/" primary>Mind</Anchor>
                {' '}
                website. When in doubt, always seek medical advice and
                {' '}
                <strong>never give up</strong>
                {' '}
                - we all have the right to improve our mental health and never be judged by doing so. Most of all, you’re not alone.
              </Para>
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Flex flexDirection="column" marginTop="30px">
              <H3>
                What does a coaching process look like?
              </H3>
              <CheckmarkList list={coachingProcess} withCheckmark />
            </Flex>
            <Flex flexDirection="column" marginTop="30px">
              <H3>
                How do I know which type of coaching is best for me?
              </H3>
              <Para>
                <Anchor
                  href="https://blog.coachee.io/2020/08/18/the-difference-between-life-health-career-and-other-coaching-areas/"
                  primary
                >
                  Read our blog post
                </Anchor>
                {' '}
                on the difference between all of our coaching categories.
              </Para>
              <Para bold>
                All our coaches offer a free introductory call where you can meet and decide if they’re right for you.
              </Para>
              <Para textAlign="center">
                <Anchor href="/coaches" primary>
                  Browse all coaches
                </Anchor>
              </Para>
            </Flex>
          </Col>
        </Row>
      </Flex>
    )
  }
}

export default WhatIsCoaching
