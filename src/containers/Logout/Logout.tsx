import {PureComponent} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'

import {logoutCoachee} from 'store/auth/actions'

interface Props extends RouteComponentProps {
  logout: () => void
}

class Logout extends PureComponent<Props> {
  componentDidMount = async () => {
    const {logout, history} = this.props
    await logout()
    history.replace('/')
  }

  render() {
    return null
  }
}

const mapDispatchToProps = {
  logout: logoutCoachee,
}

export default connect(null, mapDispatchToProps)(Logout)
