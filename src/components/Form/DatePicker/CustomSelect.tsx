import React, {FC} from 'react'
import moment from 'moment'

import Flex from 'components/Layout/Flexbox'

import {StyledSelect} from './styled'

const getYears = () => {
  const years = []
  for (let i = moment().year() - 100; i <= moment().year(); i++) {
    years.push(i)
  }
  return years
}

const getMonths = () => moment.months()

interface Props {
  month: moment.Moment,
  onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
  onYearSelect: (currentMonth: moment.Moment, newYearVal: string) => void;
}

const CustomSelect: FC<Props> = ({month, onMonthSelect, onYearSelect}: Props) => (
  <Flex justifyContent="center">
    <div>
      <StyledSelect value={month.month()} onChange={(e) => onMonthSelect(month, e.target.value)}>
        {getMonths().map((label, value) => (
          <option value={value} key={`${label}-${value}`}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </div>
    <div>
      <StyledSelect value={month.year()} onChange={(e) => onYearSelect(month, e.target.value)}>
        {getYears().map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </div>
  </Flex>
)

export default CustomSelect
