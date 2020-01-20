import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router-dom'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {
  Form, Input, SubmitButton,
} from '../../components/Form'

import Flex from '../../components/Layout/Flexbox'
import {Pulse} from '../../components/Skeleton'
import Error from '../../components/Error'

import {H2} from '../../ui/headings'

import PlatformAPI from '../../services/public/platform'

const schema = object().shape({
  password: string()
    .trim()
    .required('This is a required field')
    .min(8, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
  confirmPassword: string()
    .required('This is a required field')
    .test('passwords-match', "Passwords don't match", function passwordMatch(value) {
      return this.parent.password === value
    }),
})

interface Params {
  id: string
}

interface Props extends RouteComponentProps<Params> {}

interface State {
  isLoadingAPI: boolean,
  isSubmiting: boolean,
  loadingError: Error | null
  error: Error | null,
}

class ConfirmPassword extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoadingAPI: true,
      isSubmiting: false,
      loadingError: null,
      error: null,
    }
  }

  componentDidMount = () => {
    const {match} = this.props
    const {params} = match
    this.setState({isLoadingAPI: true})
    PlatformAPI.verifyForgotPasswordToken(params.id)
      .then(() => { this.setState({isLoadingAPI: false}) })
      .catch((loadingError: Error) => {
        this.setState({loadingError})
      })
  }


  onSubmit = async (values: any) => {
    const {match, history} = this.props
    const {params} = match
    const {password} = values

    await this.setState({isSubmiting: true, error: null})
    PlatformAPI.recoverForgotPassword(password, params.id)
      .then(() => {
        history.push('/login', {showLoginMessageAfterConfirmPasswordPage: true})
      })
      .catch((error: Error) => { this.setState({error}) })
  }

  render() {
    const {
      error, isLoadingAPI, isSubmiting, loadingError,
    } = this.state

    if (loadingError) {
      return (
        <Error message={(
          <>
            Sorry, but your link has expired.
            <br />
            Try again.
          </>
        )}
        />
      )
    }

    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex width="100%" flexDirection="row" justifyContent="center" marginTop="30px">
              <Formik
                initialValues={{password: '', confirmPassword: ''}}
                onSubmit={this.onSubmit}
                validationSchema={schema}
              >
                {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <>
                    <Form onSubmit={handleSubmit} maxWidth={450}>
                      <H2>
                        {isLoadingAPI
                          ? <Pulse height={44} />
                          : 'Create a new password'}
                      </H2>
                      {isLoadingAPI
                        ? <Pulse height={44} marginTop={15} /> : (
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
                        )}
                      {isLoadingAPI
                        ? <Pulse height={44} marginTop={15} /> : (
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
                        )}
                      {isLoadingAPI
                        ? <Pulse height={44} marginTop={15} /> : (
                          <Flex width="100%" flexDirection="row" marginTop="15px">
                            <SubmitButton
                              isLoading={isSubmiting}
                              error={error}
                              accent
                              loadingText="Loading..."
                              defaultText="Create password"
                            />
                          </Flex>
                        )}
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

export default ConfirmPassword
