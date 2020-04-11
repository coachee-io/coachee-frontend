import React, {PureComponent, useState} from 'react'
import moment, {Moment} from 'moment'
import {Field, FieldProps} from 'formik'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'

import {Para} from '../../../ui/labels'

import {
  StyledLabel, ErrorMessage, ErrorAlertCircle,
} from '../styled'

import CustomSelect from './CustomSelect'

interface DatePickerWithFormikProps extends FieldProps {
  renderMonthElement?: boolean,
  label: string,
  id: string,
  helperText?: string | undefined,
}

const DatePickerWithFormik = ({
  renderMonthElement,
  form,
  helperText,
  id,
  label,
}: DatePickerWithFormikProps) => {
  const [focusedInput, setFocusedInput] = useState(false)

  const handleChange = (value: Moment | null) => {
    const date = value ? parseInt(moment(value).format('x'), 10) : null
    form.setFieldValue(id, date)
  }

  const dateToMoment = (date?: number) => {
    if (date) {
      return moment(date)
    }
    return null
  }

  const date = dateToMoment(form.values[id])
  return (
    <>
      <div>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {helperText && <Para small>{helperText}</Para>}
        {/* eslint-disable react/destructuring-assignment */}
        {renderMonthElement && (
          <SingleDatePicker
            date={date}
            showDefaultInputIcon
            onDateChange={handleChange}
            focused={focusedInput}
            onFocusChange={({focused}: any) => setFocusedInput(focused)}
            numberOfMonths={1}
            isOutsideRange={() => false}
            renderMonthElement={(props) => <CustomSelect {...props} />}
            id={id}
            small
            showClearDate
            displayFormat="DD/MM/YYYY"
          />
        )}
        {!renderMonthElement && (
          <SingleDatePicker
            date={date}
            showDefaultInputIcon
            onDateChange={handleChange}
            focused={focusedInput}
            onFocusChange={({focused}: any) => setFocusedInput(focused)}
            numberOfMonths={1}
            id={id}
            small
            showClearDate
            displayFormat="DD/MM/YYYY"
          />
        )}
        {/* eslint-enable react/destructuring-assignment */}
      </div>
      {form.errors[id] && (
      <ErrorMessage>
        {form.errors[id]}
        <ErrorAlertCircle />
      </ErrorMessage>
      )}
    </>
  )
}

interface Props {
  renderMonthElement?: boolean,
  name: string,
  label: string,
  id: string,
  helperText?: string | undefined,
}

class DatePicker extends PureComponent<Props> {
  render() {
    return (
      <Field
        component={DatePickerWithFormik}
        {...this.props}
      />
    )
  }
}

export default DatePicker
