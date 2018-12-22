import myView from '../components/view'

const router = {
  path: '/overview',
  name: 'overview',
  component: myView,
  redirect: '/overview/assets',
  children: [
    {
      path: 'assets',
      name: 'assets',
      component: () => import(/* webpackChunkName: "assets" */'../page/assets/index')
    },
    {
      path: 'other',
      name: 'other',
      component: () => import(/* webpackChunkName: "assets" */'../page/other/index')
    }
  ]
}

export default router
