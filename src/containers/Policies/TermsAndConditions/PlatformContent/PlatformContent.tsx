import React, {PureComponent} from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class PlatformContent extends PureComponent {
  render() {
    return (
      <>
        <H3 id="platform-content">
          9. Platform content
        </H3>
        <Para>
          9.1. The content on our Platform is provided for general information only.
          It is not intended to amount to advice on which you should rely.
          Although we try to update the information published on our Platform,
          we make no representations, warranties or guarantees, whether express or implied,
          that the content on our Portal is accurate, complete or up to date.
        </Para>
      </>
    )
  }
}

export default PlatformContent
