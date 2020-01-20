import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

class PlatformAPI {
  forgotPassword = (email: string) => api.post(`${getUrlEnvironmentDomain()}/recovery`, {email})

  verifyForgotPasswordToken = (token: string) => api.get(`${getUrlEnvironmentDomain()}/recovery/${token}`)

  recoverForgotPassword = (password: string, token: string) => api.post(`${getUrlEnvironmentDomain()}/recovery/${token}`, {password})
}

const service = new PlatformAPI()

export default service
