import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {UL, LI} from 'ui/list'

class WhatIsCoachee extends PureComponent {
  render() {
    return (
      <>
        <H3 id="what-is-coachee">
          What is coachee.io
        </H3>
        <Para>We currently have coaches dedicated to:</Para>
        <UL>
          <LI>
            <Para>
              Health coaching, including nutrition;
            </Para>
          </LI>
          <LI>
            <Para>
              Life coaching, including femininity;
            </Para>
          </LI>
          <LI>
            <Para>
              Relationship coaching;
            </Para>
          </LI>
          <LI>
            <Para>
              And financial coaching.
            </Para>
          </LI>
        </UL>
        <Para>
          The service is provided by independent providers who work directly with you.
          These providers are not employees of coachee.io and the platform does not oversee them professionally.
        </Para>
      </>
    )
  }
}

export default WhatIsCoachee
