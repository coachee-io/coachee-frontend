import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class PersonalData extends PureComponent {
  render() {
    return (
      <>
        <H3 id="personal-data">
              12. How we may use your personal data
        </H3>
        <Para>
              12.1. Our Privacy Policy provides information on what personal data we collect,
              how we process it and other important data protection terms, including your rights in respect of your personal data.
        </Para>
      </>
    )
  }
}

export default PersonalData
