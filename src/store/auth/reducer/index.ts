import Auth from '../../../utils/tokens'
import LocalStorage from '../../../utils/localStorage'
import {AUTH} from '../constants'

function auth(token: string, expiry: number, user: {}) {
  Auth.setToken(token, expiry)
  LocalStorage.set('user', user)
}

function unAuth() {
  Auth.removeToken()
}

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
  user: LocalStorage.get('user'),
})

const AuthReducer = (state = getDefaultState(), action: any) => {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return {...state, isLoading: true, error: null}
    case AUTH.LOGIN_SUCCESSFUL: {
      const {token, user, expiry} = action.payload
      auth(token, expiry, user)
      return {
        ...state, isLoggedIn: Auth.isLoggedIn(), isLoading: false, user: action.payload.user,
      }
    }
    case AUTH.LOGIN_ERROR:
      return {...state, isLoading: false, error: action.payload}
    case AUTH.LOGOUT: {
      unAuth()
      return {
        isLoggedIn: Auth.isLoggedIn(), isLoading: false, user: null, error: null,
      }
    }
    default:
      return state
  }
}

export default AuthReducer
