import React, {PureComponent} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

import Layout from '../components/Layout/Layout'

import HomePage from '../containers/HomePage'
import Login from '../containers/Login'
import ForgotPassword from '../containers/ForgotPassword'

import TermsAndConditions from '../containers/TermsAndConditions'
import PrivacyPolicy from '../containers/PrivacyPolicy'
import CookiesPolicy from '../containers/CookiesPolicy'
import UsePolicy from '../containers/UsePolicy'

import Booking from '../containers/Booking'

import CoachProfile from '../containers/Coach'
import CoachOnboarding from '../containers/Signup/Coach/Onboarding'
import CoachRegister from '../containers/Signup/Coach/Register'

import CoacheeSignup from '../containers/Signup/Coachee'
import CoachesCategories from '../containers/Coaches'

import Error from '../components/Error'
import ProtectedRoute from '../components/Routing/ProtectedRoute'

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
          <ProtectedRoute path="/login" flag="platformEnabled" component={Login} />
          <ProtectedRoute path="/logout" flag="platformEnabled" component={Mockup} />
          <ProtectedRoute path="/forgot-password" flag="platformEnabled" component={ForgotPassword} />
          <ProtectedRoute path="/signup" flag="platformEnabled" component={CoacheeSignup} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiesPolicy} />
          <Route path="/use-policy" component={UsePolicy} />
          <Route exact path="/become-a-coach" component={CoachOnboarding} />
          <Route path="/become-a-coach/register" component={CoachRegister} />
          <Route path="/coaches/:category?" component={CoachesCategories} />
          <Route path="/coach/:id" component={CoachProfile} />
          <ProtectedRoute path="/booking" flag="bookingEnabled" component={Booking} />
          <Route path="/*" component={Error} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
