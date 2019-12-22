import React, { PureComponent } from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class CookieAcceptance extends PureComponent {
  render() {
    return (
      <>
        <H3 id="cookie-acceptance">
          4. Website cookie acceptance
        </H3>
        <Para>
          By clicking ‘don’t show this again’ button when you visited the website you have
          consented to our use of cookies as updated from time to time. In particular,
          you consent to cookies being stored on your computer and/or mobile device
          (unless rejected or disabled by your browser).
        </Para>
      </>
    )
  }
}

export default CookieAcceptance
