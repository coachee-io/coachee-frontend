import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class OurRole extends PureComponent {
  render() {
    return (
      <>
        <H3 id="our-role">
          1. Our role
        </H3>
        <Para>
          In order to enable us to set up your account on our Website and provide our services to you via our Website,
          we will request certain information to be provided by you when you register on the Platform.
        </Para>
        <Para>
          If you do not already have a relationship with us,
          we may hold limited personal information about you so that we may contact you to promote our products and/or services.
        </Para>
        <Para>
          For the purposes of the applicable Data Protection Laws, COACHEE.IO Ltd
          is the data controller of your personal data collected in connection with your use of our Website.
        </Para>
      </>
    )
  }
}

export default OurRole
