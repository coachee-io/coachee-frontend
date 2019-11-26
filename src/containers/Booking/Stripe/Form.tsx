import React, {PureComponent} from 'react'
import {injectStripe, CardElement} from 'react-stripe-elements'

interface Props {
  stripe?: any
}

class Form extends PureComponent<Props> {
  render() {
    const {stripe} = this.props
    console.log(stripe)
    return (
      <div>
        Stripe Form
      </div>
    )
  }
}

export default injectStripe(Form)
