import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ExpensesIndex } from 'scenes'
import './global.css'
import { Router, Route } from 'react-router'
import history from './redux/history'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" render={() => <ExpensesIndex />} />
        </Router>
      </Provider>
    )
  }
}

export default App
