import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ExpensesIndex } from 'scenes'
import './global.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ExpensesIndex />
      </Provider>
    )
  }
}

export default App
