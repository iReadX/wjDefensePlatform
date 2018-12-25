import Vue from 'vue'
import Router from 'vue-router'
import login from './login'
import view from './view'
import p404 from './404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    ...view,
    login,
    p404
  ],
  linkActiveClass: 'active'
})
