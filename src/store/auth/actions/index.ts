import {History} from 'history'
import Auth from '../../../services/auth'
import {AUTH} from '../constants'

interface CoachHistoryState {
  pathname: string,
  coach: any,
  program: any
  coachAvailability: any
}

export const loginCoachee = (email: string, password: string, history: History<CoachHistoryState>) => (dispatch: any) => {
  dispatch({type: AUTH.LOGIN_REQUEST})
  return Auth.login(email, password)
    .then((res) => {
      dispatch({type: AUTH.LOGIN_SUCCESSFUL, payload: res})
      history.push({
        pathname: history?.location?.state?.pathname || '/',
        state: {
          ...history?.location?.state,
        },
      })
    })
    .catch((err) => {
      dispatch({type: AUTH.LOGIN_ERROR, payload: err})
    })
}


export const logoutCoachee = () => (dispatch: any) => {
  dispatch({type: AUTH.LOGOUT})
}
