import api from '../api'
import {getUrlEnvironmentDomain} from '../../utils/getUrlEnv'

class AuthAPI {
  getCoach = (id: number) => api.get(`${getUrlEnvironmentDomain()}/coaches/${id}`)

  createCoachee = (data: any) => api.post(`${getUrlEnvironmentDomain()}/coaches`, data)
}

const service = new AuthAPI()

export default service
