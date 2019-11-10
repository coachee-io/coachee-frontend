import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Para} from '../../ui/labels'
import Error404ImgPath from '../../ui/images/404.svg'

import RouterButtonLink from '../../components/Routing/RouterButtonLink'
import VerticalMargin from '../../components/Layout/VerticalMargin'
import {FlexColAlignCenter} from '../../components/Layout/Flexbox'
import {Image} from '../../components/Image'

const HEIGHT = 350

const Error404Image = Image.attrs({
  src: Error404ImgPath,
})`
  height: auto;
  max-width: 100%;
  max-height: ${HEIGHT}px;
`

class Error404 extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <FlexColAlignCenter>
              <VerticalMargin mt={30}>
                <Para textAlign="center">
              Sorry for the inconvenience.
                  {' '}
                  <br />
                  {' '}
The page you&apos;re looking for can&apos;t be found.
                </Para>
              </VerticalMargin>
              <VerticalMargin mt={30}>
                <RouterButtonLink to="/" primary>
                  Back to Home
                </RouterButtonLink>
              </VerticalMargin>
              <VerticalMargin mt={30}>
                <Error404Image />
              </VerticalMargin>
            </FlexColAlignCenter>
          </Col>
        </Row>
      </>
    )
  }
}

export default Error404
