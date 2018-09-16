import produce from 'immer'
import { createSelector } from 'reselect'
import format from 'date-fns/format'

const getExpenses = state => state.expenses.expensesById

export const computedExpenses = createSelector(
  getExpenses,
  produce((draft) =>
    Object.values(draft).forEach( expense => {
        draft[expense.id].date = format(expense.date, 'DD MMMM')
        draft[expense.id].hasComment = expense.comment.length > 0
        draft[expense.id].lastReceipt = expense.receipts.length ? expense.receipts[0].url : null
      }
    )
  )
)