import React, { PureComponent } from 'react'

import {RouterLink} from '../../../../components/Routing'
import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {OL, LI} from '../../../../ui/list'

class UsingTheWebsite extends PureComponent {
  render() {
    return (
      <>
        <H3 id="using-the-website">
          Using the Website
        </H3>
        <Para bold>
          When will I receive the contact details for my coach?
        </Para>
        <Para>
          We will provide you with the contact details for your coach right
          after we process your intro call booking and your payment is blocked in your card.
        </Para>
        <Para bold>
          What happens after I book an intro call with a coach?
        </Para>
        <OL>
          <LI>
            <Para>
              We will block the full amount for the program in your card,
              which is fully refundable if you wish to cancel the transaction after your intro call;
            </Para>
          </LI>
          <LI>
            <Para>
              You will receive a confirmation email from us;
            </Para>
          </LI>
          <LI>
            <Para>
              We will confirm the availability of the coach for your intro call;
            </Para>
          </LI>
          <LI>
            <Para>
              We will send you their contact details via email;
            </Para>
          </LI>
          <LI>
            <Para>
              Both you and your coach will have your intro call;
            </Para>
          </LI>
          <LI>
            <Para>
              If successful, you will continue your coaching program and
              we will charge your card for the full payment;
            </Para>
          </LI>
          <LI>
            <Para>
              If you wish to cancel, you will need to let us know up to 12 hours after your intro call.
            </Para>
          </LI>
        </OL>
        <Para bold>
          Are all sessions with a coach online?
        </Para>
        <Para>
          Most of the sessions with our coaches will be online, and it is the coach’s
          responsibility to setup a skype/zoom link or use any other tools they wish to.
          Some coaches might also offer face to face coaching sessions,
          and we will include this in their profile description.
        </Para>
        <Para bold>
          How is my privacy and confidentiality protected?
        </Para>
        <Para>
          Confidentiality is key for our business to be
          successful and we treat it seriously.
          We follow all European GDPR regulations and you can contact us at any time via
          {' '}
          <strong>admin@coachee.io</strong>
          {' '}
          to request that we delete any and all the data we have on you.
          You can find more about this in our
          {' '}
          <RouterLink to="/privacy-policy" primary>Privacy Policy</RouterLink>
          .
        </Para>
      </>
    )
  }
}

export default UsingTheWebsite
