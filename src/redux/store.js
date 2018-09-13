import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import modules from './modules'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const middleware = env => {
  if (env === 'development') {
    return applyMiddleware(sagaMiddleware, logger)
  }

  return applyMiddleware(sagaMiddleware)
}



export default createStore(
  modules,
  middleware(process.env.NODE_ENV)
)

sagaMiddleware.run(rootSaga)