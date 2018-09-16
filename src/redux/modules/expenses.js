import { combineReducers } from 'redux'
import { createActions } from 'redux-actions'
import produce from 'immer'

export const FETCH = 'expenses/FETCH'
export const FETCH_SUCCESS = 'expenses/FETCH_SUCCESS'
export const ADD_COMMENT = 'expenses/ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'expenses/ADD_COMMENT_SUCCESS'
export const TOGGLE_LOADING = 'expenses/TOGGLE_LOADING'
export const ERROR = 'expenses/ERROR'

export const {
  expenses: {
    fetch,
    fetchSuccess,
    addComment,
    addCommentSuccess,
    toggleLoading,
    error
  }
} = createActions({
  [FETCH]: undefined,
  [FETCH_SUCCESS]: undefined,
  [ADD_COMMENT]: (id, comment) => ({ id, comment }),
  [ADD_COMMENT_SUCCESS]: undefined,
  [TOGGLE_LOADING]: undefined,
  [ERROR]: undefined
})

const utils = produce((draft, { type, payload }) => {
  switch(type) {
    case TOGGLE_LOADING:
      draft.isLoading = payload
      return

    default:
      return draft
  }
}, { isLoading: false })

const expensesById = produce((draft, { type, payload}) => {
  switch(type) {
    case FETCH_SUCCESS:
      return payload.forEach( expense => draft[expense.id] = expense )

    case ADD_COMMENT_SUCCESS:
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

export default combineReducers({
  expensesById,
  allIds,
  utils
})
