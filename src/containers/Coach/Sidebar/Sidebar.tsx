import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {FlexColAlignCenter} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'

import {H2} from '../../../ui/headings'

import {Tag} from './styled'

interface Props {
  expertise?: string[],
  availability?: any[]
}


class Sidebar extends PureComponent<Props> {
  render() {
    return (
      <>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <H2 textAlign="center">
                  Expertise
              </H2>
              <FlexColAlignCenter>
                {Array(5).fill(0).map((el) => (
                  <SetMargin key={el} mt={10}>
                    <Tag accent>
                      Holistic Health
                    </Tag>
                  </SetMargin>
                ))}
              </FlexColAlignCenter>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <SetMargin mt={30}>
                <H2 textAlign="center">
                  Availability
                </H2>
                <FlexColAlignCenter>
                  {Array(5).fill(0).map((el) => (
                    <SetMargin key={el} mt={10}>
                      <Tag key={el} primary>
                        Mon 15-20
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
