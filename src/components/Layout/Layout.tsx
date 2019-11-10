import React, {PureComponent, ReactNode} from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

interface Props {
  children: ReactNode
}

class Layout extends PureComponent<Props> {
  render() {
    const {children} = this.props
    return (
      <>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </>
    )
  }
}

export default Layout
