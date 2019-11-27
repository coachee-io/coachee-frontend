import React, {PureComponent, ReactNode} from 'react'
import {injectStripe, ReactStripeElements} from 'react-stripe-elements'

interface Props extends ReactStripeElements.InjectedStripeProps {
  children: (stripe?: ReactStripeElements.StripeProps) => ReactNode
}

class Form extends PureComponent<Props> {
  render() {
    const {stripe, children} = this.props
    return (
      <div>
        {children(stripe)}
      </div>
    )
  }
}

export default injectStripe(Form)
