export default [
  {
    path: '/welcome/:mode?',
    name: 'Welcome',
    component: () =>
      import(/* webpackChunkName: "welcome" */ './views/Welcome'),
    props: (route) => ({ mode: route.params.mode || 'login' }),
    meta: {
      title: 'Welcome',
      hideNav: true,
      icon: 'home-lightbulb'
    }
  },
  {
    path: '/profile',
    name: 'ViewProfile',
    component: () =>
      import(/* webpackChunkName: "profile" */ './views/Profile'),
    meta: {
      title: 'Profile'
    }
  }
]
