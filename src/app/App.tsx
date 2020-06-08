import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import ScrollToTop from '../components/Routing/ScrollToTop'
import GAnalytics from '../components/GAnalytics'

import purechat from '../utils/scripts/purechat'

import Routes from '../routes'

import store from '../store'

class App extends PureComponent {
  componentDidMount = () => {
    purechat()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <GAnalytics>
            <ScrollToTop />
            <Routes />
          </GAnalytics>
        </Router>
      </Provider>
    )
  }
}

export default App
