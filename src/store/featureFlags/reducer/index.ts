/**
 * We will be using a file to manipulate feature flags instead
 * This allows for versatility later on
 */
import features from "./features.json"

const initialState = {
  ...features
}

const FeatureFlagReducer = (state = initialState) => {
  return state
}

export default FeatureFlagReducer