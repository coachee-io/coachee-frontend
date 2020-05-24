import React, {PureComponent, Fragment} from 'react'
import {Row, Col} from 'react-bootstrap'

import MediaQuery from '../../../components/Layout/MediaQuery'
import Flex from '../../../components/Layout/Flexbox'
import {Image} from '../../../components/Image'
import {RouterButtonLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'

import Auth from '../../../utils/tokens'
import FeatureFlags from '../../../utils/featureFlags'
import {formatNumber} from '../../../utils/formatNumber'

import {H2, H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'
import Rating from '../../../ui/images/star-rating.svg'

import Parser from '../Parser'

import {isMonthPlural} from './helpers'


const StarRating = Image.attrs({
  src: Rating,
})`
  height: 24px;
  width: 24px;
`

interface Props {
  coach: any,
  certifications?: any[],
  programs?: any[],
  availability?: any[],
  reviews?: any[],
  reviewsRef: any
}

class Content extends PureComponent<Props> {
  handleRedirect = (program: any) => {
    const {availability, coach} = this.props
    if (Auth.isLoggedIn()) {
      return {
        pathname: `/booking/${program.id}`,
        state: {
          coach,
          program,
          coachAvailability: availability,
        },
      }
    }

    return {
      pathname: '/login',
    }
  }

  render() {
    const {
      reviewsRef,
      certifications,
      programs,
      reviews,
    } = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px">
              <H2>
                {certifications ? 'Certifications' : <Pulse height={24} />}
              </H2>
              {certifications && certifications.map((el, id) => (
                <Fragment key={`${el}-${id}`}>
                  <H3>{el.title}</H3>
                  <Para>
                    <b>Since:</b>
                    {' '}
                    {`${isMonthPlural(el.month)}/${el.year}`}
                  </Para>
                  <Para>{el.institution}</Para>
                </Fragment>
              ))}
              {!certifications && (
                <>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </>
              )}
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px">
              <H2>
                {programs ? 'Programmes' : <Pulse height={24} />}
              </H2>
              {programs && programs.map((program, index) => (
                <Fragment key={`$${program.id}-${index}`}>
                  <Row>
                    <Col xs={12} sm={8}>
                      <H3>{program.name}</H3>
                      <Para>
                        {`${program.sessions} sessions of ${program.duration} minutes`}
                      </Para>
                      <Para>
                        {`£${formatNumber(program.totalPrice)}`}
                      </Para>
                    </Col>
                    <MediaQuery>
                      {({isDesktop}) => isDesktop() && (
                      <Col xs={12} sm={4}>
                        <RouterButtonLink
                          to={() => this.handleRedirect(program)}
                          primary
                        >
                          Book a Call
                        </RouterButtonLink>
                      </Col>
                      )}
                    </MediaQuery>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Para>
                        {Parser(program.description) || program.description}
                      </Para>
                    </Col>
                  </Row>
                  <MediaQuery>
                    {({isDesktop}) => !isDesktop() && (
                      <Flex flexDirection="row" marginTop="15px">
                        <RouterButtonLink
                          to={() => this.handleRedirect(program)}
                          primary
                        >
                          Book a Call
                        </RouterButtonLink>
                      </Flex>
                    )}
                  </MediaQuery>
                </Fragment>
              ))}
              {!programs && (
                <>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </>
              )}
            </Flex>
          </Col>
        </Row>
        {FeatureFlags.isFeatureEnabled('reviewsEnabled') && (
          <div ref={reviewsRef}>
            <Row>
              <Col xs={12}>
                <Flex flexDirection="column" marginTop="30px">
                  <H2>
                    {reviews ? 'Reviews' : <Pulse height={24} />}
                  </H2>
                  <StarRating />
                  <Flex flexDirection="column" marginTop="15px">
                    <H3>[Review Heading]</H3>
                    <Para>[Review Text]</Para>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </div>
        )}
      </>
    )
  }
}

export default Content
