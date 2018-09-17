import { createActions, handleActions } from 'redux-actions'

export const CHANGE_FILTER = 'filters/CHANGE_FILTER'

export const {
  filters: {
    changeFilter
  }
} = createActions({
  [CHANGE_FILTER]: (filterKey, value) => ({ filterKey, value })
})


export default handleActions({
  [CHANGE_FILTER]: (state, { payload }) => ({
    ...state,
    [payload.filterKey]: payload.value
  })
}, {
  currency: '',
  merchant: ''
})
