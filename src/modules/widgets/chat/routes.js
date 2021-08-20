/* import { fbAuth } from '@/plugins/firebase'

const requireAuth = (to, from, next) => {
  let user = fbAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
} */
export default [
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import(/* webpackChunkName: "login" */ './views/Chatroom'),
    //beforeEnter: requireAuth,
    meta: {
      title: 'Chat'
    }
  }
]
