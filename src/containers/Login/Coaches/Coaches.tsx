import React, {PureComponent} from 'react'

import LoginForm from '../../../components/Form/Login'

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

  onSubmit = async (values: {email: string, password: string}) => {

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
