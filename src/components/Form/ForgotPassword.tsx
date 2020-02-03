import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, Input, SubmitButton,
} from '.'

import Flex from '../Layout/Flexbox'
import Confirmation from '../Confirmation'

import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

const schema = object().shape({
  email: string()
    .trim()
    .required('Email is required')
    .email(),
})

interface Props {
  isLoading: boolean,
  isSuccessful: boolean,
  error: Error | null,
  onSubmit: (values: any) => void
}

class ForgotPassword extends PureComponent<Props> {
  render() {
    const {
      isLoading, isSuccessful, error, onSubmit,
    } = this.props

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
                onSubmit={(values: any) => onSubmit(values)}
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
