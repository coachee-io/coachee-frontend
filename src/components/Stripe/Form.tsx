import React, {PureComponent, ReactNode} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  injectStripe, ReactStripeElements,
} from 'react-stripe-elements'

import CardNumber from './CardNumber'
import CardExpiry from './CardExpiry'
import CardCvc from './CardCvc'

interface Props extends ReactStripeElements.InjectedStripeProps {
  children: (
    stripe: ReactStripeElements.StripeProps | null,
    getElement: (type: ReactStripeElements.TokenType) => ReactStripeElements.HTMLStripeElement | null | undefined
    ) => ReactNode
}

class Form extends PureComponent<Props> {
  getElement = (elementName: ReactStripeElements.TokenType): ReactStripeElements.HTMLStripeElement | null | undefined => {
    const {elements} = this.props
    return elements?.getElement(elementName)
  }

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
        {children(stripe, this.getElement)}
      </>
    )
  }
}

export default injectStripe(Form)
