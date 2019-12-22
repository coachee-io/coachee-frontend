import React, { PureComponent } from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {OL, UL, LI} from '../../../../ui/list'

class DisclosureOfInformation extends PureComponent {
  render() {
    return (
      <>
        <H3 id="your-rights">
          11. Your rights
        </H3>
        <Para>
          Your duty to inform us of changes - It is important that the personal information we hold about you is accurate and current.
          Please let us know if your personal information changes during your relationship with us.
        </Para>
        <Para bold>
          Your rights in connection with personal information
        </Para>
        <Para>
          Under certain circumstances, by law, you have the right to:
        </Para>
        <OL>
          <LI>
            <Para>
              Request access to your personal information (commonly known as a “data subject access request”).
              This enables you to receive a confirmation from us as to whether we process any of your personal information or not,
              and if this is the case,
              to receive a copy of such personal information and to check that we are lawfully processing it.
            </Para>
          </LI>
          <LI>
            <Para>
              Request correction of the personal information that we hold about you.
              This enables you to have any incomplete or inaccurate information we hold about you corrected.
            </Para>
          </LI>
          <LI>
            <Para>
              Request erasure of your personal information (often referred to as “the right to be forgotten”).
              This enables you to ask us to delete or remove personal information where
              there is no good reason for us continuing to process it.
              You also have the right to ask us to delete or remove your personal information where you have exercised your right to
              object to processing (see below).
            </Para>
          </LI>
          <LI>
            <Para>
              Object to processing of your personal information where we are relying on a legitimate interest
              (or those of a third party)
              and there is something about your particular situation which makes you want to object to processing on this ground.
            </Para>
          </LI>
          <LI>
            <Para>
              Request the restriction of processing of your personal information.
              This enables you to ask us to suspend the processing of personal information about you, for example,
              if you want us to establish its accuracy or the reason for processing it, or if we no
              longer need your data for our legitimate interests but we need to hold some of it for the purpose of legal proceedings.
            </Para>
          </LI>
          <LI>
            <Para>
              Request the transfer of your personal information to another party.
            </Para>
          </LI>
        </OL>
        <Para>
          If you would like to exercise any of the above rights, please:
        </Para>
        <UL>
          <LI>
            <Para>
            Email us on admin@coachee.io
            </Para>
          </LI>
          <LI>
            <Para>
              let us have proof of your identity and address (a copy of your driving licence
              or passport and a recent utility or credit card bill).
              This is to allow us to verify your identity and prevent disclosure to unauthorised third parties;
            </Para>
          </LI>
          <LI>
            <Para>
              let us know the details of your request, for example by specifying the personal data you want to access,
              the information that is incorrect and the information with which it should be replaced.
            </Para>
          </LI>
        </UL>
        <Para>
          Please note that if you request erasure, object to our processing of your personal data or request the
          restriction of our processing of your personal
          data we may not be able to provide our services and we may need to deactivate your account on our Website.
        </Para>
        <Para>
          You also have the right to ask us not to process your personal data for marketing purposes.
          You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data.
          You can also exercise the right at any time by contacting us at: admin@coachee.io.
          You can always unsubscribe from our email communications at any time by following the unsubscribe link in
          our email communications,
          or by updating your email preferences on your profile on our Website.
        </Para>
      </>
    )
  }
}

export default DisclosureOfInformation
