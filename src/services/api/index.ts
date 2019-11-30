import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

class API {
  static get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(url, config)
      .then((res) => res.data)
  }

  static post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  static put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }

  static patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config)
      .then((res) => res.data)
  }
}

export default new API()
