import React, {PureComponent} from 'react'

import {Anchor} from '../../../../components/Routing'
import {Para} from '../../../../ui/labels'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <Para>
          (Last updated on the 1st of January 2020)
        </Para>
        <Para bold>
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY
        </Para>
        <Para>
          <Anchor href="https://www.coachee.io" primary>Coachee.io</Anchor>
          {' '}
          brings together coaches and coachees under one single Platform.
          Coaches have their own profiles and programs available, with full autonomy over the prices they charge,
          the hours they work and when they are available and whether they accept or decline a client (coachee).
          Coachees have access to a wealth of information on possible coaches,
          and can book intro calls to check compatibility before payment.
          If you’re a coachee (client), you do not need to pay to use our platform,
          but you do need to have the necessary funds in the card you provide at the checkout to cover
          the price of the coaching program you have booked.
          If you’re a coach, you do not need to pay to use our platform and advertise your services,
          but we will take a 15% fee of the total cost of your booking, only after the program has been accepted and
          paid by the coachee (client) after the intro call. This is clearly indicated across the Platform.
          Our Platform is available via our Website at
          {' '}
          <Anchor href="https://www.coachee.io" primary>www.coachee.io</Anchor>
        </Para>
      </>
    )
  }
}

export default ContentHeader
