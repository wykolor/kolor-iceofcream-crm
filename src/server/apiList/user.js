import { get, post } from "../request";
const login = "/vue-admin-template/user/login";
const getInfo = "/vue-admin-template/user/info";
export default {
  loginReq: function(loginObj) {
    return post(login, loginObj);
  },
  getInfoReq: function(getInfoObj) {
    return get(getInfo, getInfoObj);
  }
};
