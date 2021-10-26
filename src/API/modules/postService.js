import {API_V1} from "../mainApi"

class PostService {
  getPostData() {
    return API_V1.get('/posts')
  }
  getRecentPostData() {
    return API_V1.get('/recentBlog')
  }
}

export default new PostService();