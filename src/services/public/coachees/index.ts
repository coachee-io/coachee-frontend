import api from '../../../utils/api'
import {getUrlEnvironmentDomain} from '../../../utils/getUrlEnv'

class CoacheesAPI {
  createCoachee = (data: any) => api.post(`${getUrlEnvironmentDomain()}/clients`, data)
    .then((res: any) => res.data)
}

const service = new CoacheesAPI()

export default service
