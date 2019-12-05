import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {Pulse} from '../../../components/Skeleton'

import {H2} from '../../../ui/headings'

import {Weekdays} from '../../../enums/Weekdays'

import {Tag} from './styled'

interface Props {
  tags: string,
  availability: any[]
}


class Sidebar extends PureComponent<Props> {
  render() {
    const {tags, availability} = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <H2 textAlign="center">
              {tags ? 'Expertise' : <Pulse height={24} width={150} />}
            </H2>
            {tags && tags.split(',').map((el) => (
              <Tag accent>
                {el}
              </Tag>
            ))}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <H2 textAlign="center">
              {availability ? 'Availability' : <Pulse height={24} width={150} />}
            </H2>
            {availability && availability.map((el) => (
              <>
                <Tag key={el} primary>
                  {Weekdays[el.day]}
                </Tag>
              </>
            ))}
          </Col>
        </Row>
      </>
    )
  }
}

export default Sidebar
