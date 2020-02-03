import React, {PureComponent} from 'react'
import {Row, Col} from 'react-bootstrap'
import {
  Formik,
} from 'formik'
import {string, object} from 'yup'

import {H2} from '../../ui/headings'

import {
  Form, Input, SubmitButton,
} from '.'

import Flex from '../Layout/Flexbox'
import {Pulse} from '../Skeleton'
import Error from '../Error'

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

interface Props {
  isLoadingAPI: boolean,
  isSubmiting: boolean,
  loadingError: Error | null
  error: Error | null,
  onSubmit: (values: any) => void
}

class ConfirmPassword extends PureComponent<Props> {
  render() {
    const {
      error, isLoadingAPI, isSubmiting, loadingError, onSubmit,
    } = this.props

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
                onSubmit={(values: any) => onSubmit(values)}
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
