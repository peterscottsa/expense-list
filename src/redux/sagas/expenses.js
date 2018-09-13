import { takeLatest, call, put } from 'redux-saga/effects'
import { expensesModule } from '../modules'
import { fetchExpenses } from '../api'

function* fetch({ payload }) {
  const response = yield call(fetchExpenses)
  yield put(expensesModule.fetchSuccess(response.data.expenses))
}

export default function* expenseSaga() {
  yield takeLatest(expensesModule.FETCH, fetch)
}