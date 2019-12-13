import React, {PureComponent} from 'react'
import moment, {Moment} from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

interface Props {
  onChange?: any,
  onFocus?: any,
}

interface State {
  date: Moment | null,
  focused: boolean
}

class DatePicker extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      date: moment(),
      focused: false,
    }
  }

  handleDateChange = async (value: Moment | null) => {
    const {onChange} = this.props
    await this.setState({date: value})
    if (onChange) {
      onChange(value)
    }
  }

  handleFocusChange = async (focused: boolean) => {
    const {onFocus} = this.props
    await this.setState({focused})
    if (onFocus) {
      onFocus(focused)
    }
  }


  render() {
    return (
      /* eslint-disable react/destructuring-assignment */
      <SingleDatePicker
        date={this.state.date}
        onDateChange={this.handleDateChange}
        focused={this.state.focused}
        numberOfMonths={1}
        onFocusChange={({focused}: any) => this.handleFocusChange(focused)}
        id="react-dates-picker"
      />
      /* eslint-enable react/destructuring-assignment */
    )
  }
}

export default DatePicker
