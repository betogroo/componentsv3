import { ref } from 'vue'
import { fbFirestore } from '@/plugins/firebase.js'

const useCollection = (collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null
    try {
      await fbFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'Nao foi possivel enviar a mensagem'
    }
  }

  return { error, addDoc }
}

export default useCollection
