import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'

import {
  Formik,
} from 'formik'

import Confirmation from 'components/Confirmation'
import {RouterButtonLink } from 'components/Routing'

import {
  Form, Checkbox, StyledLabel, StyledSelect, ErrorMessage, ErrorAlertCircle, SubmitButton, Input,
} from 'components/Form'
import Flex from 'components/Layout/Flexbox'

import {H2} from 'ui/headings'

import {CoacheesService} from 'services/public'

import schema from './validationSchema'

const options = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Google search',
    label: 'Google search',
  },
  {
    value: 'Instagram post by another page',
    label: 'Instagram post by another page',
  },
  {
    value: 'Instagram post by coachee.io',
    label: 'Instagram post by coachee.io',
  },
  {
    value: 'Instagram ad',
    label: 'Instagram ad',
  },
  {
    value: 'Facebook ad',
    label: 'Facebook ad',
  },
  {
    value: 'Someone I know mentioned it',
    label: 'Someone I know mentioned it',
  },
  {
    value: 'Other',
    label: 'Other',
  },
]

interface State {
  successful: boolean,
  isLoading: boolean,
  error: Error | null
}

class SignUpCoachee extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      successful: false,
      isLoading: false,
      error: null,
    }
  }


  onSubmit = async (values: any) => {
    const data = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      acceptTerms: values.acceptTerms,
      reason: values.reason,
      newsletter: values.newsletter,
    }
    await this.setState({isLoading: true, error: null, successful: false})
    CoacheesService.createCoachee(data)
      .then(() => this.setState({successful: true}))
      .catch((error) => this.setState({error, isLoading: false}))
  }

  render() {
    const {isLoading, successful, error} = this.state

    if (successful) {
      return (
        <Confirmation
          heading="You are ready to go!"
          text="Your registration was successful and you are now all set to find your perfect coach."
          type="redirect"
          buttonComponent={(
            <RouterButtonLink to="/coaches" primary>
              Browse all coaches
            </RouterButtonLink>
          )}
        />
      )
    }

    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex
              flexDirection="row"
              justifyContent="center"
              width="100%"
            >
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  reason: '',
                  newsletter: false,
                  acceptTerms: false,
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
                        name="reason"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.reason}
                      >
                        {options.map((option) => (
                          <option key={option.label} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </StyledSelect>
                      {errors.reason && touched.reason && (
                      <ErrorMessage>
                        {errors.reason}
                        {' '}
                        <ErrorAlertCircle />
                      </ErrorMessage>
                      )}
                      <Flex
                        flexDirection="row"
                        width="100%"
                        marginTop="15px"
                      >
                        <Checkbox
                          label="Receive news and promotional emails"
                          id="newsletter"
                          name="newsletter"
                          value={values.newsletter}
                          checked={values.newsletter}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Flex>
                      <Checkbox
                        label="I agree to Terms and Conditions"
                        id="acceptTerms"
                        name="acceptTerms"
                        value={values.acceptTerms}
                        checked={values.acceptTerms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.acceptTerms && touched.acceptTerms}
                        errorMessage={errors.acceptTerms}
                      />
                      <Flex width="100%" flexDirection="row" justifyContent="center">
                        <SubmitButton
                          isLoading={isLoading}
                          error={error}
                          accent
                          loadingText="Creating account..."
                          defaultText="Sign up"
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

export default SignUpCoachee
