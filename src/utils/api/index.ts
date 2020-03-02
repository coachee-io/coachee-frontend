import axios, {AxiosRequestConfig, AxiosPromise} from 'axios'

class API {
  get<R = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<R> {
    return axios.get(url, config)
      .then((res) => res.data)
  }

  post<R = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<R> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  put<R = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<R> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  patch<R = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<R> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }
}

const api = new API()

export default api
