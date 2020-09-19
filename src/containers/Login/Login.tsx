import React, {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import {
  FormCard,
} from 'components/Form'

import Flex from 'components/Layout/Flexbox'

import Alert from 'components/Alert'
import Tab from 'components/Tab'

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

  handleTabChange = (e: any) => {
    this.setState({selectedTab: e.target.id})
  }

  render() {
    const {showLoginMessage, selectedTab} = this.state

    return (
      <Row>
        <Col xs={12}>
          {showLoginMessage && <Alert show={showLoginMessage} />}
          <Flex width="100%" justifyContent="center">
            <FormCard maxWidth={450}>
              <Flex width="100%" justifyContent="center">
                <Tab
                  id="coacheeLogin"
                  accent
                  selected={selectedTab === 'coacheeLogin'}
                  onClick={this.handleTabChange}
                >
                  Login
                </Tab>
                <Tab
                  id="coachLogin"
                  primary
                  selected={selectedTab === 'coachLogin'}
                  onClick={this.handleTabChange}
                >
                  Coach Login
                </Tab>
              </Flex>
              {selectedTab === 'coacheeLogin' && <CoacheeLogin />}
              {selectedTab === 'coachLogin' && <CoachLogin />}
            </FormCard>
          </Flex>
        </Col>
      </Row>
    )
  }
}

export default Login
