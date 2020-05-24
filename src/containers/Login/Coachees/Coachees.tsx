import React, {PureComponent} from 'react'
import {History} from 'history'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import LoginForm from '../../../components/Form/Login'

import {loginCoachee} from '../../../store/auth/actions'

interface CoachHistoryState {
  from?: string,
  coach: any,
  program: any
  coachAvailability: any
}

interface Props extends RouteComponentProps<{}, {}, CoachHistoryState> {
  login: (email: string, password: string, history: History<CoachHistoryState>) => Promise<any>,
  isLoading: boolean,
  error: Error | null
}

class CoacheesLogin extends PureComponent<Props> {
  onSubmit = async (values: {email: string, password: string}) => {
    const {login, history} = this.props
    const {email, password} = values
    login(email, password, history)
  }

  render() {
    const {isLoading, error} = this.props

    return (
      <LoginForm
        isLoading={isLoading}
        error={error}
        submitButtonText="Login"
        submitButtonAccentColour
        forgottenPasswordURL="/forgot-password"
        onSubmit={this.onSubmit}
      />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoacheesLogin))
