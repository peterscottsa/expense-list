import { take, takeLatest, call, put } from 'redux-saga/effects'
import { expensesModule } from '../modules'
import { fetchExpenses, addCommentToExpense, uploadReceiptChannel } from '../api'
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

  try {
    const response = yield call(addCommentToExpense, payload.id, payload.comment)

    yield put(expensesModule.updateExpense(response.data))
    yield call(history.push, '/')
  } catch(err) {
    yield put(expensesModule.error(err))
  }

  yield put(expensesModule.toggleLoading(false))
}

function* addReceipt({payload}) {
  yield put(expensesModule.toggleLoading(true))

  try {
    const uploadChannel = yield call(uploadReceiptChannel, payload.id, payload.receipt)

    while (true) {
      const {
        progressEvent,
        response = {}
      } = yield take(uploadChannel)

      if(progressEvent && progressEvent.lengthComputable) {
        yield put(expensesModule.uploadProgress(progressEvent.loaded / progressEvent.total * 100))
      }

      if(response.status === 200) {
        yield put(expensesModule.updateExpense(response.data))
        yield call(history.push, '/')
      }
    }
  } catch(err) {
    yield put(expensesModule.error(err))
  } finally {
    yield put(expensesModule.uploadProgress(0))
    yield put(expensesModule.toggleLoading(false))
  }
}

export default function* expenseSaga() {
  yield takeLatest(expensesModule.FETCH, fetch)
  yield takeLatest(expensesModule.ADD_COMMENT, addComment)
  yield takeLatest(expensesModule.ADD_RECEIPT, addReceipt)
}