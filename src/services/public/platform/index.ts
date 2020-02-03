import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

class PlatformAPI {
  coachForgotPassword = (email: string) => api.post(`${getUrlEnvironmentDomain()}/recovery/coaches`, {email})

  coachVerifyForgotPasswordToken = (token: string) => api.get(`${getUrlEnvironmentDomain()}/recovery/coaches/${token}`)

  coachRecoverForgotPassword = (password: string, token: string) => api.post(`
    ${getUrlEnvironmentDomain()}/recovery/coaches/${token}`, {password})

  coacheeForgotPassword = (email: string) => api.post(`${getUrlEnvironmentDomain()}/recovery`, {email})

  coacheeVerifyForgotPasswordToken = (token: string) => api.get(`${getUrlEnvironmentDomain()}/recovery/${token}`)

  coacheeRecoverForgotPassword = (password: string, token: string) => api.post(`${getUrlEnvironmentDomain()}/recovery/${token}`, {password})
}

const service = new PlatformAPI()

export default service
