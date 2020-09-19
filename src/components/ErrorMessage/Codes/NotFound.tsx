import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Para} from 'ui/labels'
import Error404ImgPath from 'ui/images/error-not-found.svg'

import {RouterButtonLink} from 'components/Routing'

import Flex from 'components/Layout/Flexbox'
import {Image} from 'components/Image'

const HEIGHT = 350

const Error404Image = Image.attrs({
  src: Error404ImgPath,
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
              Sorry for the inconvenience.
              {' '}
              <br />
              {' '}
              The page you&apos;re looking for can&apos;t be found.
            </Para>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <RouterButtonLink to="/" primary>
                Back to Home
              </RouterButtonLink>
            </Flex>
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <Error404Image />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default NotFound
