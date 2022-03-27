import axios from "axios";

export const httpRequest = axios.create({
    baseURL: 'http://localhost:3000'
});

httpRequest.interceptors.request.use((request) => {
  if(!request.headers){
    request.headers = {}
  }
  request.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return request;
})