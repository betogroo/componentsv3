export default [
  {
    path: '/',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "login" */ './views/Welcome'),
    meta: {
      title: 'Welcome',
      hideNav: true,
      inNav: true,
      icon: 'home-lightbulb',
      isPublic: true
    }
  }
]
