import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import Flex from '../../components/Layout/Flexbox'
import SideNav from '../../components/Layout/SideNav'
import {Anchor, RouterLink} from '../../components/Routing'

import {Para} from '../../ui/labels'
import {H3} from '../../ui/headings'

import {list} from './urls'
import {OL, UL, LI} from '../../ui/list'


class PrivacyPolicy extends PureComponent {
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
            <Anchor href="https//:www.coachee.io" primary noUnderline>https//:www.coachee.io</Anchor>
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
          <Flex flexDirection="column">
            <H3 id="our-role">
              1. Our role
            </H3>
            <Para>
            In order to enable us to set up your account on our Website and provide our services to you via our Website,
             we will request certain information to be provided by you when you register on the Platform.
            </Para>
            <Para>
            If you do not already have a relationship with us,
            we may hold limited personal information about you so that we may contact you to promote our products and/or services.
            </Para>
            <Para>
            For the purposes of the applicable Data Protection Laws, COACHEE.IO Ltd
            is the data controller of your personal data collected in connection with your use of our Website.
            </Para>
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
              <RouterLink to="/cookie-policy">
              cookie policy
              </RouterLink>
.
            </Para>
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
            <H3 id="links">
              6. Links
            </H3>
            <Para>
              The Website main contains links to other websites. Please be aware that we are not responsible
              or liable for the privacy practices of other websites.
              We encourage you to be aware when you leave the Website and to read the privacy policies
              of each and every website that collects personally identifiable information.
              This privacy policy applies solely to information collected by us on the Website.
            </Para>
            <H3 id="direct-mailings">
              7. Direct mailings
            </H3>
            <Para>
              We may occasionally send out newsletters, offers or alerts to our members and other business contacts.
              We may also wish to provide you with information about special features of our
              Website or any other service or products we think may be of interest to you.
            </Para>
            <Para>
              Where required by the Data Protection Laws (for example, if you have provided your personal contact information)
              we will send you such information only if you have specifically elected to receive it.
              You can opt-out from receiving such communications at any time – please see “Your rights” section below.
              From time to time the Website may request information from you via surveys or contests.
              Participation in these surveys or contests is completely voluntary and you, therefore,
              have a choice whether or not to disclose this information.
              Information requested may include contact information (such as name and shipping address),
              and demographic information (such as postcode or age level).
              Contact information will be used to notify the winners and award prizes.
              Survey information will be used for purposes of monitoring or improving the use of and satisfaction with this Website.
            </Para>
            <H3 id="data-secure">
              8. Keeping your data secure
            </H3>
            <Para>
              We have put in place appropriate security measures to prevent your personal information from being accidentally lost,
              used or accessed in an unauthorised way, altered or disclosed.
              In addition, we limit access to your personal information to those employees, agents,
              contractors and other third parties who have a business need to know.
              They will only process your personal information on our instructions and they are subject to a duty of confidentiality.
            </Para>
            <Para>
              While we will use all reasonable efforts to safeguard your personal data,
              you acknowledge that the use of the internet is not entirely secure and for this reason,
              we cannot guarantee the security or integrity of any personal data that are transferred via the internet.
              If you have any particular concerns about your information, please contact us (see our contact details below).
            </Para>
            <Para>
              We have put in place procedures to deal with any suspected data security breach and will
              notify you and any applicable regulator of a suspected breach where we are legally required to do so.
            </Para>
            <H3 id="transfer-of-information-eea">
              9. Transfer of your information out of EEA
            </H3>
            <Para>
              We may need to transfer your personal data outside the European Economic Area (EEA),
              for example, if one of our suppliers or group companies is located outside the EEA.
              We will ensure that any transfer of your data will be subject to appropriate safeguards,
              such as a European Commission approved contract (if appropriate) that will ensure you have
              appropriate remedies in the unlikely event of a security breach.
            </Para>
            <H3 id="retention-periods">
              10. Retention periods
            </H3>
            <Para>
            We will only retain your personal information for as long as necessary to fulfil the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
            To determine the appropriate retention period for personal data, we consider the amount, nature,
            and sensitivity of the personal data,
            the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes
            for which we process your personal data
            and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </Para>
            <Para>
              In some circumstances, we may anonymise your personal information so that it can no longer be associated with you,
              in which case we may use such information without further notice to you.
              Once you are no longer our customer, we will retain and securely destroy your personal
              information in accordance with applicable laws and regulations.
            </Para>
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
            <H3 id="ico">
              12. Contact us or the ICO
            </H3>
            <Para>
              If you have any concerns or complaints about our privacy activities, you can contact us on admin@coachee.io.
              You can also contact the Information Commissioner’s Office on 0303 123 1113.
            </Para>
            <Para>
            For more details about your rights under the Act,
            the rules we have to adhere to in collecting and storing your information,
            and how you can check your data records, please visit
              {' '}
              <Anchor href="https://www.gov.uk/data-protection/the-data-protection-act" primary>
                https://www.gov.uk/data-protection/the-data-protection-act
              </Anchor>
              {' '}
.
            </Para>
          </Flex>
        </Col>
      </Row>
    )
  }
}

export default PrivacyPolicy
