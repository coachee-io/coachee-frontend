import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class PlatformChanges extends PureComponent {
  render() {
    return (
      <>
        <H3 id="platform-changes">
              3. We may make changes
        </H3>
        <Para>
              3.1. We amend these terms from time to time, so please check them occasionally.
              For example, we may change them to reflect changes in relevant laws and regulations.
        </Para>
        <Para>
              3.2. We may also update and change the Platform from time to time to update its functionality,
              to add new products, coaches and coaching programmes, and/or to address our coach or coachee needs.
        </Para>
        <Para>
              3.3. We will notify you of any significant changes and/or any changes that require any action from you.
              If you do not agree to any changes, you should stop using the Platform.
        </Para>
      </>
    )
  }
}

export default PlatformChanges
