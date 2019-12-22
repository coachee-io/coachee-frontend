import React, { PureComponent } from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class SuppliedContent extends PureComponent {
  render() {
    return (
      <>
        <H3 id="content-supplied-by-you">
          5. Content supplied by you
        </H3>
        <Para>
          5.1. Whenever a functionality that allows you to upload content to our Platform,
          you must comply with the content standards set out in this Acceptable Use Policy.
        </Para>
        <Para>
          5.2. Please remember that any content you upload to our Platform will be considered non-confidential and non-proprietary.
          You will retain all of your ownership rights in your content, but you are hereby granting us a licence to use,
          store and copy that content and to distribute and make it available to third parties.
        </Para>
        <Para>
          5.3. We may need to disclose your identity to any third party who is claiming that any
          content posted or uploaded by you to our Platform constitutes a violation of their intellectual property rights,
          or of their right to privacy. We will be very careful
          in relation to any such disclosures and will only do so if we believe that this is required under the applicable laws.
        </Para>
        <Para>
          5.4. We have the right to remove any posting you make on our Platform if,
          in our opinion, your post does not comply with the content standards set out in this Acceptable Use Policy.
        </Para>
      </>
    )
  }
}

export default SuppliedContent
