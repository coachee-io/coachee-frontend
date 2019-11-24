import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

import {Image} from '../../../components/Image'
import {RouterLink} from '../../../components/Routing'

import {FlexColAlignCenter, FlexColCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'

import {H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import Rating from '../../../ui/images/star-rating.svg'
import HealthImg from '../../../ui/images/health-category.png'


const rating = 5

const CoachImage = Image.attrs({
  src: HealthImg,
})`
  height: 170px;
  width: 170px;
  border-radius: 50%;
`

const StarRating = Image.attrs({
  src: Rating,
})`
  height: 24px;
  width: 24px;
`

interface Props {
  scrollToReviews: () => void
}

class Header extends PureComponent<Props> {
  render() {
    const {scrollToReviews} = this.props
    return (
      <Row>
        <Col xs={12} md={3}>
          <FlexColAlignCenter>
            <CoachImage />
            <SetMargin mt={15}>
              <H3>
                Jennifer
              </H3>
            </SetMargin>
            <Para textAlign="center">
              Life and Career Coach
            </Para>
            <Para textAlign="center">
              London, United Kingdom
            </Para>
            <Para textAlign="center">
              VAT No.: 123123123123
            </Para>
            <Para>
              {Array(rating).fill(Math.random(), 0, 5).map((el) => <StarRating key={el} />)}
            </Para>
            <RouterLink to="#reviews" onClick={scrollToReviews} primary>
              14 Reviews
            </RouterLink>
          </FlexColAlignCenter>
        </Col>
        <Col xs={12} md={9}>
          <FlexColCenter>
            <Para>
              Quote Goes Here
            </Para>
          </FlexColCenter>
        </Col>
      </Row>
    )
  }
}

export default Header
