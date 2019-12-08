import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'
import {Image} from '../../../components/Image'
import {RouterButtonLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'

import Auth from '../../../utils/auth'
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
  certificates?: any[],
  programmes?: any[],
  reviews?: any[],
  reviewsRef: any
}

class Content extends PureComponent<Props> {
  render() {
    const {
      reviewsRef, certificates, programmes, reviews,
    } = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px">
              <H2>
                {certificates ? 'Certifications' : <Pulse height={24} />}
              </H2>
              {certificates && certificates.map((el) => (
                <>
                  <H3>{el.title}</H3>
                  <Para>{el.date}</Para>
                  <Para>{el.institution}</Para>
                </>
              ))}
              {!certificates && (
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
                {certificates ? 'Programmes' : <Pulse height={24} />}
              </H2>
              {programmes && programmes.map((el) => (
                <>
                  <Row>
                    <Col xs={12} sm={9}>
                      <H3>[Certification Heading]</H3>
                      <Para>[Issue Date]</Para>
                      <Para>[Credential ID]</Para>
                    </Col>
                    {Auth.isLoggedIn() && (
                    <Col xs={12} sm={3}>
                      <RouterButtonLink to="/booking" primary>
                          Book a call
                      </RouterButtonLink>
                    </Col>
                    )}
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Para>
                          Programme Description
                      </Para>
                    </Col>
                  </Row>
                </>
              ))}
              {!programmes && (
                <>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </>
              )}
            </Flex>
          </Col>
        </Row>
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
      </>
    )
  }
}

export default Content
