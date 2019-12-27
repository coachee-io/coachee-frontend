import React, {PureComponent} from 'react'
import moment, {Moment} from 'moment'
import {ReactStripeElements} from 'react-stripe-elements'
import {DayPickerSingleDateController} from 'react-dates'
import {Col} from 'react-bootstrap'

import Flex, {Row} from '../../components/Layout/Flexbox'

import {Pulse} from '../../components/Skeleton'
import {Weekdays} from '../../enums/Weekdays'

import {SubmitButton} from '../../components/Form'
import {Button} from '../../components/Form/styled'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

import StripeForm from './Stripe'

interface State {
  step: 1 | 2 | 3 | number,
  isLoading: boolean,
  error: any | null,
  stripeApiKey?: string,
  stripeClientSecret?: string,
  selectedDate: Moment | null
  focusedDate: boolean,
  selectedTime: string | number | null | any
}


class Booking extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      step: 1,
      isLoading: false,
      error: null,
      stripeApiKey: 'pk_test_12345',
      stripeClientSecret: '',
      selectedDate: null,
      focusedDate: false,
      selectedTime: null,
    }
  }

  componentDidMount = () => {
    /**
     * Make API call to the BE,
     * Send the access token and the program ID,
     * get apiKey and clientSecret,
     * set this component state and pass it down to the stripe form the api key
     */
  }

  onSubmit = (stripe?: ReactStripeElements.StripeProps) => {
    const {stripeClientSecret} = this.state
    console.log(stripe)
  }

  handleDateChange = (date: Moment | null) => {
    this.setState({selectedDate: date})
  }

  handleFocusChange = (focused: boolean | null) => {
    this.setState({focusedDate: !!focused})
  }

  handleTimeChange = (value: any) => {
    console.log(value)
  }

  getDayOfTheWeek = (day: number) => {
    const weekDay = Weekdays[day]

    console.log(weekDay)
  }

  render() {
    const {
      isLoading, error, stripeApiKey, step, selectedDate, selectedTime, focusedDate,
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
                  date={selectedDate}
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
              {!stripeApiKey && (
                <>
                  <Row>
                    <Col xs={12}>
                      <Pulse height={36} />
                    </Col>
                  </Row>
                  <Row marginTop="30px">
                    <Col xs={12}>
                      <Pulse height={36} />
                    </Col>
                  </Row>
                  <Row marginTop="30px">
                    <Col xs={12} md={6}>
                      <Pulse height={36} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Pulse height={36} />
                    </Col>
                  </Row>
                  <Row marginTop="30px">
                    <Col xs={12} md={6} />
                    <Col xs={12} md={6}>
                      <Pulse height={36} />
                    </Col>
                  </Row>
                </>
              )}
              {stripeApiKey && (
                <>
                  <H2 textAlign="center">
                  Enter your card details:
                  </H2>
                  <StripeForm stripeApiKey={stripeApiKey}>
                    {(stripe) => (
                      <Row>
                        <Col xs={12} md={6} />
                        <Col xs={12} md={6}>
                          <SubmitButton
                            onClick={() => this.onSubmit(stripe)}
                            isLoading={isLoading}
                            error={error}
                            accent
                            loadingText="Adding your card"
                            defaultText="Confirm"
                            width="100%"
                          />
                        </Col>
                      </Row>
                    )}
                  </StripeForm>
                </>
              )}
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
