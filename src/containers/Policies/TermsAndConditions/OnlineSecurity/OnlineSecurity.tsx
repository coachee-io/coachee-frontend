import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class OnlineSecurity extends PureComponent {
  render() {
    return (
      <>
<H3 id="online-security">
              9. Online security
            </H3>
            <Para>
              9.1. We put a lot of effort in keeping our Platform secure.
              However, despite all these efforts, we cannot guarantee that our Platform will be absolutely secure,
              free from bugs or viruses,
              so you should use your own virus protection software.
            </Para>
            <Para>
              9.2. We expect our coachees and coaches to respect the security of our Platform and
              so you must not misuse our Platform by knowingly introducing viruses,
              Trojans or other material that is malicious or technologically harmful.
              You must not attempt to gain unauthorised access to our Platform, our servers or database connected to our Platform.
              You must not attack our Platform via a denial-of-service attack or a distributed denial-of-service attack.
              By breaching this provision, you may be committing an offence and
              we may need to report any such breach to the relevant law enforcement authorities including
              by disclosing your identity to them.
              In the event of such a breach, your right to use our online portal will cease immediately.
            </Para>
      </>
    )
  }
}

export default OnlineSecurity