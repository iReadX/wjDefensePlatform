// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import viserVue from 'viser-vue'
import echarts from 'echarts'

require('es6-shim')

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
// Vue.use(viserVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
