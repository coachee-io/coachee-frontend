import api from 'utils/api'
import {getUrlEnvironmentDomain} from 'utils/getUrlEnv'

import {
  Params,
  CreateCoachRequest,
  CreateExpressCoachRequest,
  GetCoachRequest,
} from './types'

class CoachesAPI {
  getCoach = (id: number) => api
    .get<GetCoachRequest>(`${getUrlEnvironmentDomain()}/coaches/${id}`)
    .then((res) => res.data)

  getCoaches = (params?: Params) => api
    .get<GetCoachRequest[]>(`${getUrlEnvironmentDomain()}/coaches`, {params})
    .then((res) => res.data)

  createCoach = (data: CreateCoachRequest) => api
    .post(`${getUrlEnvironmentDomain()}/coaches`, data)
    .then((res) => res.data)

  createStripeExpressCoach = ({authorizationCode, state}: CreateExpressCoachRequest) => api
    .post(`${getUrlEnvironmentDomain()}/coaches/${state}/stripe`, {authorizationCode})
    .then((res) => res.data)
}

const service = new CoachesAPI()

export default service
