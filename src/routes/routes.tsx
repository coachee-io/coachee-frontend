import React, {PureComponent} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

import Layout from '../components/Layout/Layout'

import HomePage from '../containers/HomePage'
import Login from '../containers/Login'
import Logout from '../containers/Logout'
import ForgotPassword from '../containers/ForgotPassword'
import ConfirmPassword from '../containers/ConfirmPassword'

import AboutUs from '../containers/AboutUs'

import TermsAndConditions from '../containers/Policies/TermsAndConditions'
import PrivacyPolicy from '../containers/Policies/PrivacyPolicy'
import CookiesPolicy from '../containers/Policies/CookiesPolicy'
import FairUsePolicy from '../containers/Policies/FairUsePolicy'
import FAQ from '../containers/Policies/FAQ'

import Booking from '../containers/Booking'

import CoachProfile from '../containers/Coach'
import CoachOnboarding from '../containers/Signup/Coach/Onboarding'
import CoachRegister from '../containers/Signup/Coach/Register'

import CoacheeSignup from '../containers/Signup/Coachee'
import CoachesCategories from '../containers/Coaches'

import Error from '../components/Error'
import ProtectedRoute from '../components/Routing/ProtectedRoute'

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/login" component={Login} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/forgot-password" component={ForgotPassword} />
          <ProtectedRoute path="/confirm-password/:id" component={ConfirmPassword} />
          <ProtectedRoute path="/signup" component={CoacheeSignup} />
          <ProtectedRoute path="/booking" component={Booking} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiesPolicy} />
          <Route path="/fair-use-policy" component={FairUsePolicy} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about-us" component={AboutUs} />
          <Route exact path="/become-a-coach" component={CoachOnboarding} />
          <Route path="/become-a-coach/register" component={CoachRegister} />
          <Route path="/coaches/:category?" component={CoachesCategories} />
          <Route path="/coach/:id" component={CoachProfile} />
          <Route path="/*" component={Error} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
