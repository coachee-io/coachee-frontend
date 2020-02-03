import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'

import {
  Form, Input, CheckboxList, RadioGroup, SubmitButton, DatePicker,
} from '../../../../components/Form'
import Flex from '../../../../components/Layout/Flexbox'
import Confirmation from '../../../../components/Confirmation'

import {H2} from '../../../../ui/headings'

import {CoachesService} from '../../../../services/public'

import schema from './validationSchema'

import {
  termsAndConditions, coachingCategories,
} from './options'

interface Props {}

interface State {
  successful: boolean,
  isLoading: boolean,
  error: Error | null
}

class CoachSignup extends PureComponent<Props, State> {
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
      firstName: values.firstName,
      lastName: values.lastName,
      introCall: values.introCall,
      email: values.email,
      password: values.password,
      phone: values.phone,
      tags: values.tags.join(','),
      city: values.city,
      country: values.country,
      description: values.description,
      textCertifications: values.textCertifications,
      textPrograms: values.textPrograms,
    }
    await this.setState({isLoading: true, error: null, successful: false})
    CoachesService.createCoach(data)
      .then(() => this.setState({successful: true}))
      .catch((error: Error) => this.setState({error, isLoading: false}))
  }

  render() {
    const {isLoading, successful, error} = this.state

    if (successful) {
      return (
        <Confirmation
          heading="Congratulations for taking this step!"
          text="We will be in touch soon to confirm your details!"
        />
      )
    }

    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  city: '',
                  country: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  phone: '',
                  aboutUs: '',
                  tags: [],
                  textCertifications: '',
                  description: '',
                  textPrograms: '',
                  introCall: null,
                  vat: '',
                  termsAndConditions: null,
                }}
                onSubmit={this.onSubmit}
                validationSchema={schema}
              >
                {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <>
                    <Form onSubmit={handleSubmit} maxWidth={650}>
                      <H2>
                        Become a coach
                      </H2>
                      <Input
                        label="First name"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        error={errors.firstName && touched.firstName}
                        errorMessage={errors.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="Last name"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        error={errors.lastName && touched.lastName}
                        errorMessage={errors.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="City"
                        id="city"
                        name="city"
                        type="text"
                        value={values.city}
                        error={errors.city && touched.city}
                        errorMessage={errors.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="Country"
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        error={errors.country && touched.country}
                        errorMessage={errors.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="Email address"
                        id="email"
                        name="email"
                        type="text"
                        value={values.email}
                        error={errors.email && touched.email}
                        errorMessage={errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                      <Input
                        label="Phone number"
                        id="phone"
                        name="phone"
                        type="text"
                        value={values.phone}
                        error={errors.phone && touched.phone}
                        errorMessage={errors.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <CheckboxList
                        name="tags"
                        label="What are your areas of expertise?"
                        helperText="Select all that apply, and please include areas that you have been certified in."
                        values={values}
                        list={coachingCategories}
                        errors={errors}
                        touched={touched}
                      />
                      <Input
                        label="What are your coaching certifications?"
                        helperText="Include all that apply, as well as any other studies you have that you think are relevant.
                          We will ask for proof of all your certifications via email before you're confirmed as a coach."
                        id="textCertifications"
                        name="textCertifications"
                        type="text"
                        component="textarea"
                        value={values.textCertifications}
                        error={errors.textCertifications && touched.textCertifications}
                        errorMessage={errors.textCertifications}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="Tell us about you"
                        helperText="We will include this at the top of your profile page.
                          What makes you the best coach out there? We want to know!"
                        id="description"
                        name="description"
                        type="text"
                        component="textarea"
                        value={values.description}
                        error={errors.description && touched.description}
                        errorMessage={errors.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        label="Tell us more about each of your programmes"
                        helperText="Include name of programme, number and length of your sessions,
                          total price of the programme and a description
                          of what makes you stand out in this field and most of all,
                          what results your coachees can expect to achieve!"
                        id="textPrograms"
                        name="textPrograms"
                        type="text"
                        component="textarea"
                        value={values.textPrograms}
                        error={errors.textPrograms && touched.textPrograms}
                        errorMessage={errors.textPrograms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <DatePicker
                        label="When would you be available for a 30 minutes call in the next week?"
                        helperText="We have intro calls with all our coaches to get to know you, understand your
                          availability and explain our payments process."
                        id="introCall"
                      />
                      <Input
                        label="Are you VAT registered? If yes, please give us your VAT number."
                        id="vat"
                        name="vat"
                        type="text"
                        value={values.vat}
                        error={errors.vat && touched.vat}
                        errorMessage={errors.vat}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <RadioGroup
                        label="Please read and accept our terms and conditions and privacy policy."
                        helperText={(
                          <span>
This includes accepting that you will
                            always offer an
                            {' '}
                            <strong>intro call</strong>
                            {' '}
                            to all your coachees; that you will always let us know via email when a coaching session
                            is taking place so we can process your payment up to
                            {' '}
                            <strong>48 hours</strong>
                            {' '}
after each session; and you accept that coachee.io
                will take a
                            {' '}
                            <strong>15% fee</strong>
                            {' '}
of the total price of your coaching programme, no other fees.
                            We will include more details in your
                            welcome pack after your registration is confirmed.
                          </span>
)}
                        name="termsAndConditions"
                        value={values.termsAndConditions}
                        error={errors.termsAndConditions && touched.termsAndConditions}
                        errorMessage={errors.termsAndConditions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        list={termsAndConditions}
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

export default CoachSignup
