import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {
  Formik,
} from 'formik'

import {
  Form, Checkbox, StyledLabel, StyledSelect, ErrorMessage, ErrorAlertCircle, Button, Input,
} from '../../../components/Form'

import {H2} from '../../../ui/headings'

import schema from './validationSchema'


const options = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Web',
    label: 'Web',
  },
]


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
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                aboutUs: '',
                promotional: false,
                terms: false,
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
                    <Input
                      label="First name"
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      error={errors.firstName && touched.firstName}
                      errorMessage={errors.firstName}
                    />
                    <Input
                      label="Last name"
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      error={errors.lastName && touched.lastName}
                      errorMessage={errors.lastName}
                    />
                    <Input
                      label="Email"
                      id="email"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email && touched.email}
                      errorMessage={errors.email}
                    />
                    <Input
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={errors.password && touched.password}
                      errorMessage={errors.password}
                    />
                    <Input
                      label="Confirm password"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      error={errors.confirmPassword && touched.confirmPassword}
                      errorMessage={errors.confirmPassword}
                    />
                    <StyledLabel htmlFor="hearAboutUs">How did you hear about us?</StyledLabel>
                    <StyledSelect
                      id="hearAboutUs"
                      name="aboutUs"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.aboutUs}
                    >
                      {options.map((option) => (
                        <option key={option.label} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </StyledSelect>
                    {errors.aboutUs && touched.aboutUs && (
                      <ErrorMessage>
                        {errors.aboutUs}
                        {' '}
                        <ErrorAlertCircle />
                      </ErrorMessage>
                    )}
                    <Checkbox
                      label="Receive news and promotional emails"
                      id="promotional"
                      name="promotional"
                      value={values.promotional}
                      checked={values.promotional}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Checkbox
                      label="I agree to Terms and Conditions"
                      id="terms"
                      name="terms"
                      value={values.terms}
                      checked={values.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.terms && touched.terms}
                      errorMessage={errors.terms}
                    />
                    <Button accent type="submit">
                          Sign up
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

export default SignUpCoachee
