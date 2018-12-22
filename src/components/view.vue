<!--
****--@date     2018-12-20 22:47
****--@author   YC
****--@describe 视图
-->
<template>
  <layout>
    <my-header slot="header"></my-header>
    <my-menu slot="menu"></my-menu>
    <router-view slot="content"></router-view>
  </layout>
</template>
<script>
import MyHeader from './header'
/* 当前组件必要引入 */
import Layout from './layout'
import MyMenu from './menu'
export default {
  name: 'myView',
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
  components: {MyMenu, MyHeader, Layout}
}

</script>
