import { combineReducers } from 'redux'
import { createActions, handleActions } from 'redux-actions'

export const FETCH = 'expenses/FETCH'
export const FETCH_SUCCESS = 'expenses/FETCH_SUCCESS'
export const ADD_COMMENT = 'expenses/ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'expenses/ADD_COMMENT_SUCCESS'

export const {
  expenses: {
    fetch,
    fetchSuccess,
    addComment,
    addCommentSuccess
  }
} = createActions({
  [FETCH]: undefined,
  [FETCH_SUCCESS]: undefined,
  [ADD_COMMENT]: (id, comment) => ({ id, comment }),
  [ADD_COMMENT_SUCCESS]: undefined,
})

const expensesById = handleActions({
  [FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload.reduce( (expenses, expense) => ({
      ...expenses,
      [expense.id]: expense
    }), {})
  }),

  [ADD_COMMENT_SUCCESS]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload
  })
}, {})

const allIds = handleActions({
  [FETCH_SUCCESS]: (state, { payload }) => ([
    ...state,
    ...payload.map( expense => expense.id )
  ])
}, [])

export default combineReducers({
  expensesById,
  allIds
})
