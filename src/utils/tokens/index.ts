class LocalStorage {
  getItem = (name: string) => localStorage.getItem(name)

  setItem = (name: string, data: {}) => {

  }

  removeItem = (name: string) => {
    localStorage.removeItem(name)
  }

  isValidToken = () => {
    const token = this.parsethis.getToken('auth')
    if (!token) {
      return false
    }

    if (token.expiry > new Date().getSeconds()) {
      return false
    }

    return true
  }

  parseItem = (item: string) => {
    if (item) {
      return JSON.parse(item)
    }

    return null
  }
}

export default new LocalStorage()
