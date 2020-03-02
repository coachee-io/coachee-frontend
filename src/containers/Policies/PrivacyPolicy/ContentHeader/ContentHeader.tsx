import React, { PureComponent } from 'react'

import {Anchor} from '../../../../components/Routing'

import {Para} from '../../../../ui/labels'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <Para>
          (Last updated on the 1st of January 2020)
        </Para>
        <Para>
          This privacy policy sets out the privacy practices for
          {' '}
          <strong>COACHEE.IO Ltd</strong>
          ,
          a company registered in England and Wales under company number 12314526.
          Our registered office address is International House, 64 Nile Street, London, England, N1 7SR (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;).
          Our website is
          {' '}
          <Anchor href="https//:www.coachee.io" primary noUnderline>www.coachee.io</Anchor>
          {' '}
          (the &quot;Website&quot;) and all associated sub-domains.
        </Para>
        <Para>
          In order to provide our services to you and to promote our business, we will need to collect and
          process certain personal information about you.
        </Para>
        <Para>
          We are committed to protecting the privacy and security of your personal information,
          in accordance with the applicable data protection laws, including the General Data Protection Regulation,
          together the “Data Protection Laws”. This privacy policy describes
          how we collect and use personal information about you during and after our relationship with you, as appropriate.
        </Para>
        <Para>
          If you have any questions at all about this policy or the Website,
          or about how we use and process your personal information, please do not hesitate to contact us by e-mail at admin@coachee.io.
        </Para>
        <Para>
          If we change our privacy policy we will post the changes on this page, and may place notices on other pages of the Website,
          so that you may be aware of the information we collect and how we use it at all times.
          Continued use of the Website will constitute your agreement to any such changes.
        </Para>
      </>
    )
  }
}

export default ContentHeader
