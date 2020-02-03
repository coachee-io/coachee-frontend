import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {number} from 'yup'
import {
  CardCvcElement,
  ReactStripeElements,
} from 'react-stripe-elements'

import {StyledLabel, Hidden} from '../../Form'

import {style, ElementWrapper} from '../styled'

interface State {
  errorMsg?: string | any,
  isComplete: boolean,
  hiddenValue?: number
}

class CardCvc extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isComplete: false,
    }
  }

  handleChange = (obj: ReactStripeElements.ElementChangeResponse) => {
    const {error, empty, complete} = obj
    const {hiddenValue} = this.state
    const currentHiddenValue = hiddenValue || 0

    let errorMsg: string | undefined
    if (error) {
      errorMsg = error.message
    } else if (empty) {
      errorMsg = 'This is required'
    }

    this.setState({
      errorMsg,
      isComplete: complete,
      hiddenValue: empty ? undefined : currentHiddenValue + 1,
    })
  }

  getValidation = () => {
    const {isComplete, errorMsg} = this.state
    return number()
      .required('This is required.')
      .test('valid', errorMsg, () => isComplete)
  }


  render() {
    const {errorMsg, hiddenValue} = this.state
    return (
      <>
        <Row>
          <Col xs={12}>
            <StyledLabel htmlFor="stripeCardExpiry">
              CVC
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ElementWrapper error={!!errorMsg}>
              <CardCvcElement
                id="stripeCardCvc"
                style={style}
                onChange={this.handleChange}
              />
            </ElementWrapper>
            <Hidden
              id="hiddenStripeCardCvc"
              name="stripeCardNumber"
              value={hiddenValue}
              error={this.getValidation()}
              errorMessage={errorMsg}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default CardCvc
