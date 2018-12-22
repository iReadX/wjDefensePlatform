const router = {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */'../page/login/index')
}

export default router
