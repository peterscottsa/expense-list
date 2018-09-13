import { combineReducers } from 'redux'
import * as expensesModule from './expenses'
import expenses from './expenses'

export {
  expensesModule
}

export default combineReducers({
  expenses
})