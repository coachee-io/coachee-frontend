import {createStore, combineReducers} from 'redux'

import AuthReducer from './auth/reducer'
import FeatureFlagReducer from './featureFlags/reducer'

const reducer = combineReducers({
  auth: AuthReducer,
  features: FeatureFlagReducer,
})

const configureStore = () => createStore(reducer)

const store = configureStore()

export default store
