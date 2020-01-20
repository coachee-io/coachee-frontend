import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'
import HighFiveImg from '../../ui/images/high-five.svg'

import Flex from '../Layout/Flexbox'
import {Image} from '../Image'

const HEIGHT = 350

const HighFiveImage = Image.attrs({
  src: HighFiveImg,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

interface Props {
  heading: string,
  text: string
}

class Confirmation extends PureComponent<Props> {
  render() {
    const {heading, text} = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <H2 textAlign="center">
              {heading}
            </H2>
            <Para textAlign="center">
              {text}
            </Para>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <HighFiveImage />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default Confirmation
