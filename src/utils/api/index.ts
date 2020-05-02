import axios, {AxiosRequestConfig, AxiosPromise} from 'axios'
import axiosErrorHandler from './ErrorHandler'

class API {
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get(url, config)
      .catch(axiosErrorHandler)
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.post(url, data, config)
      .catch(axiosErrorHandler)
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.put(url, data, config)
      .catch(axiosErrorHandler)
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.patch(url, data, config)
      .catch(axiosErrorHandler)
  }
}

const api = new API()

export default api
