import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import moment, {Moment} from 'moment'

import {DayPickerSingleDateController} from 'react-dates'

import Flex, {Row, Col} from '../../components/Layout/Flexbox'
import {Button} from '../../components/Form'
import ErrorMessage from '../../components/ErrorMessage'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'
import {formatNumber} from '../../utils/formatNumber'

import BookingForm from './BookingForm'
import TimeSelect from './TimeSelect'
import Success from './Success'

import {
  createDateHashMap,
  getFirstAvailableDay,
  getAllAvailableDays,
  createDateFromHoursAndMinutes,
  isDayBlocked,
} from './helpers'

interface LocationState {
  coach: string,
  coachAvailability: string | any,
  program: string | any
}

interface Props extends RouteComponentProps<{}, {}, LocationState> {}

interface State {
  step: 1 | 2 | 3 | number,
  date: Moment | null,
  weekDay: number | null,
  selectedDate: number | string | null | any,
  time: string | number | null | any
  focusedDate: boolean,
  availabilityWeekDayMap: any | {} | null,
  allAvailableDays: number[] |null,
  error: boolean
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
      error: false,
    }
  }

  componentDidMount = () => {
    const coachAvailability = this.getCoachAvailability()
    const hashMap = createDateHashMap(coachAvailability)
    const firstAvailableDay = getFirstAvailableDay(hashMap)
    if (hashMap) {
      this.setState({
        date: moment().day(firstAvailableDay),
        availabilityWeekDayMap: hashMap,
        weekDay: firstAvailableDay,
        allAvailableDays: getAllAvailableDays(hashMap),
      })
    } else {
      this.setState({error: true})
    }
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
    const selectedDate = createDateFromHoursAndMinutes(date, time.hour, time.minutes)
    this.setState({time, selectedDate})
  }

  handleStepChange = () => {
    this.setState((prevState) => ({step: prevState.step + 1}))
  }

  getCoachAvailability = (): any | null => {
    const {location} = this.props
    if (!location.state) {
      return null
    }
    const {coachAvailability} = location.state

    if (coachAvailability) {
      return coachAvailability
    }
    return null
  }

  getCoach = (): any | null => {
    const {location} = this.props
    if (!location.state) {
      return null
    }
    const {coach} = location.state

    if (coach) {
      return coach
    }
    return null
  }

  getProgram = (): any | null => {
    const {location} = this.props
    if (!location.state) {
      return null
    }
    const {program} = location.state
    if (program) {
      return program
    }
    return null
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
      error,
    } = this.state

    const coach = this.getCoach()
    const program = this.getProgram()

    if (error) {
      return <ErrorMessage />
    }

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
                  isDayBlocked={(day) => isDayBlocked(day, allAvailableDays)}
                  isOutsideRange={(day) => moment().diff(day) > 0}
                  onFocusChange={({focused}: {focused: boolean | null}) => this.handleFocusChange(focused)}
                  numberOfMonths={1}
                  hideKeyboardShortcutsPanel
                  noBorder
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
          <Row marginTop="30px">
            <Col xs={12}>
              <Flex flexDirection="row" justifyContent="center">
                <Button onClick={this.handleStepChange} primary disabled={!date || !selectedDate}>
                  Next
                </Button>
              </Flex>
            </Col>
          </Row>
        </>
      )
    }

    if (step === 2) {
      return (
        <Row marginTop="30px">
          <Col xs={12} md={6}>
            <H2 textAlign="center">
              Review your details
            </H2>
            <Para bold>
              Your intro call date and time needs to be confirmed first by
              {' '}
              {`${coach.firstName} ${coach.lastName}`}
              , who will be in touch.
            </Para>
            <Para>
              <b>Your free intro call: </b>
              {moment(selectedDate).format('DD/MM/YYYY')}
            </Para>
            <Para>
              <b>Programme: </b>
              {program.name}
            </Para>
            <Para>
              <b>Sessions: </b>
              {`${program.sessions} sessions, ${program.duration} minutes`}
            </Para>
            <Para>
              <b>Price: </b>
              {`£${formatNumber(program.totalPrice)}`}
            </Para>
          </Col>
          <Col xs={12} md={6}>
            <BookingForm
              introCall={selectedDate}
              coachId={coach.id}
              programId={program.id}
              onStepChange={this.handleStepChange}
            />
          </Col>
        </Row>
      )
    }

    return (
      <Success />
    )
  }
}

export default Booking
