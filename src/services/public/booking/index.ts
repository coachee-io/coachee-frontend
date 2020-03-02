import api from '../../../utils/api'
import Auth from '../../../utils/tokens'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

import {
  BookingRequest,
  BookingResponse,
} from './types'


class BookingAPI {
  setupBooking = (data: BookingRequest) => {
    const headers = {
      Authorization: `Bearer ${Auth.getToken()}`,
    }
    return api.post<BookingResponse>(`${getUrlEnvironmentDomain()}/orders`, data, {headers})
      .then((res) => res.data)
  }
}

const service = new BookingAPI()

export default service
