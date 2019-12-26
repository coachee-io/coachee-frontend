import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

class AuthAPI {
  login = (email: string, password: string) => api.post(`${getUrlEnvironmentDomain()}/clients/login`, {email, password})
}

const service = new AuthAPI()

export default service
