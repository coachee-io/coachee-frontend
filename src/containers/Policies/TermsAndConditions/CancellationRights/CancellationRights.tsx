import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <H3 id="cancellation-rights">
              7. Cancellation rights
        </H3>
        <Para>
              7.1. We will not charge you until 12 hours after your intro call,
              and you have until this time to let us know you would like to cancel your booking if you change your mind.
              Refunds will not be accepted after this time.
        </Para>
      </>
    )
  }
}

export default ContentHeader
