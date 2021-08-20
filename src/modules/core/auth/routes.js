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
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "login" */ './views/Profile'),
    props: true,
    meta: {
      title: 'Profile'
    }
  }
]
