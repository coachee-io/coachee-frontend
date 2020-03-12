import React, {PureComponent} from 'react'

import {PlatformService} from '../../../services/public'
import ForgotPassword from '../../../components/Form/ForgotPassword'

interface Props {}

interface State {
  isLoading: boolean,
  isSuccessful: boolean,
  error: Error | null
}

class CoacheesForgotPassword extends PureComponent<Props, State> {
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
    PlatformService.coacheeForgotPassword(email)
      .then(() => {
        this.setState({isSuccessful: true})
      })
      .catch((error) => {
        this.setState({error})
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

export default CoacheesForgotPassword
