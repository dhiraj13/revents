import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventReducer'
import modalReducer from '../common/modals/modalReducer'

const staticReducers = {
  event: eventReducer,
  modals: modalReducer,
}

export const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...asyncReducers,
    ...staticReducers,
  })

export default createReducer
