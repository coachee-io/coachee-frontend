import api from 'utils/api'
import {getUrlEnvironmentDomain} from 'utils/getUrlEnv'

import {
  CreateCoacheeRequest,
  CreateCoacheeResponse,
} from './types'

class CoacheesAPI {
  createCoachee = (data: CreateCoacheeRequest) => api
    .post<CreateCoacheeResponse>(`${getUrlEnvironmentDomain()}/clients`, data)
    .then((res) => res.data)
}

const service = new CoacheesAPI()

export default service
