import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Image} from '../../../components/Image'
import {RouterButtonLink} from '../../../components/Routing'

import {FlexColCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'

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
  expertise?: string[],
  availability?: any[],
  reviewsRef: any
}

class Content extends PureComponent<Props> {
  render() {
    const {reviewsRef} = this.props
    return (
      <>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H2>
                Certifications
              </H2>
              <SetMargin mt={15}>
                <H3>[Certification Heading]</H3>
                <Para>[Issue Date]</Para>
                <Para>[Credential ID]</Para>
              </SetMargin>
            </Col>
          </Row>
          <Row />
        </SetMargin>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H2>
                Programmes
              </H2>
              <SetMargin mt={15}>
                <Row>
                  <Col xs={12} sm={9}>
                    <H3>[Certification Heading]</H3>
                    <Para>[Issue Date]</Para>
                    <Para>[Credential ID]</Para>
                  </Col>
                  <Col xs={12} sm={3}>
                    <FlexColCenter>
                      <RouterButtonLink to="/booking" primary>
                        Book a call
                      </RouterButtonLink>
                    </FlexColCenter>
                  </Col>
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
            </Col>
          </Row>
        </SetMargin>
        <SetMargin mt={30} ref={reviewsRef}>
          <Row>
            <Col xs={12}>
              <H2>
                Reviews
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
      </>
    )
  }
}

export default Content
