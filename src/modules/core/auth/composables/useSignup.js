import { ref } from 'vue'
import { fbAuth } from '@/plugins/firebase'
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
    error.value = null
    console.log(res.user)
    return res
  } catch (err) {
    error.value = err.message
    console.log(error.value)
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
