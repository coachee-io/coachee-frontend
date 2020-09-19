import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class DataSecure extends PureComponent {
  render() {
    return (
      <>
        <H3 id="data-secure">
          8. Keeping your data secure
        </H3>
        <Para>
          We have put in place appropriate security measures to prevent your personal information from being accidentally lost,
          used or accessed in an unauthorised way, altered or disclosed.
          In addition, we limit access to your personal information to those employees, agents,
          contractors and other third parties who have a business need to know.
          They will only process your personal information on our instructions and they are subject to a duty of confidentiality.
        </Para>
        <Para>
          While we will use all reasonable efforts to safeguard your personal data,
          you acknowledge that the use of the internet is not entirely secure and for this reason,
          we cannot guarantee the security or integrity of any personal data that are transferred via the internet.
          If you have any particular concerns about your information, please contact us (see our contact details below).
        </Para>
        <Para>
          We have put in place procedures to deal with any suspected data security breach and will
          notify you and any applicable regulator of a suspected breach where we are legally required to do so.
        </Para>
      </>
    )
  }
}

export default DataSecure
