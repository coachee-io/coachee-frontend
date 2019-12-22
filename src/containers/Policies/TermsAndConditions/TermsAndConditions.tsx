import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import AboutUs from './AboutUs'
import PlatformUsage from './PlatformUsage'
import PlatformChanges from './PlatformChanges'
import PlatformAvailability from './PlatformAvailability'
import AccountAccess from './AccountAccess'
import CoachingProgrammes from './CoachingProgrammes'
import CancellationRights from './CancellationRights'
import PlatformContent from './PlatformContent'
import OnlineSecurity from './OnlineSecurity'
import OurResponsibility from './OurResponsibility'
import IfThingsGoWrong from './IfThingsGoWrong'
import PersonalData from './PersonalData'
import LastButNotLeast from './LastButNotLeast'

const links = [
  {
    url: '#about-us',
    text: 'About us and what we will do for you',
  },
  {
    url: '#platform-use',
    text: 'By using our platform you accept these terms',
  },
  {
    url: '#platform-changes',
    text: 'We may make changes',
  },
  {
    url: '#platform-availability',
    text: 'Availability of our platform and the benefits',
  },
  {
    url: '#account-access',
    text: 'Platform account access',
  },
  {
    url: '#coaching-programmes',
    text: 'Coaching programmes',
  },
  {
    url: '#cancellation-rights',
    text: 'Cancellation rights',
  },
  {
    url: '#platform-content',
    text: 'Platform content',
  },
  {
    url: '#online-security',
    text: 'Online security',
  },
  {
    url: '#our-responsibility',
    text: 'Our responsibility',
  },
  {
    url: '#things-go-wrong',
    text: 'If things go wrong',
  },
  {
    url: '#personal-data',
    text: 'How we may use your personal data',
  },
  {
    url: '#last-but-not-least',
    text: 'Last but not least',
  },
]

class TermsAndConditions extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <SideNav
            list={links}
            ordered
          />
        </Col>
        <Col xs={8}>
          <ContentHeader />
          <AboutUs />
          <PlatformUsage />
          <PlatformChanges />
          <PlatformAvailability />
          <AccountAccess />
          <CoachingProgrammes />
          <CancellationRights />
          <PlatformContent />
          <OnlineSecurity />
          <OurResponsibility />
          <IfThingsGoWrong />
          <PersonalData />
          <LastButNotLeast />
        </Col>
      </Row>
    )
  }
}

export default TermsAndConditions
