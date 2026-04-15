import http from '../utils/http'

export const getUserList = () => {
  return http.get("/user/getAll")
}

// export const deleteById = (id) => {
//     return http.post("/user/deleteById")
// }
