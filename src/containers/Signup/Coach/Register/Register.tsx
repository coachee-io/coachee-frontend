import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'


import {
  Form, Input, CheckboxList, RadioGroup, Button,
} from '../../../../components/Form'

import {FlexColAlignCenter, FlexRowJustifyCenter} from '../../../../components/Layout/Flexbox'
import {H2} from '../../../../ui/headings'
import SetMargin from '../../../../components/Layout/SetMargin'

import schema from './validationSchema'

import {
  termsAndConditions, coachingCategories,
} from './options'


class CoachSignup extends PureComponent {
  onSubmit = (values: any) => {
    console.log(values)
  }

  render() {
    return (
      <>
        <SetMargin mt={30}>
          <Row>
            <Col xs={12}>
              <FlexColAlignCenter>
                <Formik
                  initialValues={{
                    name: '',
                    location: '',
                    email: '',
                    phone: '',
                    aboutUs: '',
                    expertise: [],
                    certificates: '',
                    aboutYou: '',
                    programmes: '',
                    availability: '',
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
                          label="First and last name"
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          error={errors.name && touched.name}
                          errorMessage={errors.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="Location (city and country)"
                          id="location"
                          name="location"
                          type="text"
                          value={values.location}
                          error={errors.location && touched.location}
                          errorMessage={errors.location}
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
                          name="expertise"
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
                          id="certificates"
                          name="certificates"
                          type="text"
                          component="textarea"
                          value={values.certificates}
                          error={errors.certificates && touched.certificates}
                          errorMessage={errors.certificates}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="Tell us about you"
                          helperText="We will include this at the top of your profile page.
                          What makes you the best coach out there? We want to know!"
                          id="aboutYou"
                          name="aboutYou"
                          type="text"
                          component="textarea"
                          value={values.aboutYou}
                          error={errors.aboutYou && touched.aboutYou}
                          errorMessage={errors.aboutYou}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="Tell us more about each of your programmes"
                          helperText="Include name of programme, number and length of your sessions,
                          total price of the programme and a description
                          of what makes you stand out in this field and most of all,
                          what results your coachees can expect to achieve!"
                          id="programmes"
                          name="programmes"
                          type="text"
                          component="textarea"
                          value={values.programmes}
                          error={errors.programmes && touched.programmes}
                          errorMessage={errors.programmes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="When would you be available for a 30 minutes call in the next week?"
                          helperText="We have intro calls with all our coaches to get to know you, understand your
                          availability and explain our payments process."
                          id="availability"
                          name="availability"
                          type="text"
                          value={values.availability}
                          error={errors.availability && touched.availability}
                          errorMessage={errors.availability}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="Are you VAT registered? If yes, please give us your VAT number"
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
                          helperText="This includes accepting that you will always offer an intro call
                            to all your coachees; that you will always let us know via email when a coaching session
                            is taking place so we can process your payment up to 48 hours after each session; and you accept that coachee.io
                            will take a 15% fee of the total price of your coaching programme, no other fees.
                            We will include more details in your
                            welcome pack after your registration is confirmed."
                          name="termsAndConditions"
                          value={values.termsAndConditions}
                          error={errors.termsAndConditions && touched.termsAndConditions}
                          errorMessage={errors.termsAndConditions}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          list={termsAndConditions}
                        />
                        <FlexRowJustifyCenter>
                          <Button accent type="submit">
                          Sign up
                          </Button>
                        </FlexRowJustifyCenter>
                      </Form>
                    </>
                  )}
                </Formik>
              </FlexColAlignCenter>
            </Col>
          </Row>
        </SetMargin>
      </>
    )
  }
}

export default CoachSignup
