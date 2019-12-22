import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI} from '../../../../ui/list'

class IfThingsGoWrong extends PureComponent {
  render() {
    return (
      <>
        <H3 id="things-go-wrong">
              11. If things go wrong
        </H3>
        <Para>
              11.1. If you have any issues relating to the use of our Platform, your coach, and/or in relation to the payments,
              please let us know via email on admin@coachee.io.
              If the matter is within our power, we will try to resolve your issues quickly and efficiently.
              We will contact the relevant coach if your issues relate to their services and will try and
              help you resolve any issues you may have with them.
        </Para>
        <Para>
                11.2. When we reasonably believe that you have not followed these Terms,
                we may take such action as we deem appropriate, including:
        </Para>
        <UL>
          <LI>
            <Para>
                  Immediate, temporary or permanent withdrawal of your right to use our Platform;
            </Para>
          </LI>
          <LI>
            <Para>
                legal proceedings against you, including for reimbursement of all costs
                (including, but not limited to, reasonable administrative and legal costs) resulting from your breach; and/or
            </Para>
          </LI>
          <LI>
            <Para>
                  disclosure of such information to law enforcement authorities, as we reasonably feel is necessary or as required by law.
            </Para>
          </LI>
        </UL>
      </>
    )
  }
}

export default IfThingsGoWrong
