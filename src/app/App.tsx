import React, {PureComponent} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../routes'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default App
