import React, {PureComponent} from 'react'

import LoginForm from '../../../components/Form/Login'

import PlatformAPI from '../../../services/public/platform'

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
    PlatformAPI.coachLogin(email, password)
      .then(({data}) => {
        window.location.href = data.url
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
