import React, {PureComponent} from 'react'
import {Switch, Route} from 'react-router-dom'

import Layout from 'components/Layout/Layout'

import HomePage from 'containers/HomePage'
import Login from 'containers/Login'
import Logout from 'containers/Logout'
import CoachForgotPassword from 'containers/ForgotPassword/Coaches'
import CoacheeForgotPassword from 'containers/ForgotPassword/Coachees'
import CoachConfirmPassword from 'containers/ConfirmPassword/Coaches'
import CoacheeConfirmPassword from 'containers/ConfirmPassword/Coachees'

import AboutUs from 'containers/AboutUs'
import WhatIsCoaching from 'containers/WhatIsCoaching'

import TermsAndConditions from 'containers/Policies/TermsAndConditions'
import PrivacyPolicy from 'containers/Policies/PrivacyPolicy'
import CookiesPolicy from 'containers/Policies/CookiesPolicy'
import FairUsePolicy from 'containers/Policies/FairUsePolicy'
import FAQ from 'containers/Policies/FAQ'

import Booking from 'containers/Booking'

import CoachProfile from 'containers/Coach'
import CoachOnboarding from 'containers/Signup/Coach/Onboarding'
import CoachRegister from 'containers/Signup/Coach/Register'
import CoachStripeRedirect from 'containers/Signup/Coach/Stripe'

import CoacheeSignup from 'containers/Signup/Coachee'
import CoachesCategories from 'containers/Coaches'

import ErrorMessage from 'components/ErrorMessage'
import ProtectedRoute from 'components/Routing/ProtectedRoute'

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/booking" component={Booking} />
          <ProtectedRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={CoacheeSignup} />
          <Route path="/forgot-password" component={CoacheeForgotPassword} />
          <Route path="/confirm-password/:id" component={CoacheeConfirmPassword} />
          <Route path="/coaches/forgot-password" component={CoachForgotPassword} />
          <Route path="/coaches/confirm-password/:id" component={CoachConfirmPassword} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/what-is-coaching" component={WhatIsCoaching} />
          <Route exact path="/become-a-coach" component={CoachOnboarding} />
          <Route path="/become-a-coach/register" component={CoachRegister} />
          <Route path="/coaches/stripe-redirect" component={CoachStripeRedirect} />
          <Route path="/coaches/:category?" component={CoachesCategories} />
          <Route path="/coach/:id" component={CoachProfile} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiesPolicy} />
          <Route path="/fair-use-policy" component={FairUsePolicy} />
          <Route path="/faq" component={FAQ} />
          <Route path="/*" component={() => <ErrorMessage status={404} />} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
