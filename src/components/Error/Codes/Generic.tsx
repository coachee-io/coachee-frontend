import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Para} from '../../../ui/labels'
import ErrorWarningImgPath from '../../../ui/images/error-warning.svg'

import {RouterButtonLink} from '../../Routing'

import Flex from '../../Layout/Flexbox'
import {Image} from '../../Image'

const HEIGHT = 350

const ErrorWarningImage = Image.attrs({
  src: ErrorWarningImgPath,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

class GenericError extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Para textAlign="center">
              Sorry, something went wrong.
              <br />
              Try again later.
            </Para>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <RouterButtonLink to="/" primary>
                Back to Home
              </RouterButtonLink>
            </Flex>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <ErrorWarningImage />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default GenericError
