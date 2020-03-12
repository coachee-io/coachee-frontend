import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'

import ConfirmPassword from '../../../components/Form/ConfirmPassword'

import {PlatformService} from '../../../services/public'

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

class CoacheesConfirmPassword extends PureComponent<Props, State> {
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
    PlatformService.coacheeVerifyForgotPasswordToken(params.id)
      .then(() => { this.setState({isLoadingAPI: false}) })
      .catch((loadingError: Error) => {
        this.setState({loadingError})
      })
  }


  onSubmit = async (values: {password: string}) => {
    const {match, history} = this.props
    const {params} = match
    const {password} = values

    await this.setState({isSubmiting: true, error: null})
    PlatformService.coacheeRecoverForgotPassword(password, params.id)
      .then(() => {
        history.push('/login', {showLoginMessageAfterConfirmPasswordPage: true})
      })
      .catch((error) => { this.setState({error}) })
  }

  render() {
    const {
      error, isLoadingAPI, isSubmiting, loadingError,
    } = this.state

    return (
      <ConfirmPassword
        isLoadingAPI={isLoadingAPI}
        loadingError={loadingError}
        isSubmiting={isSubmiting}
        error={error}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default CoacheesConfirmPassword
