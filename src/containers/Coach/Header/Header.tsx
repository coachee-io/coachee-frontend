import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'

import {Image} from '../../../components/Image'
import {RouterLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'

import FeatureFlags from '../../../utils/featureFlags'

import {H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

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
  pictureUrl: string | undefined
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
        <Col xs={12} md={4}>
          <Flex flexDirection="column" alignItems="center">
            {pictureUrl ? <CoachImage src={pictureUrl} /> : <Pulse circle height={170} width={170} />}
            <Flex marginTop="15px">
              <H3>
                {firstName && lastName ? `${firstName} ${lastName}` : <Pulse height={18} width={150} />}
              </H3>
            </Flex>
            {/* <Para textAlign="center">
              {shortDescription || <Pulse height={18} width={150} />}
            </Para> */}
            <Para textAlign="center">
              {city && country ? `${city}, ${country}` : <Pulse height={18} width={150} />}
            </Para>
            {/* <Para textAlign="center">
              {vatNo ? `VAT No.: ${vatNo}` : <Pulse height={18} width={150} />}
            </Para> */}
            {FeatureFlags.isFeatureEnabled('reviewsEnabled') && (
              <>
                <Para>
                  {averageReviews ? (
                    Array(averageReviews).fill(Math.random(), 0, averageReviews).map((el) => <StarRating key={el} />)
                  ) : <Pulse height={18} width={150} />}
                </Para>
                {numberOfReviews ? (
                  <RouterLink to="#reviews" onClick={scrollToReviews} primary>
                    {`${numberOfReviews} Reviews`}
                  </RouterLink>
                ) : (
                  <Pulse height={18} width={150} />
                )}
              </>
            )}
          </Flex>
        </Col>
        <Col xs={12} md={8}>
          {description ? (
            <>
              <Para breakAll>
                {description}
              </Para>
            </>
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
        </Col>
      </Row>
    )
  }
}

export default Header
