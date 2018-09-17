import { createSelector } from 'reselect'
import { values, filter, compose, contains, splitEvery, map } from 'ramda'
import format from 'date-fns/format'

const expensesCollection = state => state.expenses.expensesById
const pagination = state => state.pagination
const currencyFilters = state => state.filters['currency']
const companyFilters = state => state.filters['merchant']

const paginateList = itemsPerPage => list => splitEvery(itemsPerPage, list)

const filterByCurrency = filter => value =>
  filter.length ? contains(filter, value.amount.currency) : value

const filterByMerchant = filter => value =>
  filter.length ? contains(filter, value.merchant) : value

const formatFields = expense => ({
  ...expense,
  date: format(expense.date, 'DD MMMM')
})

export const filteredExpenses = createSelector(
  [ expensesCollection, currencyFilters, companyFilters ],
  (expenses, selectedCurrency, searchTerm) =>
    compose(
      map(formatFields),
      filter(filterByCurrency(selectedCurrency)),
      filter(filterByMerchant(searchTerm.toUpperCase()))
    )(values(expenses))
)

export const paginatedExpenses = createSelector(
  [ filteredExpenses, pagination ],
  (expenses, { itemsPerPage, currentPage }) => {
    const paginatedList = compose(
      paginateList(itemsPerPage),
    )(expenses)

    return paginatedList[currentPage -1]
  }
)

export const paginationState = createSelector(
  [ filteredExpenses, pagination ],
  (expenses, { currentPage, itemsPerPage }) => ({
    lastPage: currentPage * itemsPerPage >= expenses.length,
    firstPage: currentPage < 2,
  })
)
