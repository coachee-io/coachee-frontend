import React, {PureComponent} from 'react'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


class AppTemplate extends PureComponent {
  render() {
    return (
      <div>
        <Header bg="primary" variant="dark" expand="lg" fixed="top">
          bla
        </Header>
        <Main>
          Body
        </Main>
        <Footer>
          Footer
        </Footer>
      </div>
    )
  }
}

export default AppTemplate