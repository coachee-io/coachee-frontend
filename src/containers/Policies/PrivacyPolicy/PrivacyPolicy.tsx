import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from '../../../components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import OurRole from './OurRole'
import WhatWeCollect from './WhatWeCollect'
import LawfulBasis from './LawfulBasis'
import UseOfInformation from './UseOfInformation'
import DisclosureOfInformation from './DisclosureOfInformation'
import Links from './Links'
import DirectMailings from './DirectMailings'
import DataSecure from './DateSecure'
import TransferInfoEEA from './TransferInfoEEA'
import RetentionPeriods from './RetentionPeriods'
import YourRights from './YourRights'
import InformationOffice from './Ico'

const list = [
  {
    id: 'our-role',
    url: '#our-role',
    text: 'Our role',
    Component: OurRole,
  },
  {
    id: 'information',
    url: '#information',
    text: 'What information we collect',
    Component: WhatWeCollect,
  },
  {
    id: 'lawful-basis',
    url: '#lawful-basis',
    text: 'Lawful basis and purposes of processing your personal information',
    Component: LawfulBasis,
  },
  {
    id: 'uses-of-information',
    url: '#uses-of-information',
    text: 'Uses made of the information',
    Component: UseOfInformation,
  },
  {
    id: 'disclosure-of-information',
    url: '#disclosure-of-information',
    text: 'Disclosure of your information',
    Component: DisclosureOfInformation,
  },
  {
    id: 'links',
    url: '#links',
    text: 'Links',
    Component: Links,
  },
  {
    id: 'direct-mailings',
    url: '#direct-mailings',
    text: 'Direct mailings',
    Component: DirectMailings,
  },
  {
    id: 'data-security',
    url: '#data-security',
    text: 'Keeping your data secure',
    Component: DataSecure,
  },
  {
    id: 'transfer-of-information-eea',
    url: '#transfer-of-information-eea',
    text: 'Transfer of your information out of EEA',
    Component: TransferInfoEEA,
  },
  {
    id: 'retention-periods',
    url: '#retention-periods',
    text: 'Retention periods',
    Component: RetentionPeriods,
  },
  {
    id: 'your-rights',
    url: '#your-rights',
    text: 'Your rights',
    Component: YourRights,
  },
  {
    id: 'ico',
    url: '#ico',
    text: 'Contact us or the ICO',
    Component: InformationOffice,
  },
]


class PrivacyPolicy extends PureComponent {
  private nodes = list.reduce((acc, value) => {
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
            ordered
            onClick={this.scrollTo}
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

export default PrivacyPolicy
