import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
import useLogin from './useLogin'
import { useUtils } from '@/composables'
const error = ref(null)
const isPending = ref(false)
const { delay } = useUtils()

const signup = async (displayName, email, password, passwordConfirm) => {
  error.value = null
  isPending.value = true
  await delay()
  try {
    if (
      displayName === '' ||
      displayName === null ||
      displayName === undefined
    ) {
      throw {
        code: 'auth/displayname-required',
        message: 'Display name is required.'
      }
    }
    if (email === '' || email === null || email === undefined) {
      throw {
        code: 'auth/email-required',
        message: 'Email is required.'
      }
    }
    if (password === '' || password === null || password === undefined) {
      throw {
        code: 'auth/blank-blank-password',
        message: 'Password is required.'
      }
    }
    if (
      passwordConfirm === '' ||
      passwordConfirm === null ||
      passwordConfirm === undefined
    ) {
      throw {
        code: 'auth/blank-blank-password-confirm',
        message: 'Password Confirm is required.'
      }
    }
    if (password !== passwordConfirm) {
      throw {
        code: 'auth/passwords-do-not-match',
        message: 'Passwords do not match'
      }
    }
    const res = await fbAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw { code: 'auth/generic-signup-error', message: 'Generic error' }
    }
    await res.user.updateProfile({ displayName })
    await res.user.sendEmailVerification()
    const { login } = useLogin()
    await login(email, password)
    error.value = null
    isPending.value = false
    return res
  } catch (err) {
    isPending.value = false
    console.log(err)
    error.value = err.code
  }
}

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup
