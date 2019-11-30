import {createStore, combineReducers} from "redux"

import AuthReducer from "./auth/reducer"
import FeatureFlagReducer from "./featureFlags/reducer"

const reducer = combineReducers({
  auth: AuthReducer,
  flags: FeatureFlagReducer
})

export default function configureStore(){
  return createStore(reducer)
}