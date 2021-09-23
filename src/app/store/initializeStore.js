import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createReducer from './rootReducer'

const initializeStore = (initialState = {}) => {
  const store = createStore(createReducer(), initialState, devToolsEnhancer())

  store.asyncReducers = {}
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  return store
}

export default initializeStore
