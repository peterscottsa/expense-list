import { takeLatest, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { expensesModule } from '../modules'
import { fetchExpenses, addCommentToExpense, addReceiptToExpense } from '../api'
import history from '../../redux/history'

function* fetch() {
  try {
    const response = yield call(fetchExpenses)
    yield put(expensesModule.fetchSuccess(response.data.expenses))
  } catch (err) {
    yield put(expensesModule.error(err))
  }
}

function* addComment({ payload }) {
  yield put(expensesModule.toggleLoading(true))
  yield delay(1000)

  try {
    const response = yield call(addCommentToExpense, payload.id, payload.comment)
    yield put(expensesModule.updateExpense(response.data))
    yield call(history.push, '/')
  } catch(err) {
    yield put(expensesModule.error(err))
  }

  yield put(expensesModule.toggleLoading(false))
}

function* addReceipt({ payload }) {
  yield put(expensesModule.toggleLoading(true))

  try {
    const response = yield call(addReceiptToExpense, payload.id, payload.receipt)
    yield put(expensesModule.updateExpense(response.data))
    yield call(history.push, '/')
  } catch(err) {
    yield put(expensesModule.error(err))
  }

  yield put(expensesModule.toggleLoading(false))
}

export default function* expenseSaga() {
  yield takeLatest(expensesModule.FETCH, fetch)
  yield takeLatest(expensesModule.ADD_COMMENT, addComment)
  yield takeLatest(expensesModule.ADD_RECEIPT, addReceipt)
}