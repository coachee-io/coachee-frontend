import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class UpdatePolicy extends PureComponent {
  render() {
    return (
      <>
        <H3 id="updating-cookie-policy">
          6. Updating our Cookie Policy
        </H3>
        <Para>
          We may update our use of cookies from time to time and consequently, we may update this Cookies Policy.
          We, therefore, recommend that you check this Cookies Policy regularly.
        </Para>
      </>
    )
  }
}

export default UpdatePolicy
