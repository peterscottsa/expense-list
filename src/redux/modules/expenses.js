import { combineReducers } from 'redux'
import { createActions } from 'redux-actions'
import produce from 'immer'

export const FETCH = 'expenses/FETCH'
export const FETCH_SUCCESS = 'expenses/FETCH_SUCCESS'
export const ADD_COMMENT = 'expenses/ADD_COMMENT'
export const ADD_RECEIPT = 'expenses/ADD_RECEIPT'
export const UPDATE_EXPENSE = 'expenses/UPDATE_EXPENSE'
export const TOGGLE_LOADING = 'expenses/TOGGLE_LOADING'
export const UPLOAD_PROGRESS = 'expenses/UPLOAD_PROGRESS'
export const ERROR = 'expenses/ERROR'

export const {
  expenses: {
    fetch,
    fetchSuccess,
    addComment,
    addReceipt,
    updateExpense,
    toggleLoading,
    uploadProgress,
    error
  }
} = createActions({
  [FETCH]: undefined,
  [FETCH_SUCCESS]: undefined,
  [ADD_COMMENT]: (id, comment) => ({ id, comment }),
  [ADD_RECEIPT]: (id, receipt) => ({ id, receipt }),
  [UPDATE_EXPENSE]: undefined,
  [TOGGLE_LOADING]: undefined,
  [UPLOAD_PROGRESS]: undefined,
  [ERROR]: undefined
})

const expensesById = produce((draft, { type, payload}) => {
  switch(type) {
    case FETCH_SUCCESS:
      return payload.forEach( expense => draft[expense.id] = expense )

    case UPDATE_EXPENSE:
      draft[payload.id] = payload
      return

    default:
      return draft
  }
}, {})

const allIds = produce((draft, { type, payload}) => {
  switch(type) {
    case FETCH_SUCCESS:
      payload.forEach( expense => draft.push(expense.id) )
      return

    default:
      return draft
  }
}, [])

const utils = produce((draft, { type, payload }) => {
  switch(type) {
    case TOGGLE_LOADING:
      draft.isLoading = payload
      return

    case UPLOAD_PROGRESS:
      draft.progress = payload
      return

    default:
      return draft
  }
}, { isLoading: false, progress: 0 })

export default combineReducers({
  expensesById,
  allIds,
  utils
})
