import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Para} from 'ui/labels'
import Error401ImgPath from 'ui/images/error-unauthorized.svg'

import {RouterButtonLink} from 'components/Routing'

import Flex from 'components/Layout/Flexbox'
import {Image} from 'components/Image'

const HEIGHT = 350

const Error401Image = Image.attrs({
  src: Error401ImgPath,
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
              Sorry but the page you are looking for doesn&apos;t exist.
            </Para>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <RouterButtonLink to="/" primary>
                Back to Home
              </RouterButtonLink>
            </Flex>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <Error401Image />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default NotFound
