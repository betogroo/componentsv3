export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home'),
    meta: {
      title: 'Home',
      requireAuth: true
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ './views/NotFound'),
    meta: {
      title: '404'
    }
  }
]
