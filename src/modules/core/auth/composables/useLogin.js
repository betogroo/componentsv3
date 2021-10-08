import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
import store from '@/store'
import utils from '@/utils/utils'
//const store = useStore()
const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  isPending.value = true
  await utils.delay()
  try {
    const res = await fbAuth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw { code: 'auth/generic-login-error', message: 'Generic Login Error' }
    }
    error.value = null
    store.dispatch('auth/setLoggedUser', res.user)
    isPending.value = false
    return res
  } catch (err) {
    store.dispatch('auth/setLoggedUser', null)
    console.log(err)
    isPending.value = false
    error.value = err.code
  }
}

const useLogin = () => {
  return { error, isPending, login }
}

export default useLogin
