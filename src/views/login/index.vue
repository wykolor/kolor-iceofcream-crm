<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm">
      <h1>User Login</h1>
      <el-form-item prop="mobile">
        <el-input
          v-model.number="loginForm.mobile"
          placeholder="电话号码"
          type="tel"
          prefix-icon="el-icon-mobile-phone"
        />
      </el-form-item>
      <el-form-item prop="sms" class="mobile-sms">
        <el-input
          v-model.number="loginForm.sms"
          placeholder="验证码"
          type="tel"
          prefix-icon="el-icon-tickets"
        />
        <el-button @click.prevent="getVerifyCode">获取验证码</el-button>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "",
        sms: ""
      }
    };
  },
  methods: {
    getVerifyCode() {
      this.$api.login
        .verifyCodeReq({ mobile: this.loginForm.mobile })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 340px;
    .mobile-sms {
      & /deep/ .el-form-item__content {
        display: flex;
        justify-content: space-between;
        .el-button {
          margin-left: 8px;
        }
      }
    }
    .login-btn {
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
