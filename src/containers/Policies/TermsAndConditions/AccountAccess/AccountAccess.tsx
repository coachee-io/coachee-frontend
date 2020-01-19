import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <H3 id="account-access">
          6. Platform account access
        </H3>
        <Para>
          6.1. Before you start using our Platform, we will need you to complete registration and/or activate your account.
        </Para>
        <Para>
          6.2. It is important to keep your details correct and up-to-date at all times so please make sure that you verify
          and provide us with true, accurate and complete information during your account registration process and update
          it afterwards if necessary. If we discover that any information related to your account is not accurate,
          we may need to suspend or cancel your account.
          This is relevant for both coaches and coachees.
        </Para>
        <Para>
          6.3. Please keep your password confidential.
          We recommend that you use a combination of letters, uppercase and lowercase, numbers and symbols;
          this will make it difficult for someone else to use your account.
          Please do not share this information with anyone.
          Your account is personal to you and you should not allow anyone else to access your account on our Platform.
          For this reason, we recommend that you always log-off your account when you access our Platform from a shared device.
        </Para>
        <Para>
          6.4. If you know or suspect that anyone other than you know your login details,
          you should contact us as soon as possible at admin@coachee.io
        </Para>
        <Para>
          6.5. We may temporarily or permanently disable your login information if we suspect it is being used by someone else.
          We may also require you to change your password for security reasons.
        </Para>
        <Para>
          6.6. You may at any time request the deletion of your account on our Platform.
        </Para>
        <Para>
          6.7. If we or you terminate or suspend your access to your Platform account,
          you will be able to continue your coaching programme booked and paid prior to the date of suspension or termination,
          but you will not be able to obtain any new programmes.
          If you’re a coach, termination or suspension of your account may mean that we can no longer book further coachees with you.
        </Para>
      </>
    )
  }
}

export default ContentHeader
