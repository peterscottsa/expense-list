import { all } from 'redux-saga/effects'
import expensesSaga from './expenses'

export default function* rootSaga() {
  yield all([
    expensesSaga()
  ])
}