import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, Input, SubmitButton,
} from '../../components/Form'

import Flex from '../../components/Layout/Flexbox'
import Confirmation from '../../components/Confirmation'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

import PlatformAPI from '../../services/public/platform'

const schema = object().shape({
  email: string()
    .trim()
    .required('Email is required')
    .email(),
})

interface Props {}

interface State {
  isLoading: boolean,
  isSuccessful: boolean,
  error: Error | null
}

class ForgotPassword extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: false,
      isSuccessful: false,
      error: null,
    }
  }

  onSubmit = (values: any) => {
    const {email} = values
    PlatformAPI.forgotPassword(email)
      .then(() => {
        this.setState({isSuccessful: true})
      })
      .catch((error) => {
        this.setState({error})
      })
  }

  render() {
    const {isLoading, isSuccessful, error} = this.state

    if (isSuccessful) {
      return (
        <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
          <Confirmation
            heading="Check your inbox"
            text="We have sent you a link to reset your password"
          />
        </Flex>
      )
    }

    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={this.onSubmit}
                validationSchema={schema}
              >
                {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <>
                    <Form onSubmit={handleSubmit} maxWidth={450}>
                      <H2>
                        Forgot your password?
                      </H2>
                      <Para>
                        Enter your email address and we will send you instructions to reset it.
                      </Para>
                      <Input
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email}
                        errorMessage={errors.email}
                      />
                      <Flex width="100%" flexDirection="row" marginTop="15px">
                        <SubmitButton
                          isLoading={isLoading}
                          error={error}
                          accent
                          loadingText="Loading..."
                          defaultText="Login"
                        />
                      </Flex>
                    </Form>
                  </>
                )}
              </Formik>
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default ForgotPassword
