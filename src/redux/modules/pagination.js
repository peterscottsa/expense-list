import { createActions, handleActions } from 'redux-actions'

export const GO_TO_PAGE = 'pagination/GO_TO_PAGE'

export const {
  pagination: {
    goToPage
  }
} = createActions({
  [GO_TO_PAGE]: undefined
})

export default handleActions({
 [GO_TO_PAGE]: (state, { payload }) => ({
   ...state,
   currentPage: payload
 })
}, {
  currentPage: 1,
  itemsPerPage: 25
})