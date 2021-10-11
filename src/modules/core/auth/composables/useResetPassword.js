import { ref } from 'vue'
import { fbAuth, sendPasswordResetEmail } from '@/plugins/firebase'
import { useUtils } from '@/composables'

const error = ref(null)
const isPending = ref(false)
const { delay } = useUtils()

const reset = async (email) => {
  error.value = null
  isPending.value = true
  await delay()
  try {
    const res = await sendPasswordResetEmail(fbAuth, email)
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
