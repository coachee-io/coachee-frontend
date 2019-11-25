import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {FlexColAlignCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'
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
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <FlexColAlignCenter>
                <H2 textAlign="center">
                  {tags ? 'Expertise' : <Pulse height={24} width={150} />}
                </H2>
                {tags && tags.split(',').map((el) => (
                  <SetMargin key={el} mt={10}>
                    <Tag accent>
                      {el}
                    </Tag>
                  </SetMargin>
                ))}
              </FlexColAlignCenter>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <SetMargin mt={30}>
                <FlexColAlignCenter>
                  <H2 textAlign="center">
                    {availability ? 'Availability' : <Pulse height={24} width={150} />}
                  </H2>
                  {availability && availability.map((el) => (
                    <SetMargin key={el} mt={10}>
                      <Tag key={el} primary>
                        {Weekdays[el.day]}
                      </Tag>
                    </SetMargin>
                  ))}
                </FlexColAlignCenter>
              </SetMargin>
            </Col>
          </Row>

        </SetMargin>
      </>
    )
  }
}

export default Sidebar
