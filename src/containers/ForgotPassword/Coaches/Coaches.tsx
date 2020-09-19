import React, {PureComponent} from 'react'

import {PlatformService} from 'services/public'
import ForgotPassword from 'components/Form/ForgotPassword'

interface Props {}

interface State {
  isLoading: boolean,
  isSuccessful: boolean,
  error: Error | null
}

class CoachesForgotPassword extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: false,
      isSuccessful: false,
      error: null,
    }
  }

  onSubmit = (values: {email: string}) => {
    const {email} = values
    this.setState({isLoading: true})
    PlatformService.coachForgotPassword(email)
      .then(() => {
        this.setState({isSuccessful: true, isLoading: false})
      })
      .catch((error) => {
        this.setState({error, isLoading: false})
      })
  }

  render() {
    const {isLoading, isSuccessful, error} = this.state
    return (
      <ForgotPassword
        isLoading={isLoading}
        isSuccessful={isSuccessful}
        error={error}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default CoachesForgotPassword
