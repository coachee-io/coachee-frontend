class LocalStorage {
  set = (key: string, item: {} | [] | string) => {
    localStorage.setItem(key, JSON.stringify(item))
  }

  get = (key: string): string | {} | [] | null => {
    const item: string | null = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  }

  remove = (key: string) => localStorage.removeItem(key)
}

export default new LocalStorage()
