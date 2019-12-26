class TokenStorage {
  getToken = (): string | null => localStorage.getItem('accessToken')

  setToken = (token: string) => localStorage.setItem('accessToken', token)

  removeToken = () => localStorage.removeItem('accessToken')

  isLoggedIn = () => !!this.getToken()
}

export default new TokenStorage()
