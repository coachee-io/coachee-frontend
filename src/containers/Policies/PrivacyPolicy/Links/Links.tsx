import React, { PureComponent } from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class Links extends PureComponent {
  render() {
    return (
      <>
        <H3 id="links">
          6. Links
        </H3>
        <Para>
          The Website main contains links to other websites. Please be aware that we are not responsible
          or liable for the privacy practices of other websites.
          We encourage you to be aware when you leave the Website and to read the privacy policies
          of each and every website that collects personally identifiable information.
          This privacy policy applies solely to information collected by us on the Website.
        </Para>
      </>
    )
  }
}

export default Links
