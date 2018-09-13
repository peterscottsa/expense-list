import { combineReducers } from 'redux'
import { createActions, handleActions } from 'redux-actions'
import produce from 'immer'
export const FETCH = 'expenses/FETCH'
export const FETCH_SUCCESS = 'expenses/FETCH_SUCCESS'

export const {
  expenses: {
    fetch,
    fetchSuccess
  }
} = createActions({
  [FETCH]: undefined,
  [FETCH_SUCCESS]: undefined,
})

const expensesById = handleActions({
  [FETCH_SUCCESS]: (state, { payload }) =>
    produce(state, draft => {
      payload.forEach( expense => {
        draft[expense.id] = expense
      })
    })
}, {})

const allIds = handleActions({
  [FETCH_SUCCESS]: (state, { payload }) =>
    produce(state, draft => payload.forEach( expense => draft.push(expense.id) ))
}, [])

export default combineReducers({
  expensesById,
  allIds
})
