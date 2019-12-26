import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

class API {
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(url, config)
      .then((res) => res.data)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }
}

const api = new API()

export default api
