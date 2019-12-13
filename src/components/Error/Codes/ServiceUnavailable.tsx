import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Para} from '../../../ui/labels'
import Error500ImgPath from '../../../ui/images/error-service-unavailable.svg'

import {RouterButtonLink} from '../../Routing'

import Flex from '../../Layout/Flexbox'
import {Image} from '../../Image'

const HEIGHT = 350

const Error500Image = Image.attrs({
  src: Error500ImgPath,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

class NotFound extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Para textAlign="center">
              Sorry but our services are unavailable at the moment.
              <br />
              Try again later.
            </Para>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <RouterButtonLink to="/" primary>
                Back to Home
              </RouterButtonLink>
            </Flex>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <Error500Image />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default NotFound
