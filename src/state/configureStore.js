import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default function configureStore(initState) {
  const rootReducer = combineReducers(reducers)

  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(
      logger,
      thunk
    )
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
