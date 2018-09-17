import { combineReducers } from 'redux'
import { createActions, handleActions } from 'redux-actions'
import { indexBy, prop } from 'ramda'

const indexById = indexBy(prop('id'))

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

const expensesById = handleActions({
  [FETCH_SUCCESS]: (state, { payload }) => indexById(payload),

  [UPDATE_EXPENSE]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload
  })
}, {})

const utils = handleActions({
  [TOGGLE_LOADING]: (state, { payload }) => ({
    ...state,
    isLoading: payload
  }),

  [UPLOAD_PROGRESS]: (state, { payload }) => ({
    ...state,
    progress: payload
  })
}, {})

export default combineReducers({
  expensesById,
  utils
})
