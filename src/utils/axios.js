import axios from "axios"
import { ElMessage } from "element-plus"
import store from "../store"

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["X-Token"]
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 20000) {
      console.log("接口信息报错：", res.message)
      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return res
    }
  },
  (error) => {
    ElMessage.error(`${error}`)
    return Promise.reject(error)
  }
)
export default service
