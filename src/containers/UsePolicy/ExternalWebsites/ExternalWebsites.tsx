import React, {PureComponent} from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'
import {UL, LI} from '../../../ui/list'

class ExternalWebsites extends PureComponent {
  render() {
    return (
      <>
        <H3 id="no-responsibility-for-external-websites">
          We are not responsible for websites we link to
        </H3>
        <Para>
          Where our Platform contains links to other websites and resources provided by third parties (including by our coaches),
          these links are provided for your information only. Such links should not be interpreted as approval
          by us of those linked websites or
          information you may obtain from them. We have no control over the contents of those websites or resources.
        </Para>
        <H3 id="prohibited-uses">
          Prohibited uses
        </H3>
        <Para>
          You may not use our Platform:
        </Para>
        <UL>
          <LI>
            <Para>
              in any way that breaches any applicable local, national or international law or regulation;
            </Para>
          </LI>
          <LI>
            <Para>
              in any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;
            </Para>
          </LI>
          <LI>
            <Para>
              for the purpose of harming or attempting to harm minors in any way;
            </Para>
          </LI>
          <LI>
            <Para>
              to send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards;
            </Para>
          </LI>
          <LI>
            <Para>
              to transmit, or procure the sending of, any unsolicited or
              unauthorised advertising or promotional material or any other form of similar solicitation (spam).
            </Para>
          </LI>
        </UL>
      </>
    )
  }
}

export default ExternalWebsites
