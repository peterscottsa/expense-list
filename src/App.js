import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Hi</h1>
      </Provider>
    )
  }
}

export default App
