import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Expenses from './containers/Expenses'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Expenses fetchOnMount>
          { ({ allIds, expensesById }) =>
            allIds.map( id =>
              <p key={id}>
                { expensesById[id].amount.value } { expensesById[id].amount.currency }
              </p>
            )
          }
        </Expenses>
      </Provider>
    )
  }
}

export default App
