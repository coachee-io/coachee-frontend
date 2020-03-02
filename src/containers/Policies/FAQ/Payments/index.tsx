import React, { PureComponent } from 'react'

import {Anchor} from '../../../../components/Routing'
import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class Payments extends PureComponent {
  render() {
    return (
      <>
        <H3 id="payments">
          Payments
        </H3>
        <Para bold>
          When will my card be charged?
        </Para>
        <Para>
          The payment for the total price of the coaching programme
          you have selected will be blocked in your card as soon
          as you introduce your details in our website when booking your intro call.
          Your card will then be charged
          {' '}
          <strong>12 hours</strong>
          {' '}
          after your intro call.
        </Para>
        <Para bold>
          Why is the payment blocked before my intro call?
        </Para>
        <Para>
          We need to ensure that your coach will receive their payment if the
          intro call is successful and that your card has sufficient funds to
          cover the price of the programme.
        </Para>
        <Para bold>
          Do I need to pay to use coachee.io?
        </Para>
        <Para>
          If you’re a coachee, you do not need to pay any fees, memberships or
          any other type of payment to use
          {' '}
          <Anchor href="www.coachee.io" primary>coachee.io</Anchor>
          .
          You will need to pay for your selected coaching programme, and
          this amount will be used to pay your coach for their sessions,
          and a small % will be kept by us as payment for the usage of the platform.
        </Para>
      </>
    )
  }
}

export default Payments
