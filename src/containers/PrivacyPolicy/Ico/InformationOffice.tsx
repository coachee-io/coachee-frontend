import React, { PureComponent } from 'react'

import {Anchor} from '../../../components/Routing'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class InformationOffice extends PureComponent {
  render() {
    return (
      <>
        <H3 id="ico">
          12. Contact us or the ICO
        </H3>
        <Para>
          If you have any concerns or complaints about our privacy activities, you can contact us on admin@coachee.io.
          You can also contact the Information Commissioner’s Office on 0303 123 1113.
        </Para>
        <Para>
          For more details about your rights under the Act,
          the rules we have to adhere to in collecting and storing your information,
          and how you can check your data records, please visit
          {' '}
          <Anchor href="https://www.gov.uk/data-protection/the-data-protection-act" primary>
            https://www.gov.uk/data-protection/the-data-protection-act
          </Anchor>
          {' '}
.
        </Para>
      </>
    )
  }
}

export default InformationOffice
