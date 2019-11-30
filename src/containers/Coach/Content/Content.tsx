import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Image} from '../../../components/Image'
import {RouterButtonLink} from '../../../components/Routing'

import {FlexColCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'
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
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H2>
                {certificates ? 'Certifications' : <Pulse height={24} />}
              </H2>
              {certificates && certificates.map((el) => (
                <SetMargin mt={15} key={el.id}>
                  <H3>{el.title}</H3>
                  <Para>{el.date}</Para>
                  <Para>{el.institution}</Para>
                </SetMargin>
              ))}
              {!certificates && (
                <SetMargin mt={15}>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </SetMargin>
              )}
            </Col>
          </Row>
          <Row />
        </SetMargin>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H2>
                {certificates ? 'Programmes' : <Pulse height={24} />}
              </H2>
              {programmes && programmes.map((el) => (
                <SetMargin mt={15} key={el.id}>
                  <Row>
                    <Col xs={12} sm={9}>
                      <H3>[Certification Heading]</H3>
                      <Para>[Issue Date]</Para>
                      <Para>[Credential ID]</Para>
                    </Col>
                    {Auth.isLoggedIn() && (
                      <Col xs={12} sm={3}>
                        <FlexColCenter>
                          <RouterButtonLink to="/booking" primary>
                          Book a call
                          </RouterButtonLink>
                        </FlexColCenter>
                      </Col>
                    )}
                  </Row>
                  <SetMargin mt={15}>
                    <Row>
                      <Col xs={12}>
                        <Para>
                          Programme Description
                        </Para>
                      </Col>
                    </Row>
                  </SetMargin>
                </SetMargin>
              ))}
              {!programmes && (
                <SetMargin mt={15}>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </SetMargin>
              )}
            </Col>
          </Row>
        </SetMargin>
        {FeatureFlags.isFeatureEnabled('reviewsEnabled') && reviews && (
          <SetMargin mt={30} ref={reviewsRef}>
            <Row>
              <Col xs={12}>
                <H2>
                  {reviews ? 'Reviews' : <Pulse height={24} />}
                </H2>
                <SetMargin mt={15}>
                  <StarRating />
                  <SetMargin mt={15}>
                    <H3>[Review Heading]</H3>
                  </SetMargin>
                  <Para>[Review Text]</Para>
                </SetMargin>
              </Col>
            </Row>
          </SetMargin>
        )}
      </>
    )
  }
}

export default Content
