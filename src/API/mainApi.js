import axios from "axios"
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let headers = {}
const API_V1 = axios.create({
  baseURL: 'https://twitterapi.liara.run/api',
  headers: headers,
})
API_V1.interceptors.response.use(response => {
    return response
  },
  async function (error) {
    console.log(error.response.data.message)
    toast.error(`${error.response.data.message}`, {
      position: 'bottom-right',
      autoClose: 3000,
      draggable: true,
      theme: 'dark',
    });
    return Promise.reject(error.response);
  }
)
export {API_V1}