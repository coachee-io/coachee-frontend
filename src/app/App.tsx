import React, {PureComponent} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import ScrollToTop from '../components/Routing/ScrollToTop'

import ga from '../utils/scripts/google'
import purechat from '../utils/scripts/purechat'

import Routes from '../routes'

class App extends PureComponent {
  componentDidMount = () => {
    ga()
    purechat()
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    )
  }
}

export default App
