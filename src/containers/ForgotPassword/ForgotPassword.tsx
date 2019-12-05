import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, StyledInput, StyledLabel, ErrorMessage, ErrorAlertCircle, Button,
} from '../../components/Form'
import {H2} from '../../ui/headings'
import {Para} from '../../ui/labels'

const schema = object().shape({
  email: string()
    .trim()
    .required('Email is required')
    .email(),
})


class ForgotPassword extends PureComponent {
  onSubmit = (values: any) => {
    // API call here
    console.log(values)
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
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
                    <Button primary type="submit">
                        Forgot password
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </Col>
        </Row>
      </>
    )
  }
}

export default ForgotPassword
