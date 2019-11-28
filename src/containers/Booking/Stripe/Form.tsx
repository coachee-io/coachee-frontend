import React, {PureComponent, ReactNode} from 'react'
import {
  injectStripe, ReactStripeElements, CardCvcElement, CardExpiryElement, CardNumberElement,
} from 'react-stripe-elements'

interface Props extends ReactStripeElements.InjectedStripeProps {
  children: (stripe?: ReactStripeElements.StripeProps) => ReactNode
}

class Form extends PureComponent<Props> {
  render() {
    const {stripe, children} = this.props
    return (
      <>
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
        {children(stripe)}
      </>
    )
  }
}

export default injectStripe(Form)
