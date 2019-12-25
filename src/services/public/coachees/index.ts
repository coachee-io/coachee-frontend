import api from '../../api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

interface Params {
  tag?: string,
  limit?: number,
  page?: number
}

class CoacheesAPI {
  getCoach = (id: number) => api.get(`${getUrlEnvironmentDomain()}/coaches/${id}`)

  getCoaches = (params?: Params) => api.get(`${getUrlEnvironmentDomain()}/coaches`, {params})

  createCoachee = (data: any) => api.post(`${getUrlEnvironmentDomain()}/coaches`, data)
}

const service = new CoacheesAPI()

export default service
