import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
// import store from '@/store'
const error = ref(null)

const logout = async () => {
  error.value = null
  try {
    await fbAuth.signOut()
    error.value = null
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout
