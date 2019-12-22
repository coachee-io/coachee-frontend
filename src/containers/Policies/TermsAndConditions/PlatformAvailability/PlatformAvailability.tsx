import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class PlatformAvailability extends PureComponent {
  render() {
    return (
      <>
        <H3 id="platform-availability">
              4. Availability of our platform and the benefits
        </H3>
        <Para>
              4.1. We cannot guarantee that our Platform, or any content on it, will always be available or be uninterrupted.
              This is because our Platform is provided via the internet and interruptions,
              delays and other technical problems are “part and parcel” of the provision of services via the internet.
              We may need to suspend, withdraw or restrict the availability of all or any part of our Platform, for example for security,
              maintenance or operational reasons.
              We will try to give you notice if the Platform is not going to be available for an extended period of time.
        </Para>
        <Para>
              4.2. All coaches and coaching programmes are subject to availability.
              We put a lot of effort into securing a wide choice of attractive coaches and programmes,
              but we rely on our coaches to make them available and provide the underlying products or services to our coachees.
              As a result, we cannot guarantee that any specific coach or coaching programme will always be available
              or that they will always be provided on the same terms.
              We will try to find good alternatives if some programmes become unavailable.
        </Para>
      </>
    )
  }
}

export default PlatformAvailability
