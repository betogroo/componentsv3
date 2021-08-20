import { fbAuth } from '@/plugins/firebase'

export default (to, from, next) => {
  let user = fbAuth.currentUser

  if (to.name !== 'Welcome' && !user) {
    next({ name: 'Welcome' })
  } else if (to.name === 'Welcome' && user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}
