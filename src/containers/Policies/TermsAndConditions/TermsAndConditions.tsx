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

const list = [
  {
    id: 'about-us',
    url: '#about-us',
    text: 'About us and what we will do for you',
    Component: AboutUs,
  },
  {
    id: 'platform-use',
    url: '#platform-use',
    text: 'By using our platform you accept these terms',
    Component: PlatformUsage,
  },
  {
    id: 'platform-changes',
    url: '#platform-changes',
    text: 'We may make changes',
    Component: PlatformChanges,
  },
  {
    id: 'platform-availability',
    url: '#platform-availability',
    text: 'Availability of our platform and the benefits',
    Component: PlatformAvailability,
  },
  {
    id: 'account-access',
    url: '#account-access',
    text: 'Platform account access',
    Component: AccountAccess,
  },
  {
    id: 'coaching-programmes',
    url: '#coaching-programmes',
    text: 'Coaching programmes',
    Component: CoachingProgrammes,
  },
  {
    id: 'cancellation-rights',
    url: '#cancellation-rights',
    text: 'Cancellation rights',
    Component: CancellationRights,
  },
  {
    id: 'platform-content',
    url: '#platform-content',
    text: 'Platform content',
    Component: PlatformContent,
  },
  {
    id: 'online-security',
    url: '#online-security',
    text: 'Online security',
    Component: OnlineSecurity,
  },
  {
    id: 'our-responsibility',
    url: '#our-responsibility',
    text: 'Our responsibility',
    Component: OurResponsibility,
  },
  {
    id: 'if-things-go-wrong',
    url: '#things-go-wrong',
    text: 'If things go wrong',
    Component: IfThingsGoWrong,
  },
  {
    id: 'personal-data',
    url: '#personal-data',
    text: 'How we may use your personal data',
    Component: PersonalData,
  },
  {
    id: 'last-but-not-least',
    url: '#last-but-not-least',
    text: 'Last but not least',
    Component: LastButNotLeast,
  },
]


class TermsAndConditions extends PureComponent {
  private nodes: any = list.reduce((acc, value) => {
    acc[value.id] = React.createRef()
    return acc
  }, {} as any)

  scrollTo = (e: any, id: string) => {
    e.preventDefault()
    window.scroll({behavior: 'smooth', top: this.nodes[id].current.offsetTop - 15, left: 0})
  }

  render() {
    return (
      <Row>
        <Col xs={4}>
          <SideNav
            list={list}
            onClick={this.scrollTo}
            ordered
          />
        </Col>
        <Col xs={8}>
          <ContentHeader />
          {list.map((el: any, index) => {
            const {Component} = el
            return (
              <div key={`${el.url}-${index}`} ref={this.nodes[el.id]}>
                <Component />
              </div>
            )
          })}
        </Col>
      </Row>
    )
  }
}

export default TermsAndConditions
