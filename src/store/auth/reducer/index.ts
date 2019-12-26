import Auth from '../../../utils/tokens'
import {AUTH} from '../constants'

interface State {
  isLoggedIn: boolean,
  isLoading: boolean,
  error: any | null,
  user: any | null
}

const getDefaultState = (): State => ({
  isLoggedIn: Auth.isLoggedIn(),
  isLoading: false,
  error: null,
  user: null,
})

const AuthReducer = (state = getDefaultState(), action: any) => {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return {...state, isLoading: true, error: null}
    case AUTH.LOGIN_SUCCESSFUL:
      Auth.setToken(action.payload.token)
      return {
        ...state, isLoggedIn: Auth.isLoggedIn(), isLoading: false, user: action.payload.user,
      }
    case AUTH.LOGIN_ERROR:
      return {...state, isLoading: false, error: action.payload}
    case AUTH.LOGOUT:
      Auth.removeToken()
      return {
        isLoggedIn: Auth.isLoggedIn(), isLoading: false, user: null, error: null,
      }
    default:
      return state
  }
}

export default AuthReducer
