export default [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "login" */ './views/Welcome'),
    meta: {
      title: 'Welcome',
      hideNav: true,
      icon: 'home-lightbulb'
    }
  },
  {
    path: '/profile',
    name: 'ViewProfile',
    component: () => import(/* webpackChunkName: "login" */ './views/Profile'),
    meta: {
      title: 'Profile'
    }
  }
]
