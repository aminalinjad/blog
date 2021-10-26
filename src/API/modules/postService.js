import {API_V1} from "../mainApi"

class PostService {
  getPostData() {
    return API_V1.get('/posts')
  }
}

export default new PostService();