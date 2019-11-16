import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {
  string, object, boolean, array,
} from 'yup'

import {
  Form, StyledLabel, StyledInput, StyledSelect, ErrorMessage, ErrorAlertCircle, Button,
} from '../../../components/Form'

import {FlexColAlignCenter, FlexRowJustifyCenter} from '../../../components/Layout/Flexbox'
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
    .min(1, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
  confirmPassword: string()
    .required('Please enter a password')
    .test('passwords-match', "Passwords don't match", function (value) {
      return this.parent.password === value
    }),
  hearAboutUs: string()
    .notRequired(),
  terms: array()
    .required('Please select terms and conditions'),
})

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
            <FlexColAlignCenter>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  aboutUs: '',
                  terms: [],
                  promotional: [],
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
                      <StyledLabel htmlFor="firstName">First name:</StyledLabel>
                      <StyledInput
                        id="firstName"
                        name="firstName"
                        type="text"
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
                      <StyledLabel htmlFor="lastName">Last name:</StyledLabel>
                      <StyledInput
                        id="lastName"
                        name="lastName"
                        type="text"
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
                      <StyledLabel htmlFor="email">Email:</StyledLabel>
                      <StyledInput
                        id="email"
                        name="email"
                        type="text"
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
                      <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
                      <StyledInput
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
                      <StyledLabel htmlFor="promotional">
                        <StyledInput
                          id="promotional"
                          name="promotional"
                          type="checkbox"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        Receive news and promotional emails
                      </StyledLabel>
                      <StyledLabel htmlFor="terms">
                        <StyledInput
                          id="terms"
                          name="terms"
                          type="checkbox"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.terms && touched.terms}
                        />
                        I agree to Terms and Conditions
                      </StyledLabel>
                      {errors.terms && touched.terms && (
                      <ErrorMessage>
                        {errors.terms}
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
            </FlexColAlignCenter>
          </Col>
        </Row>
      </>
    )
  }
}

export default SignUpCoachee
