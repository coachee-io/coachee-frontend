import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

import Flex from '../../../../components/Layout/Flexbox'

import CheckMarkList from '../../../../components/CheckmarkList'
import {RouterButtonLink} from '../../../../components/Routing'

import {H2} from '../../../../ui/headings'
import {Para} from '../../../../ui/labels'

const ListWrapper = styled.div`
  width: 100%;
  max-width: 410px;
`

const CoachList = [
  {
    text: "You'll be asked to provide proof of your certification(s)",
    heading: 'Register for free',
  },
  {
    text: "We'll include all details in your profile. To ensure impactful results, we accept programmes with at least 4 sessions.",
    heading: 'Tell us about your programme',
  },
  {
    text: "You'll have total freedom of confirming bookings with your clients and reschedule if anything happens.",
    heading: 'Manage your bookings',
  },
  {
    text: 'You decide the price of your programme and we take a 15% flat fee - no other hidden costs.',
    heading: 'Change the world one session at a time!',
  },
]

class CoachSignup extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <H2 textAlign="center">
                 Why work with us?
            </H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <H2 textAlign="center">
              Flexible
            </H2>
            <Para textAlign="center">
              We provide a platform to market your programs while you stay on top
              of availability and pricing.
            </Para>
          </Col>
          <Col xs={12} sm={4}>
            <H2 textAlign="center">
              Simple
            </H2>
            <Para textAlign="center">
              We make it simple for any coachee to find you by creating your
              own profile with clear descriptions.
            </Para>
          </Col>
          <Col xs={12} sm={4}>
            <H2 textAlign="center">
              Secure
            </H2>
            <Para textAlign="center">
              Payments will be made up to 72 hours after each completed session.
              We only get paid if you do.
            </Para>
          </Col>
        </Row>
        <Flex flexDirection="row" justifyContent="center" marginTop="30px">
          <Col xs={12}>
            <H2 textAlign="center">
              Your next client is 4 steps away
            </H2>
          </Col>
        </Flex>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <ListWrapper>
                <CheckMarkList list={CoachList} paraSmall withCheckmark />
              </ListWrapper>
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
              <RouterButtonLink to="/become-a-coach/register" primary>
                Register now
              </RouterButtonLink>
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default CoachSignup
