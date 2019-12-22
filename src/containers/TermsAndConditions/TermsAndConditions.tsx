import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import Flex from '../../components/Layout/Flexbox'
import SideNav from '../../components/Layout/SideNav'

import {RouterLink} from '../../components/Routing'

import {Para} from '../../ui/labels'
import {H3} from '../../ui/headings'
import {UL, LI, OL} from '../../ui/list'

import {list} from './urls'


class TermsAndConditions extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <SideNav
            list={list}
            ordered
          />
        </Col>
        <Col xs={8}>
          <Para>
            (Last updated on the 1st of January 2020)
          </Para>
          <Para bold>
            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY
          </Para>
          <Para>
            <a href="https://www.coachee.io">Coachee.io</a>
            {` brings together coaches and coachees under one single Platform. 
            Coaches have their own profiles and programs available, with full autonomy over the prices they charge, 
            the hours they work and when they are available and whether they accept or decline a client (coachee). 
            Coachees have access to a wealth of information on possible coaches, 
            and can book intro calls to check compatibility before payment.
  If you’re a coachee (client), you do not need to pay to use our platform,
  but you do need to have the necessary funds in the card you provide at the checkout to cover 
  the price of the coaching program you have booked. 
  If you’re a coach, you do not need to pay to use our platform and advertise your services, 
  but we will take a 15% fee of the total cost of your booking, only after the program has been accepted and 
  paid by the coachee (client) after the intro call. This is clearly indicated across the Platform.
  Our Platform is available via our Website at `}
            <a href="https://www.coachee.io">www.coachee.io</a>
          </Para>

          <Flex flexDirection="column">
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
            <H3 id="platform-use">
              2. By using our platform you accept these terms
            </H3>
            <Para>
              2.1. By using the Platform, you confirm that you accept these Terms and you agree to follow the rules set out in these Terms,
              including the following additional documents:
            </Para>
            <UL>
              <LI>
                <Para>
                Our
                  {' '}
                  <RouterLink to="/privacy-policy" primary>Privacy Policy</RouterLink>
                  {' '}
and
                  {' '}
                  <RouterLink to="/cookie-policy" primary>Cookie Policy</RouterLink>
