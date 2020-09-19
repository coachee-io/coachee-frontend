import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class DisclosureOfInformation extends PureComponent {
  render() {
    return (
      <>
        <H3 id="transfer-of-information-eea">
          9. Transfer of your information out of EEA
        </H3>
        <Para>
          We may need to transfer your personal data outside the European Economic Area (EEA),
          for example, if one of our suppliers or group companies is located outside the EEA.
          We will ensure that any transfer of your data will be subject to appropriate safeguards,
          such as a European Commission approved contract (if appropriate) that will ensure you have
          appropriate remedies in the unlikely event of a security breach.
        </Para>
      </>
    )
  }
}

export default DisclosureOfInformation
