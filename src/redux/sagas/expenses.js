import { takeLatest, call, put } from 'redux-saga/effects'
import { expensesModule } from '../modules'
import { fetchExpenses, addCommentToExpense } from '../api'

function* fetch({ payload }) {
  const response = yield call(fetchExpenses)
  yield put(expensesModule.fetchSuccess(response.data.expenses))
}

function* addComment({ payload }) {
  const response = yield call(addCommentToExpense, payload.id, payload.comment)
  yield put(expensesModule.addCommentSuccess(response.data))
}

export default function* expenseSaga() {
  yield takeLatest(expensesModule.FETCH, fetch)
  yield takeLatest(expensesModule.ADD_COMMENT, addComment)
}