import React, { PureComponent } from 'react';

import AppTemplate from "./components/Layout/Template"

class App extends PureComponent {
  handleClick = (e: any) => {
    console.log('click ', e);
  };

  render() {
    return (
      <AppTemplate />
    )
  }
}

export default App;
