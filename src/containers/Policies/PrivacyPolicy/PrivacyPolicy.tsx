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

const links = [
  {
    url: '#our-role',
    text: 'Our role',
  },
  {
    url: '#information',
    text: 'What information we collect',
  },
  {
    url: '#lawful-basis',
    text: 'Lawful basis and purposes of processing your personal information',
  },
  {
    url: '#uses-of-information',
    text: 'Uses made of the information',
  },
  {
    url: '#disclosure-of-information',
    text: 'Disclosure of your information',
  },
  {
    url: '#links',
    text: 'Links',
  },
  {
    url: '#direct-mailings',
    text: 'Direct mailings',
  },
  {
    url: '#data-secure',
    text: 'Keeping your data secure',
  },
  {
    url: '#transfer-of-information-eea',
    text: 'Transfer of your information out of EEA',
  },
  {
    url: '#retention-periods',
    text: 'Retention periods',
  },
  {
    url: '#your-rights',
    text: 'Your rights',
  },
  {
    url: '#ico',
    text: 'Contact us or the ICO',
  },
]


class PrivacyPolicy extends PureComponent {
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
          <OurRole />
          <WhatWeCollect />
          <LawfulBasis />
          <UseOfInformation />
          <DisclosureOfInformation />
          <Links />
          <DirectMailings />
          <DataSecure />
          <TransferInfoEEA />
          <RetentionPeriods />
          <YourRights />
          <InformationOffice />
        </Col>
      </Row>
    )
  }
}

export default PrivacyPolicy
