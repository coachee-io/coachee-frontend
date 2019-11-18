import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik, FieldArray,
} from 'formik'


import {
  Form, Input, Checkbox, RadioGroup, Button, StyledLabel, ErrorMessage, ErrorAlertCircle,
} from '../../../../components/Form'

import {FlexColAlignCenter, FlexRowJustifyCenter} from '../../../../components/Layout/Flexbox'
import {H2} from '../../../../ui/headings'
import SetMargin from '../../../../components/Layout/SetMargin'

import schema from './validationSchema'

import {
  termsAndConditions, coachingCategories, ICoachingCategory,
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
                        <StyledLabel>
                        What are your areas of expertise?
                        </StyledLabel>
                        <FieldArray
                          name="expertise"
                          render={(arrayHelpers) => (
                            <>
                              {coachingCategories.map((category: ICoachingCategory) => (
                                <>
                                  <Checkbox
                                    id={category.id}
                                    value={category.id}
                                    checked={values.expertise.includes(category.id as never)}
                                    name="expertise"
                                    label={category.name}
                                    onChange={(e: any) => {
                                      if (e.target.checked) {
                                        arrayHelpers.push(category.id)
                                      } else {
                                        const idx = values.expertise.indexOf(category.id as never)
                                        arrayHelpers.remove(idx)
                                      }
                                    }}
                                  />
                                </>
                              ))}
                            </>
                          )}
                        />
                        <>
                          {typeof errors.expertise === 'string' && touched.expertise && (
                            <ErrorMessage>
                              {errors.expertise}
                              <ErrorAlertCircle />
                            </ErrorMessage>
                          )}
                        </>
                        <Input
                          label="What are your coaching certifications?"
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
                          id="aboutYou"
                          name="aboutYou"
                          type="text"
                          value={values.aboutYou}
                          error={errors.aboutYou && touched.aboutYou}
                          errorMessage={errors.aboutYou}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          label="Tell us more about each of your programmes"
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
                          label="We have intro calls with all our coaches to get to know you, understand your
                        availability and explain our payments process. When would you be available for a 30 minutes call in the next week?"
                          id="availability"
                          name="availability"
                          type="text"
                          value={values.availability}
                          error={errors.availability && touched.availability}
                          errorMessage={errors.availability}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <RadioGroup
                          label="Please read and accept our terms and conditions and privacy policy."
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
