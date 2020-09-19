import React, {PureComponent} from 'react'

import LoginForm from 'components/Form/Login'

import {PlatformService} from 'services/public'

interface Props {}

interface State {
  isLoading: boolean,
  error: Error | null
}

class CoachesLogin extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: false,
      error: null,
    }
  }

  onSubmit = (values: {email: string, password: string}) => {
    const {email, password} = values
    this.setState({isLoading: true})
    PlatformService.coachLogin(email, password)
      .then(({url}) => {
        window.location.href = url
      })
      .catch((err) => {
        this.setState({isLoading: false, error: err})
      })
  }

  render() {
    const {isLoading, error} = this.state

    return (
      <LoginForm
        isLoading={isLoading}
        error={error}
        submitButtonText="Coach Login"
        submitButtonPrimaryColour
        forgottenPasswordURL="/coaches/forgot-password"
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default CoachesLogin
