import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {UL, LI} from 'ui/list'

class DisclosureOfInformation extends PureComponent {
  render() {
    return (
      <>
        <H3 id="disclosure-of-information">
          5. Disclosure of your information
        </H3>
        <Para>
          We do not sell or share your personal data with third parties for them to use for marketing purposes.
        </Para>
        <Para>
          We may allow our provider of payment services, to access and use your personal data
          for the activities we have described above.
          We only permit them to use it to deliver the relevant service, and if they apply an appropriate level of security protection.
        </Para>
        <Para>
          We will share your personal information with the following third parties:
        </Para>
        <UL>
          <LI>
            <Para>
              our agents and service providers;
            </Para>
          </LI>
          <LI>
            <Para>
              our regulators;
            </Para>
          </LI>
          <LI>
            <Para>
              law enforcement agencies in connection with any investigation to help prevent unlawful activity;
            </Para>
          </LI>
          <LI>
            <Para>
              in the context of the possible sale or restructuring of our business.
            </Para>
          </LI>
        </UL>
        <Para>
          We require third parties to respect the security of your data and to treat it in accordance with the law.
          All our third-party service providers and other entities are required to take appropriate
          security measures to protect your personal information.
          We do not allow our third-party service providers to use your personal data for their own purposes.
          We only permit them to process your personal data for specified purposes and in accordance with our instructions.
        </Para>
        <Para>
          We also reserve the right to disclose the information collected about you to our professional advisors and/or if we,
          in good faith, believe it necessary to protect the personal safety of users or the public.
        </Para>
        <Para>
          We may share aggregated demographic information with our partners, clients and advertisers.
          This is not linked to any personal information that can identify any individual person.
        </Para>
        <Para>
          We may partner with another party to provide specific services.
          When you sign up for these services, we will share names or other contact
          information that is necessary for the third party to provide these services.
        </Para>
        <Para>
          These parties are not allowed to use any personally identifiable information except for the
          purpose of providing these services.
          We may also use such aggregated information and statistics for monitoring the Website usage
          in order to help us develop the Website
          and our services and may provide such aggregate anonymous information to third parties.
        </Para>
      </>
    )
  }
}

export default DisclosureOfInformation
