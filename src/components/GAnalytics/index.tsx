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

class GAnalytics extends PureComponent<Props> {
  componentDidMount = () => {
    if (!window.ga) {
      gaSetup()
    }
  }

  componentDidUpdate = (prevProps: Props) => {
    const {location: {pathname}} = this.props
    if (prevProps.location.pathname !== pathname) {
      if (window?.gtag) {
        window.gtag()
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
