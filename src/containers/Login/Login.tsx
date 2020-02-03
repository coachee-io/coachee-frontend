import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import Alert from '../../components/Alert'

import CoacheeLogin from './Coachees'
import CoachLogin from './Coaches'

interface LocationState {
  showLoginMessageAfterConfirmPasswordPage?: boolean
}

interface Props extends RouteComponentProps<{}, {}, LocationState> {}

interface State {
  showLoginMessage?: boolean,
  selectedTab: string
}

class Login extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showLoginMessage: false,
      selectedTab: 'coacheeLogin',
    }
  }

  componentDidMount = () => {
    const {location} = this.props
    const showLoginMessage = location?.state?.showLoginMessageAfterConfirmPasswordPage
    this.setState({showLoginMessage})
  }

  render() {
    const {showLoginMessage, selectedTab} = this.state

    return (
      <Row>
        <Col xs={12}>
          {showLoginMessage && <Alert show={showLoginMessage} />}
          <CoacheeLogin />
          <CoachLogin />
        </Col>
      </Row>
    )
  }
}

export default Login
