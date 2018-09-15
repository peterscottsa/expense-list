import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ExpensesIndex, EditExpense } from 'scenes'
import './global.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <EditExpense />
          <ExpensesIndex />
        </Fragment>
      </Provider>
    )
  }
}

export default App
