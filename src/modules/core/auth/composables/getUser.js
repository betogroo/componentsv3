import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase.js'
import store from '@/store'

const user = ref(fbAuth.currentUser)

fbAuth.onAuthStateChanged((_user) => {
  console.log('User change and now is', _user)
  user.value = _user
  store.dispatch('auth/setLoggedUser', _user)
})

const getUser = () => {
  return { user }
}

export default getUser
