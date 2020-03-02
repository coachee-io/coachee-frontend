import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI, OL} from '../../../../ui/list'

class AboutUs extends PureComponent {
  render() {
    return (
      <>
        <H3 id="about-us">
          1. About us and what we will do for you
        </H3>
        <Para>
          1.1. The Platform is operated by COACHEE.IO LTD (we, us, ours).
          We are a company registered in England and Wales under company number 12314526.
          Our registered office address is International House, 64 Nile Street, London, England, N1 7SR.
        </Para>
        <Para>
          1.2. A quick summary of our most important Terms and Conditions:
        </Para>
        <UL padding="0 0 0 20px">
          <LI>
            <Para>If you are a coachee:</Para>
            <OL padding="0 0 0 20px">
              <LI>
                <Para>
                  We will only charge your card if your intro call.
                  You have 12 hours from the intro call to let us know via email or chat that you no longer
                  wish to proceed with booking the coaching program.
                  If you do not let us know within 12 hours, we’ll assume you are happy with your coach and wish to proceed!
                </Para>
              </LI>
              <LI>
                <Para>
                  If a coach doesn’t show up for a booked session,
                  please let us know within 12 hours of the arranged time so we can check what happened.
                </Para>
              </LI>
              <LI>
                <Para>
                  We’re confident that you’ll see life-changing results with the right coach,
                  however we do not accept any requests for returns after the initial 12 hours past your intro call.
                </Para>
              </LI>
            </OL>
          </LI>
          <LI>
            <Para>If you are a coach:</Para>
            <OL padding="0 0 0 20px">
              <LI>
                <Para>
                  We will have an intro call with you to get to know you better and fill in your profile with the correct information.
                  We will also request proof of all your coaching certifications, and
                  we reserve the right to accept you onto the platform.
                </Para>
              </LI>
              <LI>
                <Para>
                  We will also ask whether you are VAT registered, and if you are, we will collect your VAT number,
                  check whether it is valid, and include this in your profile.
                  We do this to comply with UK legislation.
                </Para>
              </LI>
              <LI>
                <Para>
                  If you are not happy with the intro call you will have with your coachee, you have 12 hours to let us know.
                  We will process the payment after this time, and we are not able to cancel the booking after this time.
                </Para>
              </LI>
              <LI>
                <Para>
                  We will pay you up to 42 hours after each booked session,
                  and only after you let us know via email that the session has successfully happened.
                  We will take our 15% fee from the total price of the coaching program,
                  and pay you the remaining amount divided by each session.
                </Para>
              </LI>
              <LI>
                <Para>
                  We’ll always be here to support you, and you can contact us anytime via chat or email!
                </Para>
              </LI>
            </OL>
          </LI>
        </UL>
        <Para>
          1.3. We are constantly looking for certified coaches who can provide our clients (coachees)
          with the best coaching programs available,
          and that are both competitive in terms of pricing, but also truly life-changing.
          We have a minimum criteria for all our coaches:
        </Para>
        <UL>
          <LI>
            <Para>
              Certified from a distinct coaching institution that has taken at least 2 months to complete.
            </Para>
          </LI>
          <LI>
            <Para>
              Offers a coaching program of at least 4 weeks/sessions to ensure impactful results.
            </Para>
          </LI>
        </UL>
        <Para>
          When a coachee finds a coach that fits what they are looking for,
          they will book an intro call with their coach to check compatibility.
          We will request bank card details to confirm the authenticity of the request at this time,
          but we will not charge until 12 hours after the intro call.
          It is the coachee’s responsibility to let us know within these 12 hours that they would like to cancel their booking,
          otherwise the coachee will be charged and the program is considered bought.
        </Para>
        <Para>
          Payments will be made accordingly up to 48 hours after each completed session to the Coach,
          unless either the coachee or the coach let us know via email or chat within 12 hours
          after the session that it did not take place.
        </Para>
        <Para>
          1.4. If you have any questions or would like to get in touch with us,
          please email us on elisabete@coachee.io or chat with us directly on the website.
        </Para>
        <Para>
          1.5. If we have to contact you we will do so by email (coachees) or telephone/email (coaches).
        </Para>
        <Para>
          1.6. When we use the word “writing” or “written” in these terms, this includes emails.
        </Para>
      </>
    )
  }
}

export default AboutUs
