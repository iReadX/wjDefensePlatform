<!--
****--@date     2018-12-20 20:24
****--@author   YC
****--@describe 登录
-->
<template>
  <div class="login">
    <div class="indexLogin">
      <img src="/static/img/login_logo.png" >
    </div>
    <div class="main">
      <div class="logo">
        <img src="/static/img/logo.png">
        <p>戍将内源威胁防御平台</p>
      </div>
      <!--<img src="/static/img/login_logo.png" class="logo">-->
      <div class="box">
        <div class="username"><input type="text" autocomplete="off" placeholder="请输入用户名"></div>
        <div class="password"><input type="password" autocomplete="off" placeholder="请输入密码"></div>
        <p>
          <label for="remember">记住密码</label>
          <input type="checkbox" id="remember"/>
        </p>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
/* 当前组件必要引入 */
export default {
  name: 'login',
  props: {},
  data () {
    return {}
  },
  methods: {
    // 初始化
    init () {
    },
    login () {
      this.$router.push({name: 'overview'})
    }
  },
  created () {
    this.init()
  },
  mounted () {
  },
  components: {}
}

</script>
