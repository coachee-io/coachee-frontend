import React, {PureComponent} from 'react'

import Flex, {Row, Col} from 'components/Layout/Flexbox'
import {Image} from 'components/Image'

import {H2} from 'ui/headings'
import {Para} from 'ui/labels'

import SuccessImgPath from 'ui/images/high-five.svg'

const HEIGHT = 350

const SuccessImage = Image.attrs({
  src: SuccessImgPath,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

class Success extends PureComponent {
  render() {
    return (
      <>
        <Row marginTop="30px">
          <Col xs={12}>
            <H2 textAlign="center">
              Congratulations for taking this step!
            </H2>
          </Col>
        </Row>
        <Row marginTop="30px">
          <Col xs={12}>
            <Para textAlign="center">
              A confirmation email is on the way and your coach will be in touch soon to confirm your booking!
            </Para>
          </Col>
        </Row>
        <Row marginTop="30px">
          <Col xs={12}>
            <Flex flexDirection="row" justifyContent="center">
              <SuccessImage />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default Success
