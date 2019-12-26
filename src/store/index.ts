import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import AuthReducer from './auth/reducer'
import FeatureFlagReducer from './featureFlags/reducer'

const reducer = combineReducers({
  auth: AuthReducer,
  features: FeatureFlagReducer,
})

const configureStore = () => createStore(reducer, applyMiddleware(thunk))

const store = configureStore()

export default store
