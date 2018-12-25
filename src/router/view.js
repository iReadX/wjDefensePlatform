import myView from '../components/view'

const router = [
  {
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
  },
  {
    path: '/risk_assessment',
    name: 'risk_assessment',
    component: myView,
    redirect: '/risk_assessment/assets',
    children: []
  },
  {
    path: '/risk_mitigation',
    name: 'risk_mitigation',
    component: myView,
    redirect: '/risk_mitigation/assets',
    children: []
  },
  {
    path: '/threat_perception',
    name: 'threat_perception',
    component: myView,
    redirect: '/threat_perception/assets',
    children: []
  },
  {
    path: '/analysis_report',
    name: 'analysis_report',
    component: myView,
    redirect: '/analysis_report/assets',
    children: []
  },
  {
    path: '/response',
    name: 'response',
    component: myView,
    redirect: '/response/assets',
    children: []
  },
  {
    path: '/system',
    name: 'system',
    component: myView,
    redirect: '/system/assets',
    children: []
  }
]

export default router
