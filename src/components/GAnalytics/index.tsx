import {PureComponent, ReactNode} from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'

import gaSetup, {GoogleAnalyticsID} from 'utils/scripts/google'

// Scoped to file since it will not be used anywhere else
declare global {
  interface Window {
    ga: any,
    gtag: any
  }
}

interface Props extends RouteComponentProps {
  children: ReactNode
}

interface State {
  _isGaAvailable: boolean
}

class GAnalytics extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      _isGaAvailable: false,
    }
  }

  componentDidMount = () => {
    const {_isGaAvailable} = this.state
    if (!_isGaAvailable) {
      gaSetup()
      this.setState({_isGaAvailable: true})
    }
  }

  componentDidUpdate = (prevProps: Props) => {
    const {location: {pathname}} = this.props
    const {_isGaAvailable} = this.state
    if (prevProps.location.pathname !== pathname) {
      if (_isGaAvailable) {
        window.gtag('config', GoogleAnalyticsID(), {
          page_path: pathname,
        })
      }
    }
  }

  render() {
    const {children} = this.props
    return children
  }
}

export default withRouter(GAnalytics)
