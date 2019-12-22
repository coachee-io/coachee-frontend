import React, { PureComponent } from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class DisclosureOfInformation extends PureComponent {
  render() {
    return (
      <>
        <H3 id="retention-periods">
          10. Retention periods
        </H3>
        <Para>
          We will only retain your personal information for as long as necessary to fulfil the purposes we collected it for,
          including for the purposes of satisfying any legal, accounting, or reporting requirements.
          To determine the appropriate retention period for personal data, we consider the amount, nature,
          and sensitivity of the personal data,
          the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes
          for which we process your personal data
          and whether we can achieve those purposes through other means, and the applicable legal requirements.
        </Para>
        <Para>
          In some circumstances, we may anonymise your personal information so that it can no longer be associated with you,
          in which case we may use such information without further notice to you.
          Once you are no longer our customer, we will retain and securely destroy your personal
          information in accordance with applicable laws and regulations.
        </Para>
      </>
    )
  }
}

export default DisclosureOfInformation
