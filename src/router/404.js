import myView from '../components/view'

const router = {
  path: '*',
  component: myView,
  redirect: '/*',
  children: [
    {
      path: '*',
      component: () => import(/* webpackChunkName: "assets" */'../page/other/index')
    }
  ]
}

export default router
