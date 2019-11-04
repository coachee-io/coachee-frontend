import React, {PureComponent} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

import Layout from '../components/Layout'
import HomePage from '../containers/HomePage/HomePage'

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
          <Route path="/login" component={Mockup} />
          <Route path="/logout" component={Mockup} />
          <Route path="/signup" component={Mockup} />
          <Route path="/coaches/:category?" component={Mockup} />
          <Route path="/coach/:id" component={Mockup} />
          <Route path="*" component={Mockup} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