, which provides you with information about
                how your personal data will be used by us and what are your rights in relation to your personal data.
                </Para>
              </LI>
            </UL>
            <Para>
              2.2. If you do not agree to any of the above, you should not use our Platform.
            </Para>
            <Para>
              2.3. If you are under 18 years of age, you must have a parent or guardian’s permission to use our Platform.
            </Para>
            <H3 id="platform-changes">
              3. We may make changes
            </H3>
            <Para>
              3.1. We amend these terms from time to time, so please check them occasionally.
              For example, we may change them to reflect changes in relevant laws and regulations.
            </Para>
            <Para>
              3.2. We may also update and change the Platform from time to time to update its functionality,
              to add new products, coaches and coaching programmes, and/or to address our coach or coachee needs.
            </Para>
            <Para>
              3.3. We will notify you of any significant changes and/or any changes that require any action from you.
              If you do not agree to any changes, you should stop using the Platform.
            </Para>
            <H3 id="platform-availability">
              4. Availability of our platform and the benefits
            </H3>
            <Para>
              4.1. We cannot guarantee that our Platform, or any content on it, will always be available or be uninterrupted.
              This is because our Platform is provided via the internet and interruptions,
              delays and other technical problems are “part and parcel” of the provision of services via the internet.
              We may need to suspend, withdraw or restrict the availability of all or any part of our Platform, for example for security,
              maintenance or operational reasons.
              We will try to give you notice if the Platform is not going to be available for an extended period of time.
            </Para>
            <Para>
              4.2. All coaches and coaching programmes are subject to availability.
              We put a lot of effort into securing a wide choice of attractive coaches and programmes,
              but we rely on our coaches to make them available and provide the underlying products or services to our coachees.
              As a result, we cannot guarantee that any specific coach or coaching programme will always be available
              or that they will always be provided on the same terms.
              We will try to find good alternatives if some programmes become unavailable.
            </Para>

            <H3 id="account-access">
              5. Platform account access
            </H3>
            <Para>
              5.1. Before you start using our Platform, we will need you to complete registration and/or activate your account.
            </Para>
            <Para>
              5.2. It is important to keep your details correct and up-to-date at all times so please make sure that you verify
              and provide us with true, accurate and complete information during your account registration process and update
              it afterwards if necessary. If we discover that any information related to your account is not accurate,
              we may need to suspend or cancel your account.
              This is relevant for both coaches and coachees.
            </Para>
            <Para>
              5.3. Please keep your password confidential.
              We recommend that you use a combination of letters, uppercase and lowercase, numbers and symbols;
              this will make it difficult for someone else to use your account.
              Please do not share this information with anyone.
              Your account is personal to you and you should not allow anyone else to access your account on our Platform.
              For this reason, we recommend that you always log-off your account when you access our Platform from a shared device.
            </Para>
            <Para>
              5.4. If you know or suspect that anyone other than you know your login details,
              you should contact us as soon as possible at admin@coachee.io
            </Para>
            <Para>
              5.5. We may temporarily or permanently disable your login information if we suspect it is being used by someone else.
              We may also require you to change your password for security reasons.
            </Para>
            <Para>
              5.6. You may at any time request the deletion of your account on our Platform.
            </Para>
            <Para>
              5.7. If we or you terminate or suspend your access to your Platform account,
              you will be able to continue your coaching programme booked and paid prior to the date of suspension or termination,
              but you will not be able to obtain any new programmes.
              If you’re a coach, termination or suspension of your account may mean that we can no longer book further coachees with you.
            </Para>
            <H3 id="coaching-programmes">
              6. Coaching programmes
            </H3>
            <Para>
              6.1. Certain programmes may be subject to additional terms and conditions,
              in which case they will be displayed on our Platform.
            </Para>
            <Para>
              6.2. You should also remember that all coaching services are provided by our Partners, and as such,
              they are subject to the relevant coach’s terms and conditions of supply.
              Since we do not supply the underlying products or services,
              our role is limited to providing you with the programme and are not responsible for the availability,
              quality or suitability of the programme purchased by you from the relevant coach.
              However, we will always do our best to ensure that all our coaches are certified, vetted and
              that the match is as close as possible to a perfect fit.
              Still, we cannot be responsible for the coach’s performance of their obligations,
              including any losses or damage suffered by you as a result of the coach’s supply of services
              to you or their failure to supply or comply with applicable laws and regulations.
              If you are not satisfied with your coach, please start by contacting them,
              and also give us your feedback, as it is important for us that we partner with reliable coaches.
            </Para>
            <Para>
              6.3. Our platform works by booking and paying whole coaching programmes,
              and we do not accept payments in installments or per session.
              We do this to ensure impactful results are achieved, as well as to protect our longevity as a Platform.
            </Para>
            <Para>
              6.4. Please note that all coaching programmes are for your personal use and you cannot sell,
              copy or reproduce any content provided from the coaches to you.
              If we learn that you have sold, copied, reproduced or otherwise used our Platform for commercial gain or fraudulently,
              we may permanently cancel your access to our Platform.
            </Para>
            <H3 id="cancellation-rights">
              7. Cancellation rights
            </H3>
            <Para>
              7.1. We will not charge you until 12 hours after your intro call,
              and you have until this time to let us know you would like to cancel your booking if you change your mind.
              Refunds will not be accepted after this time.
            </Para>
            <H3 id="platform-content">
              8. Platform content
            </H3>
            <Para>
              8.1. The content on our Platform is provided for general information only.
              It is not intended to amount to advice on which you should rely.
              Although we try to update the information published on our Platform,
              we make no representations, warranties or guarantees, whether express or implied,
              that the content on our Portal is accurate, complete or up to date.
            </Para>
            <H3 id="online-security">
              9. Online security
            </H3>
            <Para>
              9.1. We put a lot of effort in keeping our Platform secure.
              However, despite all these efforts, we cannot guarantee that our Platform will be absolutely secure,
              free from bugs or viruses,
              so you should use your own virus protection software.
            </Para>
            <Para>
              9.2. We expect our coachees and coaches to respect the security of our Platform and
              so you must not misuse our Platform by knowingly introducing viruses,
              Trojans or other material that is malicious or technologically harmful.
              You must not attempt to gain unauthorised access to our Platform, our servers or database connected to our Platform.
              You must not attack our Platform via a denial-of-service attack or a distributed denial-of-service attack.
              By breaching this provision, you may be committing an offence and
              we may need to report any such breach to the relevant law enforcement authorities including
              by disclosing your identity to them.
              In the event of such a breach, your right to use our online portal will cease immediately.
            </Para>
            <H3 id="our-responsibility">
              10. Our responsibility
            </H3>
            <Para>
              10.1. If we fail to comply with these Terms, we are responsible for loss or
              damage you suffer that is a foreseeable result of our breaking these Terms or
              our failing to use reasonable care and skill but we are not responsible for any loss or damage that is not foreseeable.
              Loss or damage is foreseeable if either it is obvious that it will happen or if,
              at the time the contract was made, both we and you knew it might happen.
            </Para>
            <Para>
              10.2. Please also refer to paragraph 6.2 above for more details about our responsibility
              for the products or services provided by the coaches.
            </Para>
            <Para>
              10.3. We do not exclude or limit in any way our liability to you where it would be unlawful to do so.
              This includes liability for death or personal injury caused by our negligence and for fraud or fraudulent misrepresentation.
            </Para>
            <Para>
              10.4. Our Platform is made available to you for private use only.
              If you use the Platform for any commercial, business or re-sale purpose (in breach of these Terms)
              we will have no liability to you for any loss of profit,
              loss of business, business interruption, or loss of business opportunity.
            </Para>
            <H3 id="things-go-wrong">
              11. If things go wrong
            </H3>
            <Para>
              11.1. If you have any issues relating to the use of our Platform, your coach, and/or in relation to the payments,
              please let us know via email on admin@coachee.io.
              If the matter is within our power, we will try to resolve your issues quickly and efficiently.
              We will contact the relevant coach if your issues relate to their services and will try and
              help you resolve any issues you may have with them.
            </Para>
            <Para>
                11.2. When we reasonably believe that you have not followed these Terms,
                we may take such action as we deem appropriate, including:
            </Para>
            <UL>
              <LI>
                <Para>
                  Immediate, temporary or permanent withdrawal of your right to use our Platform;
                </Para>
              </LI>
              <LI>
                <Para>
                legal proceedings against you, including for reimbursement of all costs
                (including, but not limited to, reasonable administrative and legal costs) resulting from your breach; and/or
                </Para>
              </LI>
              <LI>
                <Para>
                  disclosure of such information to law enforcement authorities, as we reasonably feel is necessary or as required by law.
                </Para>
              </LI>
            </UL>
            <H3 id="personal-data">
              12. How we may use your personal data
            </H3>
            <Para>
              12.1. Our Privacy Policy provides information on what personal data we collect,
              how we process it and other important data protection terms, including your rights in respect of your personal data.
            </Para>
            <H3 id="last-but-not-least">
              13. Last but not least
            </H3>
            <Para>
              13.1. We may transfer our rights and obligations under these Terms to another organisation,
              for example, if our business is transferred or merged with another company.
            </Para>
            <Para>
              13.2. These Terms are between you and us. No other person shall have any rights to enforce any of these Terms.
            </Para>
            <Para>
              13.3. Each of the paragraphs of these Terms operates separately.
              If any court or relevant authority decides that any of them are unlawful,
              the remaining paragraphs will remain in full force and effect.
            </Para>
            <Para>
              13.4. These Terms are governed by English law and you can bring legal proceedings against us in the English courts.
              If you live in Scotland you can bring legal proceedings in either the Scottish or the English courts.
              If you live in Northern Ireland you can bring legal proceedings in either the Northern Irish or the English courts.
            </Para>
          </Flex>
        </Col>
      </Row>
    )
  }
}

export default TermsAndConditions
