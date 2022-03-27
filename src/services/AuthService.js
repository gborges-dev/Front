import { httpRequest } from './HttpRequest.js'

export default{
  async login(user){
    const { data } = await httpRequest.post("/auth/login", user);
    return data;
  }
}