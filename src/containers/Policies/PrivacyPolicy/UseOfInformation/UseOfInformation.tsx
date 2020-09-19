import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {OL, LI} from 'ui/list'

class UseOfInformation extends PureComponent {
  render() {
    return (
      <>
        <H3 id="uses-of-information">
          4. Uses made of the information
        </H3>
        <Para>
          We will use the information we receive from you to:
        </Para>
        <OL>
          <LI>
            <Para>
              communicate with you in response to a specific action performed by you on our Website,
              for example when you buy a coaching programme;
            </Para>
          </LI>
          <LI>
            <Para>
              to provide you with support in using our Website;
            </Para>
          </LI>
          <LI>
            <Para>
              to provide you, or enable selected third parties to provide you, with information
              about goods or services we or they offer.
              For more details see “Direct Mailings” section;
            </Para>
          </LI>
          <LI>
            <Para>
              to notify you about changes to our services, our terms and conditions of use of the Website or this privacy policy; and
            </Para>
          </LI>
          <LI>
            <Para>
              to ensure that content from our Website is presented in the most effective manner for you
              and for your computer and/or your mobile device.
            </Para>
          </LI>
        </OL>
        <Para>
          We will use the information we collect about your use of our Website:
        </Para>
        <OL>
          <LI>
            <Para>
              to administer our Website for internal operations, including troubleshooting, data analysis,
              testing, research, statistical and survey purposes;
            </Para>
          </LI>
          <LI>
            <Para>
              to improve our Website to ensure that content is presented in the most effective manner
              for you and for your computer and/or your mobile device;
            </Para>
          </LI>
          <LI>
            <Para>
              to help us improve and personalise our services;
            </Para>
          </LI>
          <LI>
            <Para>
              to allow you to participate in interactive features of our Website when you choose to do so;
            </Para>
          </LI>
          <LI>
            <Para>
              as part of our efforts to keep our Website safe and secure;
            </Para>
          </LI>
          <LI>
            <Para>
              to measure or understand the effectiveness of advertising we serve to you and others,
              and to deliver relevant advertising to you;
            </Para>
          </LI>
          <LI>
            <Para>
              to make suggestions and recommendations to you and other users of our Website about goods
              or services that may interest you or them.
            </Para>
          </LI>
        </OL>
      </>
    )
  }
}

export default UseOfInformation
