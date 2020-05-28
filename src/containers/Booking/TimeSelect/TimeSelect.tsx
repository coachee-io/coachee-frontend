import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {Button} from '../../../components/Form/styled'
import Flex, {Col} from '../../../components/Layout/Flexbox'

import {minWidthSize} from '../../../ui/global/mediaQuery'

import {
  getDayOfTheWeek,
} from '../helpers'

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  ${minWidthSize.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}
`

interface Props {
  time: any,
  onClick: any,
  availabilityMap: any | null,
  weekDay: Moment
}

class TimeSelect extends PureComponent<Props> {
  render() {
    const {
      time, availabilityMap, weekDay, onClick,
    } = this.props
    return (
      <Col xs={12}>
        <Flex flexDirection="row" justifyContent="center">
          <Grid>
            {availabilityMap && availabilityMap[getDayOfTheWeek(weekDay)].map((day: any, i: number) => (
              <Button
                key={`${getDayOfTheWeek(weekDay)}-${day.label}-${i}`}
                onClick={() => onClick(day)}
                primary
                hover
                selected={time ? time.label === day.label : false}
                width="120px"
              >
                {`${day.label}`}
              </Button>
            ))}
          </Grid>
        </Flex>
      </Col>
    )
  }
}

export default TimeSelect
