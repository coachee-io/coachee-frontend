import React, {PureComponent} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

import Layout from '../components/Layout'
import HomePage from '../containers/HomePage'

import Login from '../containers/Login'
import Checkout from '../containers/Checkout'

import CoachSignup from '../containers/Signup/Coach'
import CoacheeSignup from '../containers/Signup/Coachee'
import CoachesCategories from '../containers/Coaches/Categories'
import CoachProfile from '../containers/Coaches/Profile'

import Error404 from '../containers/Error404'

const Mockup = () => {
  const history = useHistory()
  return (
    <div>
      {history.location.pathname}
    </div>
  )
}

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Mockup} />
          <Route exact path="/signup" component={CoacheeSignup} />
          <Route path="/signup/coach" component={CoachSignup} />
          <Route path="/coaches/:category?" component={CoachesCategories} />
          <Route path="/coach/:id" component={CoachProfile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/*" component={Error404} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
