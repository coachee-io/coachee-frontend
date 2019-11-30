import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import ScrollToTop from '../components/Routing/ScrollToTop'

import ga from '../utils/scripts/google'
import purechat from '../utils/scripts/purechat'

import Routes from '../routes'

import store from '../store'

class App extends PureComponent {
  componentDidMount = () => {
    ga()
    purechat()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <Routes />
        </Router>
      </Provider>
    )
  }
}

export default App
