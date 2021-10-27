import {API_V1} from "../mainApi"

class Auth {
  login(user) {
    return API_V1.post('/login' , user)
  }
  register(user) {
    return API_V1.post('/register' , user)
  }
}
export default new Auth()