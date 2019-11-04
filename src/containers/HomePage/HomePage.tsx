import React, {PureComponent} from 'react'

import Hero from './Hero'
import Coachee from './Coachee'
import Journey from './Journey'


class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Hero />
        <Coachee />
        <Journey />
      </>
    )
  }
}

export default HomePage
