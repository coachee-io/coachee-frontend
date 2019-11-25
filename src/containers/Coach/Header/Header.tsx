import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Image} from '../../../components/Image'
import {RouterLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'

import {FlexColAlignCenter, FlexColCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'

import {H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import MediaQuery from '../../../components/Layout/MediaQuery'

import Rating from '../../../ui/images/star-rating.svg'

const CoachImage = Image`
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
  scrollToReviews: () => void,
  firstName: string,
  lastName: string,
  city: string,
  country: string,
  vatNo: number,
  description: string,
  shortDescription: string,
  averageReviews: number,
  numberOfReviews: number,
  pictureUrl: string
}

class Header extends PureComponent<Props> {
  render() {
    const {
      scrollToReviews,
      firstName,
      lastName,
      city,
      country,
      vatNo,
      shortDescription,
      description,
      averageReviews,
      numberOfReviews,
      pictureUrl,
    } = this.props
    return (
      <Row>
        <Col xs={12} md={3}>
          <FlexColAlignCenter>
            {pictureUrl ? <CoachImage src={pictureUrl} /> : <Pulse circle height={170} width={170} />}
            <SetMargin mt={15}>
              <H3>
                {firstName && lastName ? `${firstName} ${lastName}` : <Pulse height={18} width={150} />}
              </H3>
            </SetMargin>
            <Para textAlign="center">
              {shortDescription || <Pulse height={18} width={150} />}
            </Para>
            <Para textAlign="center">
              {city && country ? `${city}, ${country}` : <Pulse height={18} width={150} />}
            </Para>
            <Para textAlign="center">
              {vatNo ? `VAT No.: ${vatNo}` : <Pulse height={18} width={150} />}
            </Para>
            <Para>
              {averageReviews ? (
                Array(averageReviews).fill(Math.random(), 0, averageReviews).map((el) => <StarRating key={el} />)
              ) : <Pulse height={18} width={150} />}
            </Para>
            {numberOfReviews ? (
              <RouterLink to="#reviews" onClick={scrollToReviews} primary>
                {numberOfReviews}
                {' '}
                Reviews
              </RouterLink>
            ) : (
              <Pulse height={18} width={150} />
            )}

          </FlexColAlignCenter>
        </Col>
        <Col xs={12} md={9}>
          <MediaQuery>
            {(isMobile) => (
              <SetMargin mt={isMobile ? 30 : 0}>
                {description ? (
                  <FlexColCenter>
                    <Para breakAll>
                      {description}
                    </Para>
                  </FlexColCenter>
                ) : (
                  <>
                    <Para>
                      <Pulse height={18} />
                    </Para>
                    <Para>
                      <Pulse height={18} width={250} />
                    </Para>
                    <Para>
                      <Pulse height={18} width={250} />
                    </Para>
                    <Para>
                      <Pulse height={18} width={200} />
                    </Para>
                  </>
                )}
              </SetMargin>
            )}
          </MediaQuery>
        </Col>
      </Row>
    )
  }
}

export default Header
