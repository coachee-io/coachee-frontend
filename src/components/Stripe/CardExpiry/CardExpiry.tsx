import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  CardExpiryElement,
} from 'react-stripe-elements'

import {StyledLabel} from '../../Form/styled'

import {style, ElementWrapper} from '../styled'

class CardExpiry extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <StyledLabel htmlFor="stripeCardExpiry">
              Exp. date
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ElementWrapper error>
              <CardExpiryElement id="stripeCardExpiry" style={style} />
            </ElementWrapper>
          </Col>
        </Row>
      </>
    )
  }
}

export default CardExpiry
