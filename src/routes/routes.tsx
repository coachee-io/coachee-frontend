import React, {PureComponent} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import HomePage from '../containers/HomePage'

import Login from '../containers/Login'
import ForgotPassword from '../containers/ForgotPassword'

import Checkout from '../containers/Checkout'

import CoachSignup from '../containers/Signup/Coach'
import CoacheeSignup from '../containers/Signup/Coachee'
import CoachesCategories from '../containers/Coaches'
import CoachProfile from '../containers/Coach'

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
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/signup" component={CoacheeSignup} />
          <Route exact path="/become-a-coach" component={CoachSignup} />
          <Route path="/become-a-coach/register" component={Mockup} />
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
