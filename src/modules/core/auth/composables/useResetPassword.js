import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'

const error = ref(null)

const reset = async (email) => {
  error.value = null
  try {
    const res = await fbAuth.sendPasswordResetEmail(email)
    console.log('REset paawrod ' + email + ' ' + res)
    error.value = null
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useResetPassword = () => {
  return { reset, error }
}

export default useResetPassword
