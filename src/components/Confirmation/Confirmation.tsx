import React, {PureComponent, ReactNode} from 'react'
import {Row, Col} from 'react-bootstrap'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

import Flex from '../Layout/Flexbox'

import Illustrations from './Illustrations'

interface Props {
  heading: string,
  text: string,
  buttonComponent?: ReactNode,
  type?: 'redirect' | 'default'
}

class Confirmation extends PureComponent<Props> {
  render() {
    const {
      heading, text, type, buttonComponent,
    } = this.props
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
            {buttonComponent && (
              <Flex flexDirection="row" justifyContent="center" marginTop="30px">
                {buttonComponent}
              </Flex>
            )}
            <Flex flexDirection="row" justifyContent="center" marginTop="30px">
              <Illustrations type={type} />
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default Confirmation
