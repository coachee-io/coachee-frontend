import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  CardCvcElement,
} from 'react-stripe-elements'

import {StyledLabel} from '../../../../components/Form/styled'

import {style, ElementWrapper} from '../styled'

class CardCvc extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <StyledLabel htmlFor="stripeCardExpiry">
              CVC
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ElementWrapper error={false}>
              <CardCvcElement style={style} />
            </ElementWrapper>
          </Col>
        </Row>
      </>
    )
  }
}

export default CardCvc
