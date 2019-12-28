import React, {PureComponent} from 'react'
import moment, {Moment} from 'moment'

import {DayPickerSingleDateController} from 'react-dates'
import {Col} from 'react-bootstrap'

import Flex, {Row} from '../../components/Layout/Flexbox'
import {Weekdays} from '../../enums/Weekdays'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

import BookingForm from './BookingForm'


interface State {
  step: 1 | 2 | 3 | number,
  date: Moment | null,
  day: number | null,
  selectedDate: any,
  time: string | number | null | any
  focusedDate: boolean,
  availabilityWeekDayMap: {} | null
}


class Booking extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      step: 1,
      date: null,
      selectedDate: null,
      day: null,
      focusedDate: false,
      time: null,
      availabilityWeekDayMap: null,
    }
  }

  componentDidMount = () => {
    /**
     * Build hashmap based on the coach availability
     * {
     *  Mon: [],
     *
     * }
     */
    const availability = [
      {weekDay: 1, start: 10, end: 12},
      // {weekDay: 3, start: 14, end: 15},
      // {weekDay: 5, start: 17, end: 20},
    ]
    this.setState({availabilityWeekDayMap: this.createDateHashMap(availability)})
  }


  handleDateChange = (date: Moment | null) => {
    console.log(date)
    const day = date ? moment(date).day() : null
    this.setState({date, day})
  }

  handleFocusChange = (focused: boolean | null) => {
    this.setState({focusedDate: !!focused})
  }

  handleTimeChange = (value: any) => {
    const {availabilityWeekDayMap, day} = this.state
    console.log(availabilityWeekDayMap, day)
    console.log(value)
  }

  getDayOfTheWeek = (day: number) => {
    const weekDay = Weekdays[day]
    console.log(weekDay)
  }

  handleStepChange = () => {

  }

  getAvailableDays = () => {

  }

  createDateHashMap = (availability: any[]): {} => {
    const hashmap: {
      [index:string]: any[]
    } = {}
    availability.forEach((day: any) => {
      const {weekDay, start, end} = day
      hashmap[Weekdays[weekDay]] = this.createTimeRanges(start, end)
    })
    console.log(hashmap)
    return hashmap
  }

  createTimeRanges = (start: number, end: number): any[] => {
    const timeRanges: any[] = []
    for (let i = start; i < end; i += 1) {
      let newStart = i
      while (parseInt(newStart.toString(), 10) < end) {
        const time: any = {}
        let minutes = null
        time.start = newStart
        time.end = newStart + 0.50
        time.hours = newStart

        if (start < time.end && time.end < start + 1) {
          minutes = 30
        } else {
          minutes = 0
        }
        time.minutes = minutes
        timeRanges.push(time)

        newStart += 0.50
        console.log('Here?')
      }
    }
    return timeRanges
  }

  render() {
    const {
      step, selectedDate, time, date, focusedDate,
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
                    const found = [1, 3, 5].find((availableDay) => moment(day).day() === availableDay)
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
          <Row />
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
