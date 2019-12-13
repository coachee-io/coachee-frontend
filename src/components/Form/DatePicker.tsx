import React, {PureComponent, useState} from 'react'
import moment, {Moment} from 'moment'
import {Field, FieldProps} from 'formik'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import {
  StyledLabel, ErrorMessage, ErrorAlertCircle,
} from './styled'

import {Para} from '../../ui/labels'

interface DatePickerWithFormikProps extends FieldProps {
  label: string,
  id: string,
  helperText?: string | undefined,
}

const DatePickerWithFormik = ({
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

  const date = dateToMoment(form.values.availability)
  return (
    <>
      <div style={{display: 'inline-block', position: 'relative'}}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {helperText && <Para small>{helperText}</Para>}
        {/* eslint-disable react/destructuring-assignment */}
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
        />
        {/* eslint-enable react/destructuring-assignment */}
      </div>
      {form.errors.availability && (
      <ErrorMessage>
        {form.errors.availability}
        <ErrorAlertCircle />
      </ErrorMessage>
      )}
    </>
  )
}

interface Props {
  label: string,
  id: string,
  helperText?: string | undefined,
}

class DatePicker extends PureComponent<Props> {
  render() {
    return (
      <Field component={DatePickerWithFormik} {...this.props} />
    )
  }
}

export default DatePicker
