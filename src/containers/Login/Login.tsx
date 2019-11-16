import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, StyledLabel, StyledInput, Button, ErrorMessage, ErrorAlertCircle,
} from '../../components/Form'

import SetMargin from '../../components/Layout/SetMargin'
import {UnstyledRouterLink} from '../../components/Routing'
import {FlexColAlignCenter, FlexRowJustifyCenter} from '../../components/Layout/Flexbox'
import {H2} from '../../ui/headings'

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


class Login extends PureComponent {
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
                        Login to your account
                      </H2>
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
                      <SetMargin mt={10}>
                        <UnstyledRouterLink to="/forgot-password" small bold underline>
                          Forgotten password?
                        </UnstyledRouterLink>
                      </SetMargin>
                      <FlexRowJustifyCenter>
                        <Button accent type="submit">
                        Login
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

export default Login
