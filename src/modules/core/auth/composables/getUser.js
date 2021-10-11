import { ref } from 'vue'
import { onAuthStateChanged, fbAuth } from '@/plugins/firebase.js'
import store from '@/store'

const user = ref(fbAuth.currentUser)

onAuthStateChanged(fbAuth, (_user) => {
  if (_user) {
    user.value = _user
    store.dispatch('auth/setLoggedUser', _user)
  } else {
    store.dispatch('auth/setLoggedUser', null)
  }
})

const getUser = () => {
  return { user }
}

export default getUser
