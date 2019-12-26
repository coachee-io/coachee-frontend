import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

interface Params {
  tag?: string,
  limit?: number,
  page?: number
}

class CoachesAPI {
  getCoach = (id: number) => api.get(`${getUrlEnvironmentDomain()}/coaches/${id}`)

  getCoaches = (params?: Params) => api.get(`${getUrlEnvironmentDomain()}/coaches`, {params})

  createCoach = (data: any) => api.post(`${getUrlEnvironmentDomain()}/coaches`, data)
}

const service = new CoachesAPI()

export default service
