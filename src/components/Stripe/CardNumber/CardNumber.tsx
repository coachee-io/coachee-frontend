import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  CardNumberElement,
} from 'react-stripe-elements'

import {StyledLabel} from '../../Form/styled'

import {style, ElementWrapper} from '../styled'

class CardNumber extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <StyledLabel htmlFor="stripeCardNumber">
              Card number
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ElementWrapper error>
              <CardNumberElement id="stripeCardNumber" style={style} />
            </ElementWrapper>
          </Col>
        </Row>
      </>
    )
  }
}

export default CardNumber
