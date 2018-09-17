import { combineReducers } from 'redux'
import * as expensesModule from './expenses'
import * as filtersModule from './filters'
import * as paginationModule from './pagination'

import expenses from './expenses'
import filters from './filters'
import pagination from './pagination'

export {
  expensesModule,
  filtersModule,
  paginationModule
}

export default combineReducers({
  expenses,
  filters,
  pagination
})