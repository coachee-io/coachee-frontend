import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import Flex from '../../../components/Layout/Flexbox'

import {Pulse} from '../../../components/Skeleton'
import {H2} from '../../../ui/headings'

import {
  GetCoachAvailabilityRequest,
} from '../../../services/public/coaches/types'

import {Tag} from './styled'

interface Props {
  tags: string,
  availability: GetCoachAvailabilityRequest[]
}

class Sidebar extends PureComponent<Props> {
  render() {
    const {tags, availability} = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px" alignItems="center">
              <H2 textAlign="center">
                {tags ? 'Expertise' : <Pulse height={24} width={150} />}
              </H2>
              {tags && tags.split(',').map((el, id) => (
                <Flex key={`${el}-${id}`} flexDirection="row" marginTop="15px">
                  <Tag accent>
                    {el}
                  </Tag>
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px" alignItems="center">
              <H2 textAlign="center">
                {availability ? 'Availability' : <Pulse height={24} width={150} />}
              </H2>
              {availability && availability.map((el, id) => (
                <Flex key={`${el}-${id}`} flexDirection="row" marginTop="15px">
                  <Tag primary>
                    {`${el.dateLabel}` }
                  </Tag>
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default Sidebar
