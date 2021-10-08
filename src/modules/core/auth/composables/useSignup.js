import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
import useLogin from './useLogin'
const error = ref(null)

const signup = async (displayName, email, password, passwordConfirm) => {
  error.value = null
  try {
    if (password !== passwordConfirm) {
      throw new Error('As senhas não coincidem!')
    }
    const res = await fbAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Impossível se cadastrar.')
    }
    await res.user.updateProfile({ displayName })
    await res.user.sendEmailVerification()
    const { login } = useLogin()
    await login(email, password)
    error.value = null
    return res
  } catch (err) {
    console.log(err)
    error.value = err.code
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
