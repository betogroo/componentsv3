import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'

const error = ref(null)
const isPending = ref(false)

const reset = async (email) => {
  error.value = null
  isPending.value = true
  try {
    const res = await fbAuth.sendPasswordResetEmail(email)
    console.log('REset paawrod ' + email + ' ' + res)
    isPending.value = false
    error.value = null
    return res
  } catch (err) {
    console.log(err)
    isPending.value = false
    error.value = err.code
  }
}

const useResetPassword = () => {
  return { reset, isPending, error }
}

export default useResetPassword
