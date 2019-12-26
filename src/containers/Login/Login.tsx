import React, {PureComponent} from 'react'
import {History} from 'history'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, StyledLabel, StyledInput, SubmitButton, ErrorMessage, ErrorAlertCircle,
} from '../../components/Form'

import Flex from '../../components/Layout/Flexbox'

import {RegularRouterLink} from '../../components/Routing'
import {H2} from '../../ui/headings'

import {loginCoachee} from '../../store/auth/actions'

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

interface Props extends RouteComponentProps {
  login: (email: string, password: string, history: History) => Promise<any>,
  isLoading: boolean,
  error: any | null
}


class Login extends PureComponent<Props> {
  onSubmit = async (values: {email: string, password: string}) => {
    const {login, history} = this.props
    const {email, password} = values
    login(email, password, history)
  }

  render() {
    const {isLoading, error} = this.props
    return (
      <Row>
        <Col xs={12}>
          <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
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
                    <RegularRouterLink to="/forgot-password" small bold underline>
                      Forgotten password?
                    </RegularRouterLink>
                    <SubmitButton
                      isLoading={isLoading}
                      error={error}
                      accent
                      loadingText="Loading..."
                      defaultText="Login"
                    />
                  </Form>
                </>
              )}
            </Formik>
          </Flex>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({auth}: any) => ({
  isLoading: auth.isLoading,
  error: auth.error,
})

const mapDispatchToProps = {
  login: loginCoachee,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
