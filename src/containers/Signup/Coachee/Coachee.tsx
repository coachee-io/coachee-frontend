import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import Form, {
  Input, Label, ErrorMessage, ErrorAlertCircle, Button,
} from '../../../components/Form/Form'
import {FlexboxColAlignCenter, FlexRowJustifyCenter} from '../../../components/Layout/Flexbox'
import {H2} from '../../../ui/headings'

const schema = object().shape({
  firstName: string()
    .required('Please enter your first name')
    .matches(/[a-zA-Z]/, 'Only letters'),
  lastName: string()
    .required('Please enter your last name')
    .matches(/[a-zA-Z]/, 'Only letters'),
  email: string()
    .trim()
    .required('Please enter your email address')
    .email(),
  password: string()
    .trim()
    .required('Please enter a password')
    .min(8, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
  confirmPassword: string()
    .required('Please enter a password')
    .test('passwords-match', "Passwords don't match", function (value) {
      return this.parent.password === value
    }),
})


class SignUpCoachee extends PureComponent {
  onSubmit = (values: any) => {
    // API call here
    console.log(values)
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <FlexboxColAlignCenter>
              <Formik
                initialValues={{
                  firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
                }}
                onSubmit={this.onSubmit}
                validationSchema={schema}
              >
                {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <>
                    <Form onSubmit={handleSubmit} maxWidth={450}>
                      <H2>
                        Create a new account
                      </H2>
                      <Label htmlFor="firstName">First name:</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={errors.firstName && touched.firstName}
                      />
                      {errors.firstName && touched.firstName && (
                        <ErrorMessage>
                          {errors.firstName}
                          {' '}
                          <ErrorAlertCircle />
                        </ErrorMessage>
                      )}
                      <Label htmlFor="lastName">Last name:</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        error={errors.lastName && touched.lastName}
                      />
                      {errors.lastName && touched.lastName && (
                        <ErrorMessage>
                          {errors.lastName}
                          <ErrorAlertCircle />
                        </ErrorMessage>
                      )}
                      <Label htmlFor="email">Email:</Label>
                      <Input
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
                      <Label htmlFor="password">Password:</Label>
                      <Input
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
                      <Label htmlFor="confirmPassword">Confirm Password:</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        error={errors.confirmPassword && touched.confirmPassword}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                      <ErrorMessage>
                        {errors.confirmPassword}
                        {' '}
                        <ErrorAlertCircle />
                      </ErrorMessage>
                      )}
                      <FlexRowJustifyCenter>
                        <Button accent type="submit">
                        SignupCoachee
                        </Button>
                      </FlexRowJustifyCenter>
                    </Form>
                  </>
                )}
              </Formik>
            </FlexboxColAlignCenter>
          </Col>
        </Row>
      </>
    )
  }
}

export default SignUpCoachee
