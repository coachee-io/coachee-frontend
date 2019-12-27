import React, {PureComponent, ComponentType} from 'react'
import {
  Route, Redirect, RouteProps, RouteComponentProps,
} from 'react-router-dom'
import {connect} from 'react-redux'

interface Props extends RouteProps {
  isLoggedIn: boolean,
  flags?: {
    [index:string]: boolean
  },
  flag?: string,
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

class ProtectedRoute extends PureComponent<Props> {
  isFeatureEnabled = (): boolean => {
    const {flags, flag} = this.props
    if (flags && flag) {
      return flags[flag]
    }
    return true
  }

  render() {
    const {isLoggedIn, component: Component, ...rest} = this.props
    return (
      <Route
        {...rest}
        render={(props): any => (
          isLoggedIn || this.isFeatureEnabled()
            ? <Component {...props} />
            : <Redirect to={{pathname: '/404', state: {from: props.location}}} />
        )}
      />
    )
  }
}

const mapStateToProps = ({auth, features}: any) => ({
  isLoggedIn: auth.isLoggedIn,
  flags: features.flags,
})

export default connect(mapStateToProps)(ProtectedRoute)
