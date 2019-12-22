import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class LastButNotLeast extends PureComponent {
  render() {
    return (
      <>
        <H3 id="last-but-not-least">
              13. Last but not least
        </H3>
        <Para>
              13.1. We may transfer our rights and obligations under these Terms to another organisation,
              for example, if our business is transferred or merged with another company.
        </Para>
        <Para>
              13.2. These Terms are between you and us. No other person shall have any rights to enforce any of these Terms.
        </Para>
        <Para>
              13.3. Each of the paragraphs of these Terms operates separately.
              If any court or relevant authority decides that any of them are unlawful,
              the remaining paragraphs will remain in full force and effect.
        </Para>
        <Para>
              13.4. These Terms are governed by English law and you can bring legal proceedings against us in the English courts.
              If you live in Scotland you can bring legal proceedings in either the Scottish or the English courts.
              If you live in Northern Ireland you can bring legal proceedings in either the Northern Irish or the English courts.
        </Para>
      </>
    )
  }
}

export default LastButNotLeast
