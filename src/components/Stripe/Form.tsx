import React, {PureComponent, ReactNode} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  injectStripe, ReactStripeElements,
} from 'react-stripe-elements'

import CardNumber from './CardNumber'
import CardExpiry from './CardExpiry'
import CardCvc from './CardCvc'

interface Props extends ReactStripeElements.InjectedStripeProps {
  children: (stripe?: ReactStripeElements.StripeProps) => ReactNode
}

class Form extends PureComponent<Props> {
  render() {
    const {stripe, children} = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <CardNumber />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <CardExpiry />
          </Col>
          <Col xs={12} sm={6}>
            <CardCvc />
          </Col>
        </Row>
        {children(stripe)}
      </>
    )
  }
}

export default injectStripe(Form)
