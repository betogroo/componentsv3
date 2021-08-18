import { ref } from 'vue'
// import { fbAuth } from '@/plugins/firebase'
// import store from '@/store'
const error = ref(null)

const logout = async () => {
  error.value = null
}

const useLogin = () => {
  return { error, logout }
}

export default useLogin
