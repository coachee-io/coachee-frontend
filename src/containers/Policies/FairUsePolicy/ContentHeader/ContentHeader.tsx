import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <Para>
          (Last updated on the 1st of January 2020)
        </Para>
        <Para bold>
          COACHEE.IO PLATFORM ACCEPTABLE USE POLICY
        </Para>
      </>
    )
  }
}

export default ContentHeader
