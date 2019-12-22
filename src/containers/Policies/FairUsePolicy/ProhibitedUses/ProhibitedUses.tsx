import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI} from '../../../../ui/list'

class ExternalWebsites extends PureComponent {
  render() {
    return (
      <>
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
