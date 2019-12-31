import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import moment, {Moment} from 'moment'

import {DayPickerSingleDateController} from 'react-dates'
import {Col} from 'react-bootstrap'

import Flex, {Row} from '../../components/Layout/Flexbox'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

import BookingForm from './BookingForm'
import TimeSelect from './TimeSelect'

import {
  createDateHashMap,
  getFirstAvailableDay,
  getAllAvailableDays,
  createDateFromHoursAndMinutes,
} from './helpers'

interface Props extends RouteComponentProps {}

interface State {
  step: 1 | 2 | 3 | number,
  date: Moment | null,
  weekDay: number | null,
  selectedDate: string | null,
  time: string | number | null | any
  focusedDate: boolean,
  availabilityWeekDayMap: any | {} | null,
  allAvailableDays: number[] |null
}


class Booking extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      step: 1,
      date: null,
      selectedDate: null,
      weekDay: null,
      focusedDate: false,
      time: null,
      availabilityWeekDayMap: null,
      allAvailableDays: null,
    }
  }

  componentDidMount = () => {
    const {location} = this.props
    const {coachAvailability} = location.state
    const hashMap = createDateHashMap(coachAvailability)
    const firstAvailableDay = getFirstAvailableDay(hashMap)
    this.setState({
      date: moment().day(firstAvailableDay),
      availabilityWeekDayMap: hashMap,
      weekDay: firstAvailableDay,
      allAvailableDays: getAllAvailableDays(hashMap),
    })
  }

  handleDateChange = (date: Moment | null) => {
    const weekDay = date ? moment(date).day() : null
    this.setState({
      date, weekDay, time: null, selectedDate: null,
    })
  }

  handleFocusChange = (focused: boolean | null) => {
    this.setState({focusedDate: !!focused})
  }

  handleTimeChange = (time: any) => {
    const {date} = this.state
    const selectedDate = createDateFromHoursAndMinutes(date, time.hours, time.minutes)
    this.setState({time, selectedDate})
  }

  handleStepChange = () => {

  }


  render() {
    const {
      step,
      selectedDate,
      time,
      date,
      weekDay,
      focusedDate,
      availabilityWeekDayMap,
      allAvailableDays,
    } = this.state

    if (step === 1) {
      return (
        <>
          <Row marginTop="30px">
            <Col xs={12}>
              <H2 textAlign="center">
                Select a date and time for your free intro call
              </H2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Flex flexDirection="column" alignItems="center" marginTop="30px">
                <DayPickerSingleDateController
                  date={date}
                  focused={focusedDate}
                  onDateChange={this.handleDateChange}
                  enableOutsideDays
                  isDayBlocked={(day) => {
                    if (!allAvailableDays) {
                      return false
                    }
                    const found = allAvailableDays.find((availableDay) => moment(day).day() === availableDay)
                    return !found
                  }}
                  isOutsideRange={(day) => moment().diff(day) > 0}
                  onFocusChange={({focused}: {focused: boolean | null}) => this.handleFocusChange(focused)}
                  numberOfMonths={1}
                  hideKeyboardShortcutsPanel
                />
              </Flex>
            </Col>
          </Row>
          <Row marginTop="30px">
            <TimeSelect
              time={time}
              weekDay={weekDay}
              availabilityMap={availabilityWeekDayMap}
              onClick={this.handleTimeChange}
            />
          </Row>
        </>
      )
    }

    if (step === 2) {
      return (
        <Flex flexDirection="column" marginTop="30px" width="100%">
          <Row>
            <Col xs={12} md={6}>
              <H2 textAlign="center">
                Review your details
              </H2>
              <Para>
                Your free intro call:
              </Para>
              <Para>
                [Coach Name] will be in touch to confirm your booking
              </Para>
              <Para>
                [ProgrammeName]
              </Para>
              <Para>
                [x sessions, y mins]
              </Para>
              <Para>
                £[price]
              </Para>
            </Col>
            <Col xs={12} md={6}>
              <BookingForm
                selectedDate={selectedDate}
              />
            </Col>
          </Row>
        </Flex>
      )
    }

    return (
      <div>
        Success
      </div>
    )
  }
}

export default Booking
