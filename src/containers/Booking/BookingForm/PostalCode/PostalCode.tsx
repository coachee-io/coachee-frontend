import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {string} from 'yup'

import {StyledLabel, ErrorMessage} from 'components/Form'
import {Input} from './styled'

const schema = string().trim()
  .required('This is required')

interface Props {
  value: string | undefined,
  onChange: (value: string) => void
}

interface State {
  error: boolean,
  errorMsg: string | null
}

class PostalCode extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: false,
      errorMsg: null,
    }
  }

  handleChange = async (e: any) => {
    const {onChange} = this.props
    const {value} = e.target
    await onChange(value)
    await schema.validate(value)
      .then(() => {
        this.setState({error: false, errorMsg: null})
      })
      .catch((err) => {
        this.setState({error: true, errorMsg: err.message})
      })
  }


  render() {
    const {value} = this.props
    const {error, errorMsg} = this.state
    return (
      <>
        <Row>
          <Col xs={12}>
            <StyledLabel htmlFor="stripePostCode">
              Post Code
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Input
              id="stripeCardPostalCode"
              onChange={this.handleChange}
              value={value}
              error={error}
            />
            {error && (
            <ErrorMessage>
              {errorMsg}
            </ErrorMessage>
            )}
          </Col>
        </Row>
      </>
    )
  }
}

export default PostalCode
