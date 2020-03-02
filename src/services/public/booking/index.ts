import {AxiosPromise} from 'axios'
import api from '../../../utils/api'
import Auth from '../../../utils/tokens'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

interface Response {
  clientSecret: string,
  publishingKey: string
}

interface Request {
  coachId: string | number | any,
  programId: string | number | any,
  introCall: string | number | any
}

class BookingAPI {
  setupBooking = (data: Request) => {
    const headers = {
      Authorization: `Bearer ${Auth.getToken()}`,
    }
    return api.post<Response>(`${getUrlEnvironmentDomain()}/orders`, data, {headers})
      .then((res) => res.data)
  }
}

const service = new BookingAPI()

export default service
