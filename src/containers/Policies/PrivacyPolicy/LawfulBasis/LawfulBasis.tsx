import React, { PureComponent } from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {UL, LI} from 'ui/list'

class LawfulBasis extends PureComponent {
  render() {
    return (
      <>
        <H3 id="lawful-basis">
          3. Lawful basis and purposes of processing your personal information
        </H3>
        <Para>
          We collect information about you so that we can:
        </Para>
        <UL>
          <LI>
            <Para>
              identify you and manage your account on our Website;
            </Para>
          </LI>
          <LI>
            <Para>
              process your coaching programme bookings;
            </Para>
          </LI>
          <LI>
            <Para>
              liaise with the coach you have booked;
            </Para>
          </LI>
          <LI>
            <Para>
              improve our services;
            </Para>
          </LI>
          <LI>
            <Para>
              promote our business and market our services;
            </Para>
          </LI>
          <LI>
            <Para>
              manage our business, including for accounting and auditing purposes;
            </Para>
          </LI>
          <LI>
            <Para>
              conduct our regular group reporting activities on the performance of our company,
              in the context of a business reorganisation or group restructure;
            </Para>
          </LI>
          <LI>
            <Para>
              maintain our IT systems and manage hosting of our data;
            </Para>
          </LI>
          <LI>
            <Para>
              deal with legal disputes involving you or our coaches;
            </Para>
          </LI>
          <LI>
            <Para>
              prevent fraud;
            </Para>
          </LI>
          <LI>
            <Para>
              comply with our regulatory obligations.
            </Para>
          </LI>
        </UL>
        <Para>
          We will only use your personal information when the law allows us to, i.e. when it is necessary to:
        </Para>
        <UL>
          <LI>
            <Para>
              perform our contractual obligations towards you or the coach, as set out in our End User terms and conditions;
            </Para>
          </LI>
          <LI>
            <Para>
              comply with our legal and regulatory obligations;
            </Para>
          </LI>
          <LI>
            <Para>
              pursue our legitimate interests (e.g. conducting our business in an efficient,
              compliant and profitable manner and the overall promotion of the business),
              and where your interests and fundamental rights do not override these interests.
              It may also become necessary to process your personal data for a legitimate interest of a third party,
              such as your coach. We will also rely on our legitimate interests for the proper administration of our Website,
              and to manage our operations (for example, maintaining appropriate records and databases).
            </Para>
          </LI>
        </UL>
        <Para>
          If you have provided us with your individual contact details (for example, your personal email address),
          we will rely on your consent to send you electronic communications such as our newsletters and emails with information
          about our products and/or services.
          See the “Direct mailings” section below for more details.
        </Para>
        <Para>
          Some of the above grounds and purposes for processing will overlap and there may be several grounds which justify
          our use of your personal information.
        </Para>
        <Para>
          We will only use your personal information for the purposes for which we collected it,
          unless we reasonably consider that we need to use it for another reason and that reason is compatible
          with the original purpose.
          If we need to use your personal information for an unrelated purpose, we will notify you and we will explain the legal
          basis which allows us to do so.
        </Para>
        <Para>
          Please note that we may process your personal information without your knowledge or consent,
          in compliance with the above rules, where this is required or permitted by law.
        </Para>
      </>
    )
  }
}

export default LawfulBasis
