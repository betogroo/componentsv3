const validateParam = (to, from, next) => {
  const validParams = ['login', 'signup', 'reset', '']
  if (validParams.includes(to.params.mode)) {
    next()
  } else {
    console.log(from)
    next({ path: '/welcome' })
  }
}

export default [
  {
    path: '/welcome/:mode?',
    name: 'Welcome',
    component: () =>
      import(/* webpackChunkName: "welcome" */ './views/Welcome'),
    props: (route) => ({ mode: route.params.mode || 'login' }),
    beforeEnter: validateParam,
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
