import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class Refunds extends PureComponent {
  render() {
    return (
      <>
        <H3 id="refunds">
          Refunds
        </H3>
        <Para bold>
          I would like a refund, how does it work?
        </Para>
        <Para>
          You have until 12 hours past your intro call to inform us via
          {' '}
          <strong>admin@coachee.io</strong>
          {' '}
          that you wish to cancel the booking of your coaching programme.
          After you do so, we will confirm via email the refund and will process the
          refund within 7 days.
        </Para>
      </>
    )
  }
}

export default Refunds
