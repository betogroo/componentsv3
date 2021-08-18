export default [
  {
    path: '/',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "login" */ './views/Welcome'),
    meta: {
      title: 'Welcome',
      hideNav: true,
      icon: 'home-lightbulb'
    }
  }
]
