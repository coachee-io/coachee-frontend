import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

import {
  CoachLoginResponse,
} from './types'

class PlatformAPI {
  coachLogin = (email: string, password: string) => api
    .post<CoachLoginResponse>(`${getUrlEnvironmentDomain()}/coaches/login`, {email, password})
    .then((res) => res.data)

  coachForgotPassword = (email: string) => api
    .post(`${getUrlEnvironmentDomain()}/coaches/recovery`, {email})
    .then((res) => res.data)

  coachVerifyForgotPasswordToken = (token: string) => api
    .get(`${getUrlEnvironmentDomain()}/coaches/recovery/${token}`)
    .then((res) => res.data)

  coachRecoverForgotPassword = (password: string, token: string) => api
    .post(`${getUrlEnvironmentDomain()}/coaches/recovery/${token}`, {password})
    .then((res) => res.data)

  coacheeForgotPassword = (email: string) => api
    .post(`${getUrlEnvironmentDomain()}/recovery`, {email})
    .then((res) => res.data)

  coacheeVerifyForgotPasswordToken = (token: string) => api
    .get(`${getUrlEnvironmentDomain()}/recovery/${token}`)
    .then((res) => res.data)

  coacheeRecoverForgotPassword = (password: string, token: string) => api
    .post(`${getUrlEnvironmentDomain()}/recovery/${token}`, {password})
    .then((res) => res.data)
}

const service = new PlatformAPI()

export default service
