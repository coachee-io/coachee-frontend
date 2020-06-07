let _token: string | null = null
let _timer: string | null = null

const getTimer = (): string | null => _timer || localStorage.getItem('timer')

const setTimer = (expiry: number) => {
  if (!_timer) {
    _timer = `${expiry * 1000}`
  }
  localStorage.setItem('timer', _timer)
}

const removeTimer = () => {
  _timer = null
  localStorage.removeItem('timer')
}

const removeUser = () => {
  localStorage.removeItem('user')
}

const removeToken = () => {
  _token = null
  localStorage.removeItem('accessToken')
}

const unAuth = () => {
  removeUser()
  removeToken()
  removeTimer()
}

class TokenStorage {
  getToken = (): string | null => {
    if (_token) {
      return _token
    }

    return _token || localStorage.getItem('accessToken')
  }

  setToken = (token: string, expiry: number) => {
    setTimer(expiry)
    localStorage.setItem('accessToken', token)
  }

  removeToken = () => {
    unAuth()
  }

  isLoggedIn = (): boolean => {
    const timer = getTimer()

    if (timer) {
      if (Date.now() >= parseInt(timer, 10)) {
        unAuth()
        return false
      }
    }

    return !!this.getToken()
  }
}

export default new TokenStorage()
