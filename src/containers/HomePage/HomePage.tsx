import React, {PureComponent} from 'react'

import Hero from './Hero'
import Categories from './Categories'
import Coachee from './Coachee'
import Journey from './Journey'

class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Hero />
        <Categories />
        <Coachee />
        <Journey />
      </>
    )
  }
}

export default HomePage
