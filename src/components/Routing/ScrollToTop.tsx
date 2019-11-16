import React, {PureComponent} from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface Props extends RouteComponentProps{}

class ScrollToTop extends PureComponent<Props> {
  componentDidUpdate = (prevProps: Props) => {
    const {location: {pathname}} = this.props
    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTop)
