export default [
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import(/* webpackChunkName: "login" */ './views/Chatroom'),
    meta: {
      title: 'Chat'
    }
  }
]
