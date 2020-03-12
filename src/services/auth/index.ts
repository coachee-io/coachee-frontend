import api from '../../utils/api'
import {getUrlEnvironmentDomain} from '../../utils/getUrlEnv'

export interface CoacheeLoginResponse {
  expiry: number,
  token: string,
  user: {
    firstName: string,
    id: number,
    lastName: string
  }
}

class AuthAPI {
  login = (email: string, password: string) => api
    .post<CoacheeLoginResponse>(`${getUrlEnvironmentDomain()}/clients/login`, {email, password})
    .then((res) => res.data)
}

const service = new AuthAPI()

export default service
