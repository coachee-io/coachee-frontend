import store from '../../store'

class Auth {
  isLoggedIn = (): boolean => {
    const {auth: {isLoggedIn}} = store.getState()
    return isLoggedIn
  }
}

export default new Auth()
