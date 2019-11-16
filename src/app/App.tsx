import React, {PureComponent} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from '../components/Routing/ScrollToTop'

import Routes from '../routes'

class App extends PureComponent {
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
