import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventReducer'

const staticReducers = {
  event: eventReducer,
}

export const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...asyncReducers,
    ...staticReducers,
  })

export default createReducer
