import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import CheckmarkTextList from '../../../components/CheckmarkTextList'
import SectionRow from '../../../components/SectionRow'

import {H1} from '../../../ui/headings'
import {Para} from '../../../ui/labels'

import HeroImage from './Image'

const HeroListText = [
  'Improve your relationship with fitness, food and body image',
  'Gain financial awareness and start saving',
  'Find Balance in your life no matter the obstacles',
  'Find out more about who you are and who you want to be!',
]

class Hero extends PureComponent {
  render() {
    return (
      <SectionRow>
        <Col sm={4} md={5}>
          <H1>
            Achieve your goals,
          </H1>
          <H1>
            change your life
          </H1>
          <Para large>
            Coaching is more than a trend, it&apos;s a powerful resource!
            Some of the results you can achieve with our coaches include:
          </Para>
          <CheckmarkTextList list={HeroListText} />
        </Col>
        <Col sm={8} md={6}>
          <HeroImage />
        </Col>
      </SectionRow>
    )
  }
}

export default Hero
