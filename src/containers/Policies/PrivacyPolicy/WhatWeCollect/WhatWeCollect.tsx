import React, { PureComponent } from 'react'

import {RouterLink} from 'components/Routing'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {OL, LI} from 'ui/list'

class WhatWeCollect extends PureComponent {
  render() {
    return (
      <>
        <H3 id="information">
          2. What information we collect
        </H3>
        <Para>
          In addition to the information provided to us by you, we will collect
          certain personal information about you when you activate your account or fill in forms on our
          Website, or when you contact us by e-mail, online chat or otherwise.
          We will, therefore, hold the information provided by you to create your user profile and
          further information you provide to us.
        </Para>
        <Para>
          We may also require certain information from you when you make a purchase on our Website,
          or enter a promotion, competition or survey and/or when you report a problem with our Website.
        </Para>
        <Para>
          When you submit personal information in connection with making a payment via the Website,
          such personal information is encrypted and protected with encryption software that
          lets your browser automatically encrypt data before you send it to us.
          While on a secure page the lock icon on the bottom of Web browsers such as
          Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed
          to un-locked, or open, when you are just ‘surfing’.
        </Para>
        <Para>
          With regard to each of your visits to our Website we will automatically collect the following information:
        </Para>
        <OL>
          <LI>
            <Para>
              if you are using our Website as a registered user, we will collect information about programmes redeemed by you;
            </Para>
          </LI>
          <LI>
            <Para>
              technical information, including the internet protocol (IP) address used to connect your computer or
              mobile device to the internet, type of mobile device you use, a unique device identifier,
              mobile network information, your login information,
              browser type and version you use, browser plug-in types and versions, operating system and platform;
            </Para>
          </LI>
          <LI>
            <Para>
              information about your visit to our Website, including the full uniform resource locators (URL) clickstream to,
              through and from our Website (including date and time);
              pages you viewed or information you searched for; page response times, download errors,
              length of visits to certain pages;
            </Para>
          </LI>
          <LI>
            <Para>
              details of your visits to other websites via our Website.
            </Para>
          </LI>
        </OL>
        <Para>
          We also work with third parties (including, for example, electronic analytics, business partners,
          sub-contractors in technical and payment services, advertising networks,
          analytics providers, search information providers) and may receive certain information about you from them.
        </Para>
        <Para>
          When we wish to send you information about our services, and you do not currently use our services,
          we may collect your contact details, for example, your name, email address and job title.
          This information may be provided directly by you, when you express interest in our website,
          or may be obtained through third parties.
        </Para>
        <Para>
          We use cookies to distinguish you from other users of our Website.
          This helps us to provide you with a good experience when you use the Website and also allows us to improve our Website.
          For detailed information on the cookies we use and the purposes for which we use them, see our
          {' '}
          <RouterLink to="/cookie-policy" primary>
            cookie policy
          </RouterLink>
          .
        </Para>
      </>
    )
  }
}

export default WhatWeCollect
