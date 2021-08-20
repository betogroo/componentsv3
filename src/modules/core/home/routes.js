export default [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "login" */ './views/NotFound'),
    //beforeEnter: requireAuth,
    meta: {
      title: '404'
    }
  }
]
