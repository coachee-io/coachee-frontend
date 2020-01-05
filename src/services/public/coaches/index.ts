import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

interface Params {
  tag?: string,
  limit?: number,
  page?: number
}

class CoachesAPI {
  getCoach = (id: number): any => api.get(`${getUrlEnvironmentDomain()}/coaches/${id}`)

  getCoaches = (params?: Params): any => api.get(`${getUrlEnvironmentDomain()}/coaches`, {params})

  createCoach = (data: any): any => api.post(`${getUrlEnvironmentDomain()}/coaches`, data)
}

const service = new CoachesAPI()

export default service
