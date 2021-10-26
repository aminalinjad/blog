import axios from "axios"

let headers = {}
const API_V1 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: headers,
})
API_V1.interceptors.response.use(response => {
    return response
  },
  async function (error) {
    return Promise.reject(error.response);
  }
)
export {API_V1}