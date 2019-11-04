import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import HeroImage from '../../../components/HeroImage'
import CheckmarkTextList from '../../../components/CheckmarkTextList'

import {H1} from '../../../ui/headings'
import {Para1} from '../../../ui/labels'


const HeroListText = [
  'Improve your relationship with fitness, food and body image',
  'Gain financial awareness and start saving',
  'Find Balance in your life no matter the obstacles',
  'Find out more about who you are and who you want to be!',
]

class Hero extends PureComponent {
  render() {
    return (
      <Row>
        <Col sm={4} md={5}>
          <H1>
            Achieve your goals,
          </H1>
          <H1>
            change your life
          </H1>
          <Para1>
            Coaching is more than a trend, it&apos;s a powerful resource!
            Some of the results you can achieve with our coaches include:
          </Para1>
          <CheckmarkTextList list={HeroListText} />
        </Col>
        <Col sm={8} md={6}>
          <HeroImage />
        </Col>
      </Row>
    )
  }
}

export default Hero
