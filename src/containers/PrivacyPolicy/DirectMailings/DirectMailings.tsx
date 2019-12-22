import React, { PureComponent } from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class DirectMailings extends PureComponent {
  render() {
    return (
      <>
        <H3 id="direct-mailings">
          7. Direct mailings
        </H3>
        <Para>
          We may occasionally send out newsletters, offers or alerts to our members and other business contacts.
          We may also wish to provide you with information about special features of our
          Website or any other service or products we think may be of interest to you.
        </Para>
        <Para>
          Where required by the Data Protection Laws (for example, if you have provided your personal contact information)
          we will send you such information only if you have specifically elected to receive it.
          You can opt-out from receiving such communications at any time – please see “Your rights” section below.
          From time to time the Website may request information from you via surveys or contests.
          Participation in these surveys or contests is completely voluntary and you, therefore,
          have a choice whether or not to disclose this information.
          Information requested may include contact information (such as name and shipping address),
          and demographic information (such as postcode or age level).
          Contact information will be used to notify the winners and award prizes.
          Survey information will be used for purposes of monitoring or improving the use of and satisfaction with this Website.
        </Para>
      </>
    )
  }
}

export default DirectMailings
