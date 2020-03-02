import axios, {AxiosRequestConfig, AxiosPromise} from 'axios'

class API {
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get(url, config)
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.post(url, data, config)
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.put(url, data, config)
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.patch(url, data, config)
  }
}

const api = new API()

export default api
