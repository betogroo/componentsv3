import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
import store from '@/store'
const error = ref(null)

const login = async (email, password) => {
  error.value = null
  try {
    const res = await fbAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    store.dispatch('auth/setLoggedUser', res.user)
    console.log(res)
    return res
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
