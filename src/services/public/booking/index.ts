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
  setupBooking = (data: Request): Promise<Response> => {
    const headers = {
      Authorization: `Bearer ${Auth.getToken()}`,
    }
    return api.post(`${getUrlEnvironmentDomain()}/orders`, data, {headers})
  }
}

const service = new BookingAPI()

export default service
