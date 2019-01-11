<!--
****--@date     2018-12-20 22:43
****--@author   YC
****--@describe 头部
-->
<template>
  <div class="header">
    <div class="logo">
      <img src="/static/img/logo.png">
      <p>戍将内源威胁防御平台</p>
    </div>
    <div class="todo">
      <ul>
        <li class="item">
          <router-link :to="{name:'login'}">
            <span class="login">登录</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/set">
            <span class="setup">设置</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/help">
            <span class="help">帮助</span>
          </router-link>
        </li>
        <li class="item">
          <div class="contactBox">
            <router-link to="/contact">
              <span class="contact">联系我们</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/* 当前组件必要引入 */
export default {
  name: 'myHeader',
  props: {},
  data () {
    return {}
  },
  methods: {
    // 初始化
    init () {
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
