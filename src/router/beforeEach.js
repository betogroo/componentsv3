import { fbAuth } from '@/plugins/firebase'

export default (to, from, next) => {
  let user = fbAuth.currentUser
  console.log(to.meta)

  // if (to.name !== 'Welcome' && !user) {
  if (to.meta.requireAuth && !user) {
    next({ name: 'Welcome' })
  } else if (to.name === 'Welcome' && user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}
