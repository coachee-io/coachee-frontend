import React, {PureComponent} from 'react'
import {string, object} from 'yup'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
  Form,
} from 'formik'

import {
  StyledLabel, StyledInput, SubmitButton, ErrorMessage, ErrorAlertCircle,
} from '.'

import Flex from '../Layout/Flexbox'

import {RegularRouterLink} from '../Routing'

const schema = object().shape({
  email: string()
    .trim()
    .required('Email is required')
    .email(),
  password: string()
    .trim()
    .required('Password is required')
    .min(8, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
})


interface Props {
  isLoading: boolean,
  error: Error | null,
  forgottenPasswordURL: string,
  submitButtonText: string,
  submitButtonPrimaryColour?: boolean,
  submitButtonAccentColour?: boolean,
  onSubmit: (values: any) => void
}

class Login extends PureComponent<Props> {
  render() {
    const {
      isLoading, error, onSubmit, forgottenPasswordURL, submitButtonText,
      submitButtonPrimaryColour, submitButtonAccentColour,
    } = this.props

    return (
      <Row>
        <Col xs={12}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            {({
              values, errors, touched, handleChange, handleBlur, handleSubmit,
            }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <Flex width="100%" flexDirection="column" marginTop="30px">
                    <StyledLabel htmlFor="email">Email:</StyledLabel>
                    <StyledInput
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email && touched.email}
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage>
                        {errors.email}
                        {' '}
                        <ErrorAlertCircle />
                      </ErrorMessage>
                    )}
                    <StyledLabel htmlFor="password">Password:</StyledLabel>
                    <StyledInput
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage>
                        {errors.password}
                        {' '}
                        <ErrorAlertCircle />
                      </ErrorMessage>
                    )}
                    <RegularRouterLink to={forgottenPasswordURL} small bold underline>
                      Forgotten password?
                    </RegularRouterLink>
                    <SubmitButton
                      isLoading={isLoading}
                      error={error}
                      accent={submitButtonAccentColour}
                      primary={submitButtonPrimaryColour}
                      loadingText="Loading..."
                      defaultText={submitButtonText}
                    />
                  </Flex>
                </Form>
              </>
            )}
          </Formik>
        </Col>
      </Row>
    )
  }
}

export default Login
