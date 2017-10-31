<template>
  <div class="login">
    <el-row style="margin-top: 260px;z-index: 1;">
      <el-col :model="user" :offset="9" :span="5">
        <el-card class="login-box" v-loading="$store.state.loading" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-form>
            <h1 class="title">欢迎使用</h1>
            <p class="login-box-msg">疾如风，徐如林!</p>
            <el-form-item>
              <el-input type="text" v-model="user.userName" icon="fa-user-o" auto-complete="off" placeholder="请输入用户名..." suffix-icon="fa fa-user"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="user.password" icon="fa-lock" auto-complete="off" placeholder="请输入密码..." suffix-icon="fa fa-lock"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" :loading="$store.state.loading" class="pull-right">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .login {
    background: url(../assets/bg.jpg) no-repeat scroll center center / cover;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .login-box {
    background: rgba(0, 0, 0, 0.5);
    border: none;
  }

  .login-box-msg {
    color: #ffffff;
    text-align: center;
  }

  .login-box .title {
    color: #ffffff;
    text-align: center;
  }
</style>
<script>
  export default {
    name: "Login",
    data() {
      return {
        user: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        var self = this;
        self.$store.dispatch('Loading', true);
        setTimeout(function () {
          self.$store.dispatch('Loading', false);
          self.$router.push({path: '/dashboard'});
        }, 500);
      }
    }
  }
</script>
