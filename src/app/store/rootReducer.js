import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventReducer'
import modalReducer from '../common/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'

const staticReducers = {
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
}

export const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...asyncReducers,
    ...staticReducers,
  })

export default createReducer
