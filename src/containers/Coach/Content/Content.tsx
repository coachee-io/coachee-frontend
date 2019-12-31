import React, {PureComponent, Fragment} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'
import {Image} from '../../../components/Image'
import {RouterButtonLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'

import Auth from '../../../utils/tokens'
import FeatureFlags from '../../../utils/featureFlags'

import {H2, H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'
import Rating from '../../../ui/images/star-rating.svg'

const StarRating = Image.attrs({
  src: Rating,
})`
  height: 24px;
  width: 24px;
`

interface Props {
  certifications?: any[],
  programs?: any[],
  availability?: any[],
  reviews?: any[],
  reviewsRef: any
}

class Content extends PureComponent<Props> {
  render() {
    const {
      reviewsRef, certifications, programs, reviews, availability,
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
                    {`${el.month}/${el.year}`}
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
              {programs && programs.map((el, id) => (
                <Fragment key={`${el}-${id}`}>
                  <Row>
                    <Col xs={12} sm={9}>
                      <H3>{el.name}</H3>
                      <Para>
                        {`${el.sessions} sessions of ${el.duration} minutes`}
                      </Para>
                      <Para>
£
                        {el.totalPrice}
                      </Para>
                    </Col>
                    {Auth.isLoggedIn() && (
                    <Col xs={12} sm={3}>
                      <RouterButtonLink
                        to={{
                          pathname: `/booking/${id}`,
                          state: {
                            programId: id,
                            coachAvailability: availability,
                          },
                        }}
                        primary
                      >
                        Book a call
                      </RouterButtonLink>
                    </Col>
                    )}
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Para>
                        {el.description}
                      </Para>
                    </Col>
                  </Row>
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
