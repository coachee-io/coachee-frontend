import {AxiosError} from 'axios'

const axiosErrorHandler = (error: AxiosError) => {
  if (error.response) {
    throw new Error(error.response.data.message)
  }

  throw new Error(error.message)
}

export default axiosErrorHandler
