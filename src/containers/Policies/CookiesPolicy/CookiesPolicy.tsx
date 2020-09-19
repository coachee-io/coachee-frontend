import React, {PureComponent} from 'react'
import {Col, Row} from 'react-bootstrap'

import SideNav from 'components/Layout/SideNav'

import ContentHeader from './ContentHeader'
import WebCookies from './WebCookies'
import UseOfCookies from './UseOfCookies'
import TypesOfCookies from './TypesOfCookies'
import CookieAcceptance from './CookieAcceptance'
import TurnOffCookies from './TurnOffCookies'
import UpdatePolicy from './UpdatePolicy'


const list = [
  {
    id: 'web-cookies',
    url: '#web-cookies',
    text: 'What are web cookies?',
    Component: WebCookies,
  },
  {
    id: 'use-of-cookies',
    url: '#use-of-cookies',
    text: 'Why do we use cookies?',
    Component: UseOfCookies,
  },
  {
    id: 'types-of-cookies',
    url: '#types-of-cookies',
    text: 'What type of cookies do we use?',
    Component: TypesOfCookies,
  },
  {
    id: 'cookie-acceptance',
    url: '#cookie-acceptance',
    text: 'Website cookie acceptance',
    Component: CookieAcceptance,
  },
  {
    id: 'turn-off-cookies',
    url: '#turn-off-cookies',
    text: 'Turning off cookies',
    Component: TurnOffCookies,
  },
  {
    id: 'updating-cookie-policy',
    url: '#updating-cookie-policy',
    text: 'Updating our Cookie Policy',
    Component: UpdatePolicy,
  },
]

class CookiesPolicy extends PureComponent {
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
        <Col xs={12} lg={4}>
          <SideNav
            list={list}
            onClick={this.scrollTo}
            ordered
          />
        </Col>
        <Col xs={12} lg={8}>
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

export default CookiesPolicy
