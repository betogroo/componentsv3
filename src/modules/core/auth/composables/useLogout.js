import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
import store from '@/store'
import { useUtils } from '@/composables'
const error = ref(null)
const isPending = ref(false)
const { delay } = useUtils()

const logout = async () => {
  error.value = null
  await delay()
  isPending.value = true
  try {
    await fbAuth.signOut()
    store.dispatch('auth/setLoggedUser', null)
    error.value = null
    isPending.value = false
  } catch (err) {
    console.log(err.message)
    error.value = err.code
    isPending.value = false
  }
}

const useLogout = () => {
  return { error, isPending, logout }
}

export default useLogout
