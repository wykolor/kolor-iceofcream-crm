import { get, post } from "../request";
// 获取验证码
const verifyCode = "/api/v1/modular/login/add/login/verifyCode";
// 登录
const login = "/api/v1/modular/login/phone/login";

export default {
  verifyCodeReq: function(verifyCodeObj) {
    return get(verifyCode, verifyCodeObj);
  },
  loginReq: function(loginObj) {
    return post(login, loginObj);
  }
};
